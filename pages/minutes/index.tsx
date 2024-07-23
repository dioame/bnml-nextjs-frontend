import DirectoryPageComponent from "../../components/PageComponent/DirectoryPageComponent";
        
const moduleName = "Minutes/Proceedings";

export default function() {
  const _API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/staff/directory`;
  const _PAGE_NAME = `${moduleName}`;
  const _FORM_FIELDS = {
    name: '',
    description: '',
    file: null
  };
  const _SEARCH_TERM_URL = {
    directory_url: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/staff/lib_directory/search`,
  };

  const _DIRECTORY_ID = 2; //based on table lib_directory


  return (
    <DirectoryPageComponent _API_URL={_API_URL}  _PAGE_NAME={_PAGE_NAME} _FORM_FIELDS={_FORM_FIELDS} _SEARCH_TERM_URL={_SEARCH_TERM_URL} _DIRECTORY_ID={_DIRECTORY_ID}/>
  );
}
