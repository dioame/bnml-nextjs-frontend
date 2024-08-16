import DefaultLayout from "@/layouts/default";
import TableComponent from "./components/TableComponent";
import { useEffect, useMemo, useState } from "react";
import { fetchApi } from "./axios/fetchApi";
import { deleteApi } from "./axios/deleteApi";
import { useConnectionToken } from "@/config/connection";

export default function(){
  const session_token = useConnectionToken();
  const [data,setData] = useState([]);
  const tableColumns = useMemo(() => [
    { name: "ID", uid: "id", sortable: true },
    { name: "Profile", uid: "avatar", sortable: true },
    { name: "FIRST NAME", uid: "firstname", sortable: true },
    { name: "MIDDLE NAME", uid: "middlename", sortable: true },
    { name: "LAST NAME", uid: "lastname", sortable: true },
    { name: "EMAIL", uid: "email" },
    { name: "ACTIONS", uid: "actions" },
  ], []);
  const displayColumns = useMemo(() => ["avatar", "firstname", "lastname", "email", "actions"], []);

  const fetchData = (token:any) => {
    fetchApi(token)
    .then(data => { setData(data.data); })
    .catch(error => { console.error('API fetch failed:', error); });
  }

  const onDeleteItem = (id:any,token:any) => {
    deleteApi(id,token)
    .then(() => {  fetchData(token); })
    .catch(error => { console.error('API delete failed:', error); });
  };

  useEffect(()=>{
    if (session_token) {
      fetchData(session_token);
    }
  },[session_token])

  return (
    <DefaultLayout>
      <TableComponent
        tableColumns={tableColumns}
        tableData={data}
        displayColumns={displayColumns}
        onDeleteItem={onDeleteItem}
      />
    </DefaultLayout>
  );
}
