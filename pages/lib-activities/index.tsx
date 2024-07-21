import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

import axios from 'axios';
import { useEffect, useMemo, useState } from "react";
import { useSession,signOut } from 'next-auth/react';

import CustomTableComponent from "@/components/TableComponent/CustomTableComponent";
import { Button, Card, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Skeleton, useDisclosure } from "@nextui-org/react";
import Swal from 'sweetalert2'


export default function LibActivities() {

  const [activityData, setActivityData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [updateDataId, setUpdateDataId] = useState(null);
  const { data: session, status } = useSession();
  const token = session?.user?.token;

  const columns = [
    {name: "ID", uid: "id", sortable: true},
    {name: "NAME", uid: "name", sortable: true},
    {name: "DESCRIPTION", uid: "description", sortable: true},
    {name: "CREATED_BY", uid: "created_by", sortable: true},
    {name: "ACTIONS", uid: "actions"},
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();  
  const [modalTitle, setModalTitle] = useState('Modal Title');
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

 
  const fetchData = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/staff/lib_activities`, {
        headers: { Authorization: `Bearer ${token}` }
      });
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
      var url_api = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/staff/lib_activities/${updateDataId}`;
      await axios.put(url_api, newData,{
        headers: { Authorization: `Bearer ${token}` },
      });

    }else{
      var url_api = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/staff/lib_activities`;
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
            var url_api = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/staff/lib_activities/${data.id}`;
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
          {activityData.data 
          ? 
            <CustomTableComponent 
            title="activity"
            tableDatas={activityData.data}
            columns={columns}
            onAddNew={()=>{ handleOpen() }}
            onEditNew={(data:any)=>{ handleEditOpen(data) }}
            onDelete={(data)=>{ handleDelete(data)}}
            />
            :
            <Card className="w-[200px] space-y-5 p-4" radius="lg">
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
          }
        </div>
      </section>
    </DefaultLayout>
  );
}
