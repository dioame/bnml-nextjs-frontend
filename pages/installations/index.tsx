import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

import axios from 'axios';
import { useEffect, useMemo, useState } from "react";
import { useSession,signOut } from 'next-auth/react';

import CustomTableComponent from "@/components/TableComponent/CustomTableComponent";
import { Button, Card, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Skeleton, useDisclosure } from "@nextui-org/react";
import Swal from 'sweetalert2'
import { PlusIcon } from "@/components/TableComponent/assets/PlusIcon";

export default function() {
  const _API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/staff/installation`;
  const _PAGE_NAME = "Installation";

  const [activityData, setActivityData] = useState([]);
  const [columTable, setColumnTable] = useState({});
  const [loading, setLoading] = useState(false);
  const [updateDataId, setUpdateDataId] = useState(null);
  const { data: session, status } = useSession();
  const token = session?.user?.token;
  const { isOpen, onOpen, onClose } = useDisclosure();  
  const [modalTitle, setModalTitle] = useState('Modal Title');
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

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
      uid: "actions"
    });
    return finalFormattedKeys;
  }
 
  const fetchData = async () => {
    try {
      const res = await axios.get(_API_URL, {
        headers: { Authorization: `Bearer ${token}` }
      });
      var cols = formatColumns(res.data);
      setColumnTable(cols)
      setActivityData(res.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
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
    setFormData((prevState) => ({
      ...prevState,
      name: data.name,
      description: data.description,
    }));
  }

  const  handleModalSave = async () =>{
    const newData = {
      name: formData.name,
      description: formData.description,
    };

    
    if(updateDataId){
      var url_api = `${_API_URL}/${updateDataId}`;
      await axios.put(url_api, newData,{
        headers: { Authorization: `Bearer ${token}` },
      });

    }else{
      var url_api = _API_URL;
      await axios.post(url_api, newData,{
        headers: { Authorization: `Bearer ${token}` },
      });

    }

    fetchData()
    onClose();
  }

  const handleChange = (event:any) => {
    const { name, value } = event.target;
    
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDelete = async (data:any) => {
    // var _c = confirm("Are you sure?");
    // if(_c){
    
    // }

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
          <Input 
             autoFocus 
             type="text" 
             name="name" 
             label="Name"
             value={formData.name} 
             onChange={handleChange}  
           />
           <Input 
             autoFocus 
             type="text" 
             name="description" 
             label="Description"
             value={formData.description} 
             onChange={handleChange}  
           />
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onPress={handleModalSave}>
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

      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
            <h1>{_PAGE_NAME}</h1><br/>
            <hr />

            {activityData.data 
              ? 
                <CustomTableComponent 
                title="activity"
                tableDatas={activityData.data}
                columns={columTable}
                onAddNew={()=>{ handleOpen() }}
                onEditNew={(data:any)=>{ handleEditOpen(data) }}
                onDelete={(data:any)=>{ handleDelete(data)}}
                />
                :
                
                <>
                <div className="flex justify-between gap-3 items-end">
                  <div className="flex gap-3">
                    <Button color="primary" endContent={<PlusIcon />} onPress={() => handleOpen()}>
                      Add New
                    </Button>
                  </div>
              </div>
              <br/>
              <p>No Result Found</p>
              </>

              }
         
        </div>
      </section>
    </DefaultLayout>
  );
}
