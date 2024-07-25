import PageComponent from "@/components/PageComponent/PageComponent";

const moduleName = "Flag Tribute";

export default function() {
  const _API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/staff/flag-tribute`;
  const _PAGE_NAME = `${moduleName}`;
  const _FORM_FIELDS = {
    user_id: '',
    points: '',
  };
  const _SEARCH_TERM_URL = {
    user_url: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/staff/user/search`,
  };


  return (
    <PageComponent _API_URL={_API_URL}  _PAGE_NAME={_PAGE_NAME} _FORM_FIELDS={_FORM_FIELDS} _SEARCH_TERM_URL={_SEARCH_TERM_URL}/>
  );
}
