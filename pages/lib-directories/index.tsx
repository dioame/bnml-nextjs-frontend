import PageComponent from "@/components/PageComponent/PageComponent";

const moduleName = "Directory";

export default function() {
  const _API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/staff/lib_${moduleName.toLowerCase()}`;
  const _PAGE_NAME = `${moduleName} Libraries`;
  const _FORM_FIELDS = {
    name: '',
    description: '',
  };

  return (
    <PageComponent _API_URL={_API_URL}  _PAGE_NAME={_PAGE_NAME} _FORM_FIELDS={_FORM_FIELDS}/>
  );
}
