import DefaultLayout from "@/layouts/default";
import { useRouter } from 'next/router'

const moduleName = "form";
export default function() {
  const id = useRouter().query.id;
  const title = id ? `Update Form : ${id}` : `Create Form`;

  console.log(useRouter().query);

  return (
    <DefaultLayout>
      <h1>{title}</h1>
    </DefaultLayout>
  );
}
