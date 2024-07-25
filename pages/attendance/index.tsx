import AttendancePageComponent from "@/components/PageComponent/AttendancePageComponent";
import DefaultLayout from "@/layouts/default";
import { Scanner } from "@yudiel/react-qr-scanner";
import { useRouter } from "next/router";
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";

{/* <Scanner onScan={(result) => console.log(result)} /> */}
const moduleName = "Attendance";

const capitalizeFirstLetter = (string:any) => {
    if (!string) return string;
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

export default function() {
  const router = useRouter();
  const {id,title} = router.query;
  const _ACTIVITY_ID = id;

  const _API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/staff/attendance`;
  const _PAGE_NAME = `${moduleName} ${title ? capitalizeFirstLetter(title) : ''}`;
  const _FORM_FIELDS = {
    user_id: '',
  };
  const _SEARCH_TERM_URL = {
    user_url: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/staff/user/search`,
    activity_url: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/staff/activity/search/${id}`
  };


  
  return (
    <DefaultLayout>
        <Breadcrumbs>
        <BreadcrumbItem>Activities</BreadcrumbItem>
        <BreadcrumbItem>Attendance</BreadcrumbItem>
        </Breadcrumbs>
        <AttendancePageComponent _API_URL={_API_URL}  _PAGE_NAME={_PAGE_NAME} _FORM_FIELDS={_FORM_FIELDS} _SEARCH_TERM_URL={_SEARCH_TERM_URL} _ACTIVITY_ID={_ACTIVITY_ID}/>
    </DefaultLayout>
);
}
