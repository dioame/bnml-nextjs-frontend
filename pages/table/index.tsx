import TableComponent from '@/components/TableComponent/TableComponent'
import ModalComponent from '@/components/ModalComponent/ModalComponent'
import React,{useRef} from 'react'
import CurrencyInput from 'react-currency-input-field';
import Select2 from 'react-select';
import {
  useDisclosure,
  Button,
  Input,
  ModalHeader,
  ModalBody,
  ModalFooter,
  DatePicker,
  Select,
  SelectItem
} from "@nextui-org/react";


const table = () => {

  const columns = [
    {name: "ID", uid: "id", sortable: true},
    {name: "NAME", uid: "name", sortable: true},
    {name: "AGE", uid: "age", sortable: true},
    {name: "ROLE", uid: "role", sortable: true},
    {name: "TEAM", uid: "team"},
    {name: "EMAIL", uid: "email"},
    {name: "STATUS", uid: "status", sortable: true},
    {name: "BIRTH DATE", uid: "birth_date"},
    {name: "Amount", uid: "amount"},
    {name: "ACTIONS", uid: "actions"},
  ];
  
  const statusOptions = [
    {name: "Active", uid: "active"},
    {name: "Paused", uid: "paused"},
    {name: "Vacation", uid: "vacation"},
  ];
  
  var [users, setUsers] = React.useState([
    {
      id: 1,
      name: "Tony Reichert",
      role: "CEO",
      team: "Management",
      status: "active",
      age: "29",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      email: "tony.reichert@example.com",
    },
  ]);


  const customModal = {
    content: () => {
      const [formData, setFormData] = React.useState({
        id: 5,
        name: '',
        role: '',
        team: '',
        status: '',
        age: '',
        avatar: '',
        email: '',
      });

      const handleModalSave = () =>{
        const newUser = {
          id: 212,
          name: formData.name,
          role: formData.role,
          team: formData.team,
          status: formData.status,
          age: formData.age,
          avatar: "https://i.pravatar.cc/150?u=a042581f4e29026025d",
          email: formData.email,
        };
    
        setUsers([...users, newUser]);
        onClose();
      }

      const handleChange = (event:any) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };


      const select2Options = [
        { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
        { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
        { value: 'purple', label: 'Purple', color: '#5243AA' },
        { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
        { value: 'orange', label: 'Orange', color: '#FF8B00' },
        { value: 'yellow', label: 'Yellow', color: '#FFC400' },
        { value: 'green', label: 'Green', color: '#36B37E' },
        { value: 'forest', label: 'Forest', color: '#00875A' },
        { value: 'slate', label: 'Slate', color: '#253858' },
        { value: 'silver', label: 'Silver', color: '#666666' },
      ];

      return(
      <>
      <ModalHeader className="flex flex-col gap-1">
        <h1>Add New</h1>
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
             type="email" 
             name="email" 
             label="Email" 
             placeholder="Enter your email"
             value={formData.email} 
             onChange={handleChange}
             />
            <Input 
            type="text" 
            name="role" 
            label="Role"
             value={formData.role} 
             onChange={handleChange}
             />


           <DatePicker label="Birth Date" className="max-w-[284px]" style={{ width: '100%' }}/>

         
          <CurrencyInput
            name="input-name"
            type="text"
            placeholder="Currency Input"
            className="w-full font-normal bg-transparent !outline-none placeholder:text-foreground-500 focus-visible:outline-none data-[has-start-content=true]:ps-1.5 data-[has-end-content=true]:pe-1.5 text-small group-data-[has-value=true]:text-default-foreground"
            style={{border:"1px solid #f5f5f5",padding:"10px",borderRadius:"10px",background:"#f5f5f5"}}
            decimalsLimit={2}
            onValueChange={(value, name, values) => console.log(value, name, values)}
          />

        <Select2
            className="w-full font-normal bg-transparent !outline-none placeholder:text-foreground-500 focus-visible:outline-none data-[has-start-content=true]:ps-1.5 data-[has-end-content=true]:pe-1.5 text-small group-data-[has-value=true]:text-default-foreground"
            isClearable={true}
            isSearchable={true}
            placeholder="Select Item"
            name="color"
            options={select2Options}
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
      );
    }
  }
  
  const { isOpen, onOpen, onClose } = useDisclosure();  
  const handleOpen = () => {
    onOpen();
  }
  //end for modal



  return (
    <>
      <ModalComponent 
        isOpen={isOpen} 
        onClose={onClose}
        CustomModalContent={customModal.content}
      />
      
      <TableComponent  
        columns={columns} 
        statusOptions={statusOptions} 
        users={users}  
        onAddNew={handleOpen}
        onEditNew={handleOpen}
      />
    </>
  )
}

export default table
