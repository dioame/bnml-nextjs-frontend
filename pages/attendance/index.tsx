import PageComponent from "@/components/PageComponent/PageComponent";
import { useRouter } from "next/router";

const moduleName = "Attendance";

const capitalizeFirstLetter = (string:any) => {
    if (!string) return string;
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

export default function() {
  const router = useRouter();
  const {title} = router.query;

  const _API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/staff/attendance`;
  const _PAGE_NAME = `${moduleName} ${title ? capitalizeFirstLetter(title) : ''}`;
  const _FORM_FIELDS = {
    user_id: '',
    lib_installation_id: '',
  };
  const _SEARCH_TERM_URL = {
    // user_url: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/staff/user/search`,
    // installation_url: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/staff/lib_installation/search`
  };


  return (
    <PageComponent _API_URL={_API_URL}  _PAGE_NAME={_PAGE_NAME} _FORM_FIELDS={_FORM_FIELDS} _SEARCH_TERM_URL={_SEARCH_TERM_URL}/>
  );
}
