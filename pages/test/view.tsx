import DefaultLayout from "@/layouts/default";
import { useRouter } from 'next/router'

const moduleName = "view";
export default function() {
  const id = useRouter().query.id;
  const title = id ? `Update Form : ${id}` : `Create Form`;

  return (
    <DefaultLayout>
      <h1>{moduleName}</h1>
    </DefaultLayout>
  );
}
