import DefaultLayout from "@/layouts/default";
import { Scanner } from "@yudiel/react-qr-scanner";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSession } from 'next-auth/react';
import DashBoardTableComponent from "@/components/TableComponent/DashBoardTableComponent";
import Swal from 'sweetalert2'
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";


type Attendance = {
    id: string;
    name: string;
    created_at: string;
  };

export default function() {
    const router = useRouter();
    const { id } = router.query;
    const _ACTIVITY_ID = id;

    const { data: session, status } = useSession();
    const token = session?.user?.token;
    const [attendance, setAttendance] = useState<Attendance[]>([]);
 
    const fetchData = async () => {
        try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/staff/attendance/activity/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        
        const resultData = res.data;
        const {data} = resultData;
        const arr: Attendance[] = data.map((item: any) => ({
            id: item.id.toString(), // ensure id is a string
            name: item.name,
            created_at: item.created_at,
          }));
        setAttendance(arr);
        } catch (error) {
        console.error('Error fetching data:', error);
        }
    };

    const  handleModalSave = async (result:any) =>{
        const qrValue = result[0].rawValue;
        
        const newData = {
            user_id: qrValue,
            activity_id: _ACTIVITY_ID
        }
        try {
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/staff/attendance`, newData, {
                headers: { Authorization: `Bearer ${token}` },
            });

            Swal.fire({
                title: "Scan Successful!",
                text: "User Added",
                icon: "success",
                // toast: true,
                timer: 2000,
                showConfirmButton: false
              });

            fetchData();
        } catch (error) {
            Swal.fire({
                title: "Cannot Detect QR!",
                text: "There seems to be a problem.",
                icon: "warning",
                // toast: true,
                timer: 2000,
                showConfirmButton: false
              });
        }
      }

    useEffect(() => {
      if (token) {
        fetchData();
      }
    }, [token]);

    const columns = [
        { name: "NAME", uid: "name", sortable: true },
        { name: "TIME", uid: "created_at", sortable: true },
      ];

  
  return (
    <DefaultLayout>
         <Breadcrumbs>
        <BreadcrumbItem>Activities</BreadcrumbItem>
        <BreadcrumbItem>Attendance</BreadcrumbItem>
        <BreadcrumbItem>QR Scanning</BreadcrumbItem>
        </Breadcrumbs>
        <div className="grid grid-cols-3 gap-5">
         
            <div className="col-span-2">
                <DashBoardTableComponent
                    title="activity"
                    tableDatas={attendance}
                    columns={columns}
                    topContent="Attendance"
                />
            </div>
            <div className="col-span-1">
                <div className="max-h-full">
                <h1>Attendance QR Scanner</h1>
                <Scanner onScan={(result) => handleModalSave(result)} allowMultiple={true} scanDelay={1000}/>
                </div>
            </div>
        </div>
    </DefaultLayout>
);
}
