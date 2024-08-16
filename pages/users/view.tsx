import DefaultLayout from "@/layouts/default";
import { useRouter } from 'next/router'
import { API_URL } from "./config/config";

export default function() {
  const id = useRouter().query.id;

  return (
    <DefaultLayout>
      <h1>View</h1>
    </DefaultLayout>
  );
}
