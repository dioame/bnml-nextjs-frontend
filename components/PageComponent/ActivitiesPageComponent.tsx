import DefaultLayout from "@/layouts/default";
import axios from 'axios';
import { useEffect, useMemo, useState } from "react";
import { useSession,signOut } from 'next-auth/react';

import CustomTableComponent from "@/components/TableComponent/CustomTableComponent";
import { Autocomplete, AutocompleteItem, Button, Card, CardBody, DatePicker, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Skeleton, useDisclosure } from "@nextui-org/react";
import Swal from 'sweetalert2'
import { PlusIcon } from "@/components/TableComponent/assets/PlusIcon";
import moment from 'moment';
type User = {
  id: string;
  name: string;
};

type Installation = {
  id: string;
  name: string;
};

interface ActivityData {
  data: any[]; 
}

export default function({
  _API_URL,
  _PAGE_NAME,
  _FORM_FIELDS,
  _SEARCH_TERM_URL,
  _ACTIVITY_ID,
  _IS_ATTENDANCE,
  _DEFINE_COLUMNS
}:any) {

const [formData, setFormData] = useState<Record<string, any>>(_FORM_FIELDS);
const formFields = Object.keys(formData);
const [activityData, setActivityData] = useState<ActivityData>({ data: [] });
const [columnTable, setColumnTable] = useState<Record<string, any>>({});
const [loading, setLoading] = useState(false);
const [updateDataId, setUpdateDataId] = useState<string | null>(null);
const { data: session, status } = useSession();
const token = session?.user?.token;
const { isOpen, onOpen, onClose } = useDisclosure();
const [modalTitle, setModalTitle] = useState<string>('Modal Title');
const [pageStatus, setPageStatus] = useState<number>(0);

const [searchUserTerm, setSearchUserTerm] = useState<string>('');
const [searchUserValue, setSearchUserValue] = useState<User[]>([]); 
const [searchInstallationTerm, setSearchInstallationTerm] = useState<string>('');
const [searchInstallationValue, setSearchInstallationValue] = useState<Installation[]>([]); 
const [isSubmitting, setIsSubmitting] = useState(false);
  

  const formatColumns = (res:any) => {
    const { data } = res;
    const keys = Object.keys(data[0]);
    const formattedKeys = keys.map(key => {
      let name = key
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    
      return {
        name: name.toUpperCase(),
        uid: key,
        sortable: true
      };
    });
  const finalFormattedKeys = formattedKeys.concat({
      name: "ACTIONS",
      uid: "actions",
      sortable: false
    });
    return finalFormattedKeys;
  }
 
  const fetchData = async () => {
    try {
      const res = await axios.get(_API_URL, {
        params: {
            lib_activity_id:_ACTIVITY_ID
        },
        headers: { 
            Authorization: `Bearer ${token}` 
        }
      });
      
      var resultData = res.data;
      const cleanedData = resultData.data.map((item:any) => {
          const newItem = {...item}; // Create a copy of the item
          Object.keys(newItem).forEach(key => {
              if (key.endsWith('_id')) {
                  delete newItem[key]; // Delete the key if it ends with '_id'
              }
              if (_IS_ATTENDANCE === false && key === 'count') {
                  delete newItem[key]; // Delete the 'count' key if _IS_ATTENDANCE is false
              }
          });
          return newItem; // Return the cleaned item
      });


      if(_DEFINE_COLUMNS){
        setColumnTable(_DEFINE_COLUMNS)
      }else{
        var cols = formatColumns({data:cleanedData});
        setColumnTable(cols)
      }
      

      setActivityData({data:cleanedData});
      setLoading(false);
      if(res.data.data){
        setPageStatus(1);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
      setPageStatus(-1)
    }
  };

    useEffect(() => {
      setLoading(true);
      if (token) {
        fetchData();
      }
    }, [token]);
  
  const handleOpen = () => {
    onOpen();
    setModalTitle('Add New');
  }

  const handleEditOpen = (data:any) =>{
    setUpdateDataId(data.id);
    onOpen();
    setModalTitle('Edit Item');

  }

  const  handleModalSave = async () =>{
    setIsSubmitting(true)
    // For start_date
    const { year: startYear, month: startMonth, day: startDay, hour: startHour, minute: startMinute, second: startSecond } = formData.start_date;
    const formattedStartDate = moment({ year: startYear, month: startMonth - 1, day: startDay, hour: startHour, minute: startMinute, second: startSecond }).format('YYYY-MM-DD HH:mm:ss');

    // For end_date
    const { year: endYear, month: endMonth, day: endDay, hour: endHour, minute: endMinute, second: endSecond } = formData.end_date;
    const formattedEndDate = moment({ year: endYear, month: endMonth - 1, day: endDay, hour: endHour, minute: endMinute, second: endSecond }).format('YYYY-MM-DD HH:mm:ss');
    // console.log(formattedStartDate); // Output: "2024-07-23 15:23:26"
    // console.log(formattedEndDate); // Output: "2024-07-23 15:23:26"

    if (!formData.name || !formData.description || !formData.area) {
      Swal.fire("Error", "Please fill all fields", "error");
      setIsSubmitting(false)
      return;
    }

    const newFormData = {
        lib_activity_id: _ACTIVITY_ID,
        name: formData.name,
        description: formData.description,
        area: formData.area,
        start_date: formattedStartDate,
        end_date: formattedEndDate
      };
    
    let url_api: string;
    if(updateDataId){
      url_api = `${_API_URL}/${updateDataId}`;
      await axios.put(url_api, newFormData,{
        headers: { Authorization: `Bearer ${token}` },
      });

    }else{
      url_api = _API_URL;
      await axios.post(url_api, newFormData,{
        headers: { Authorization: `Bearer ${token}` },
      });

    }

    fetchData()
    onClose();
    setSearchUserTerm('')
    setSearchInstallationTerm('')
    setIsSubmitting(false)
  }


  const handleChange = (event:any) => {
    const { name, value } = event.target;
    
    setFormData((prevState:any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelect = (value:any,type:any) => {
    
    setFormData((prevState:any) => ({
      ...prevState,
      [type]: value,
    }));
  };

  const handleDelete = async (data:any) => {

    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Continue",
    }).then((result) => {
      if (result.isConfirmed) {
        (async () => {
          try {
            var url_api = `${_API_URL}/${data.id}`;
            await axios.delete(url_api, {
              headers: { Authorization: `Bearer ${token}` },
            });
            fetchData(); // Call your data fetching function after successful deletion
          } catch (error) {
            console.error("Error deleting data:", error);
            // Optionally, display an error message to the user
            Swal.fire("Error", "Failed to delete the data", "error");
          }
        })(); // Immediately invoke the async function
      }
    });
    
  };


  const renderComponent = () => {
    if (pageStatus == 1) {
      return (
        <CustomTableComponent 
        title="activity"
        tableDatas={activityData.data}
        columns={columnTable}
        onAddNew={()=>{ handleOpen() }}
        onEditNew={(data:any)=>{ handleEditOpen(data) }}
        onDelete={(data:any)=>{ handleDelete(data)}}
        />
      )
    } else if (pageStatus == 0) {
      return (
        <section className="flex flex-col items-center justify-center gap-4">
          <br/>
        <div className="inline-block max-w text-center justify-center">
          <Card className="w-[200px] space-y-5 p-4 item" radius="lg">
            <Skeleton className="rounded-lg">
              <div className="h-24 rounded-lg bg-default-300"></div>
            </Skeleton>
            <div className="space-y-3">
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-4/5 rounded-lg">
                <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-2/5 rounded-lg">  
                <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
              </Skeleton>
            </div>
          </Card>
        </div>
        </section>
      );
    } else {
      return (
        <section className="flex flex-col items-center justify-center gap-4">
        <br/>
      <div className="inline-block max-w text-center justify-center">
        <div className="flex justify-between gap-3 items-end">
          <div className="flex gap-3">
            <Button color="primary" endContent={<PlusIcon />} onPress={() => handleOpen()}>
              Add New
            </Button>
          </div>
      </div>
      <br/>
      <p>No Result Found</p>
      </div>
      </section>
      );
    }
  };

  return (
    <DefaultLayout>


<Modal backdrop="blur" isOpen={isOpen} onClose={onClose} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
      <ModalHeader className="flex flex-col gap-1">
        <h1>{modalTitle}</h1>
      </ModalHeader>
      <ModalBody>
        {
          formFields.map((item)=>{
              switch (item) {
                case "start_date": 
                return (
                    <DatePicker
                    label="Start Date"
                    variant="bordered"
                    hideTimeZone
                    showMonthAndYearPickers
                    defaultValue={formData.start_date}
                    onChange={(value)=>{
                        setFormData((prevData:any) => ({
                            ...prevData,
                            start_date: value,
                        }));
                    }}
                  />
                );
                case "end_date": 
                return (
                    <DatePicker
                    label="End Date"
                    variant="bordered"
                    hideTimeZone
                    showMonthAndYearPickers
                    defaultValue={formData.end_date}
                    onChange={(value)=>{
                        setFormData((prevData:any) => ({
                            ...prevData,
                            end_date: value,
                        }));
                    }}
                    />
                );
                case "user_id": 
                return (
                  <Autocomplete
                  label="SELECT USER"
                  className="max-w"
                  placeholder="Search User"
                  name={item}
                  onInputChange={
                    (value) => {
                      setSearchUserTerm(value);
                    }
                  }
                  onSelectionChange={(value)=>{
                    handleSelect(value,"user_id");
                  }}
                >
                  {searchUserValue.map((item) => (
                    <AutocompleteItem key={item.id} value={item.id}>
                      {item.name}
                    </AutocompleteItem>
                  ))}
                </Autocomplete>
                );
                case "lib_installation_id": 
                return (
                  <Autocomplete
                  label="SELECT INSTALLATION"
                  className="max-w"
                  placeholder="Search Installation"
                  name={item}
                  onInputChange={
                    (value) => {
                      setSearchInstallationTerm(value);
                    }
                  }
                  onSelectionChange={(value)=>{
                    handleSelect(value,"lib_installation_id");
                  }}
                >
                  {searchInstallationValue.map((item) => (
                    <AutocompleteItem key={item.id} value={item.id}>
                      {item.name}
                    </AutocompleteItem>
                  ))}
                </Autocomplete>
                );
                default:
                return (
                  <Input 
                    autoFocus 
                    type="text" 
                    name={item} 
                    label={item.toLocaleUpperCase()}
                    value={formData[item]} 
                    onChange={handleChange}  
                  />
                );
              }
          })
        }
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onPress={handleModalSave} isDisabled={isSubmitting}>
            Save
        </Button>
        <Button color="danger" variant="light" onPress={onClose}>
            Close
        </Button>
      </ModalFooter>
      </>
          )}
        </ModalContent>
      </Modal>
      <h3 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
        {_PAGE_NAME}
      </h3>
          
      {renderComponent()}
    </DefaultLayout>
  );
}
