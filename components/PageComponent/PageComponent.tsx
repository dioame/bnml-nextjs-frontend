import DefaultLayout from "@/layouts/default";
import axios from 'axios';
import { useEffect, useMemo, useState } from "react";
import { useSession,signOut } from 'next-auth/react';

import CustomTableComponent from "@/components/TableComponent/CustomTableComponent";
import { Autocomplete, AutocompleteItem, Button, Card, CardBody, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Skeleton, useDisclosure } from "@nextui-org/react";
import Swal from 'sweetalert2'
import { PlusIcon } from "@/components/TableComponent/assets/PlusIcon";
import { CircleAnimatedIcon } from "../animatedIcons";

type User = {
  id: string;
  name: string;
};

type ActivityData = {
  data: any[];
};

type Installation = {
  id: string;
  name: string;
};


export default function({_API_URL,_PAGE_NAME,_FORM_FIELDS,_SEARCH_TERM_URL}:any) {

  const [formData, setFormData] = useState(_FORM_FIELDS);
  const formFields = Object.keys(formData);
  const [activityData, setActivityData] = useState<ActivityData>({ data: [] });
  const [columTable, setColumnTable] = useState({});
  const [loading, setLoading] = useState(false);
  const [updateDataId, setUpdateDataId] = useState(null);
  const { data: session, status } = useSession();
  const token = session?.user?.token;
  const { isOpen, onOpen, onClose } = useDisclosure();  
  const [modalTitle, setModalTitle] = useState('Modal Title');
  const [pageStatus, setPageStatus] = useState(0);

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
      sortable:false
    });
    return finalFormattedKeys;
  }
 
  const fetchData = async () => {
    try {
      const res = await axios.get(_API_URL, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      var resultData = res.data;
      const cleanedData = resultData.data.map((item:any) => {
          const newItem = {...item}; // Create a copy of the item
          Object.keys(newItem).forEach(key => {
              if (key.endsWith('_id')) {
                  delete newItem[key]; // Delete the key if it ends with '_id'
              }
          });
          return newItem; // Return the cleaned item
      });



      var cols = formatColumns({data:cleanedData});
      setColumnTable(cols)
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
    setIsSubmitting(true);
    let url_api:string;



    if(updateDataId){
      url_api = `${_API_URL}/${updateDataId}`;
      await axios.put(url_api, formData,{
        headers: { Authorization: `Bearer ${token}` },
      });

    }else{
      url_api = _API_URL;
      await axios.post(url_api, formData,{
        headers: { Authorization: `Bearer ${token}` },
      });

    }

    fetchData()
    onClose();
    setSearchUserTerm('')
    setSearchInstallationTerm('')
    setIsSubmitting(false);
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
        columns={columTable}
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



  const fetchUsers = async () => {
    try {
      const response = await axios.get(_SEARCH_TERM_URL.user_url, {
        headers: { Authorization: `Bearer ${token}` },
        params: { term: searchUserTerm },
      });
      const {data} = response.data;
      setSearchUserValue(data);
    } catch (error) {
      console.error('Error fetching animals:', error);
    }
  };

  const fetchInstallation = async () => {
    try {
      const response = await axios.get(_SEARCH_TERM_URL.installation_url, {
        headers: { Authorization: `Bearer ${token}` },
        params: { term: searchInstallationTerm },
      });
      const {data} = response.data;
      setSearchInstallationValue(data);
    } catch (error) {
      console.error('Error fetching animals:', error);
    }
  };


  useEffect(() => {
    if(token){
      fetchUsers();
      fetchInstallation();
    }
  }, [searchUserTerm,token]);


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
