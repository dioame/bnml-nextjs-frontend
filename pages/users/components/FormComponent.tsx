import { Input, Card, CardBody, CardHeader, Select, SelectItem, Divider, Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { API_URL } from "../config/config";
import axios from "axios";

function capitalizeFirstLetter(string:any) {
    if (string.length === 0) return string; // Handle empty string
    return string.charAt(0).toUpperCase() + string.slice(1);
}

interface FormDataType {
    firstname: string;
    middlename: string;
    lastname: string;
    extensionname: string;
    email: string;
    address: string;
    mobile: string;
    gender: string;
    birth_date: string;
    avatar: File | null;
}


export default function({ type, title, currentData }: any) {

    const createInitialFormData = (data: any) => ({
        firstname: data?.firstname || '',
        middlename: data?.middlename || '',
        lastname: data?.lastname || '',
        extensionname: data?.extensionname || '',
        email: data?.email || '',
        address: data?.address || '',
        mobile: data?.mobile || '',
        gender: data?.gender || 'others',
        birth_date: data?.birth_date || '',
        avatar: data?.avatar || null,
    });

    const [formData, setFormData] = useState<FormDataType>(createInitialFormData(currentData));

    useEffect(() => {
        setFormData(createInitialFormData(currentData));
    }, [currentData]);

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        console.log(formData);
        setIsSubmitted(true);

        const data = new FormData();
        
        // Append form data to FormData object
        for (const key in formData) {
            const value = formData[key as keyof FormDataType];
            // Check if the value is not null before appending
            if (value !== null) {
                data.append(key as keyof FormDataType, value);
            }
        }


        //post endpoint for creation
        // try {
        //     const response = await axios.post(API_URL.main, data, {
        //         headers: {
        //             'Content-Type': 'multipart/form-data',
        //             'Authorization': `Bearer ${token}`
        //         },
        //     });
        //     console.log('Response:', response.data);
        //     setIsSubmitted(true);
        // } catch (error) {
        //     console.error('Error submitting form:', error);
        // }

    };


    const handleFileChange = (e:any) => {
        let file = null;
        if (e.target.files && e.target.files.length > 0) {
            file = e.target.files[0]; // Access the first file
        }
        setFormData(prevData => ({
            ...prevData,
            avatar: file,
        }));
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Card style={{ padding: '20px', width: '100%' }}>
                <CardHeader>
                    <h1>{title}</h1>
                </CardHeader>
                <CardBody className="flex items-left">
                    <div className="grid grid-cols-4 gap-5">
                        <div className="col-span-1">
                            <Input
                                type="text"
                                label="First Name"
                                name="firstname"
                                value={formData.firstname}
                                onChange={handleChange}
                                className="max-w-xs"
                            />
                        </div>
                        <div className="col-span-1">
                            <Input
                                type="text"
                                label="Middle Name"
                                name="middlename"
                                value={formData.middlename}
                                onChange={handleChange}
                                className="max-w-xs"
                            />
                        </div>
                        <div className="col-span-1">
                            <Input
                                type="text"
                                label="Last Name"
                                name="lastname"
                                value={formData.lastname}
                                onChange={handleChange}
                                className="max-w-xs"
                            />
                        </div>
                        <div className="col-span-1">
                            <Input
                                type="text"
                                label="Extension Name"
                                name="extensionname"
                                placeholder="Jr./Sr."
                                value={formData.extensionname}
                                onChange={handleChange}
                                className="max-w-xs"
                            />
                        </div>
                        <div className="col-span-1">
                            <Input
                                type="email"
                                label="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="max-w-xs"
                            />
                        </div>
                        <div className="col-span-3">
                            <Input
                                type="text"
                                label="Address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="max-w"
                            />
                        </div>
                        <div className="col-span-1">
                            <Input
                                type="text"
                                label="Mobile"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                className="max-w-xs"
                            />
                        </div>
                        <div className="col-span-1">
                            <Select
                                label="Gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                className="max-w-xs"
                            >
                                <SelectItem key="male">Male</SelectItem>
                                <SelectItem key="female">Female</SelectItem>
                                <SelectItem key="others">Prefer not to say</SelectItem>
                            </Select>
                        </div>
                        <div className="col-span-1">
                            <Input
                                type="date"
                                label="Date of Birth"
                                name="birth_date"
                                value={formData.birth_date}
                                onChange={handleChange}
                                className="max-w-xs"
                            />
                        </div>
                        <div className="col-span-4">
                            <Divider className="my-4" />
                        </div>

                        <div className="col-span-1">
                            <Input
                                type="file"
                                label="Avatar"
                                name="avatar"
                                onChange={handleFileChange}
                                className="max-w-xs"
                            />
                        </div>

                        <div className="col-span-4">
                            <Divider className="my-4" />
                        </div>

                        <div className="col-span-4">
                            <Button color="primary" onClick={handleSubmit} isDisabled={isSubmitted}>
                                {capitalizeFirstLetter(type)}
                            </Button>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}
