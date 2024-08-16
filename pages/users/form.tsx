import DefaultLayout from "@/layouts/default";
import FormComponent from "./components/FormComponent";
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react';
import { useEffect, useState, useMemo } from "react";
import { API_URL } from "./config/config";
import axios from 'axios';


export default function() {
  const id = useRouter().query.id;
  const title = id ? `Update Form : ${id}` : `Create Form`;

  const { data: session } = useSession();
  const token = session?.user?.token;
  const [data, setData] = useState([]);

  useEffect(() => {

    if (!id || !token) return;

    const fetchData = async () => {
      if (!token) return;

      try {
        const res = await axios.get(`${API_URL.main}/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const resultData = res.data;
        setData(resultData.data || []);
      } catch (error:any) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, [id,token]);

  return (
    <DefaultLayout>
      <FormComponent 
        type={id ? "update" : "create"}
        title={title}
        currentData={data}
      />
    </DefaultLayout>
  );
}
