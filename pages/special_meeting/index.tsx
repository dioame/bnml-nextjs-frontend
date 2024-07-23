import ActivitiesPageComponent from "@/components/PageComponent/ActivitiesPageComponent";
import {now, getLocalTimeZone} from "@internationalized/date";

const moduleName = "Special Meeting"

export default function() {
  const _API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/staff/activities`;
  const _PAGE_NAME = `${moduleName}`;
  const _FORM_FIELDS = {
    name: '',
    description: '',
    area: '',
    start_date: now(getLocalTimeZone()),
    end_date: now(getLocalTimeZone()),
  };

  
  const _ACTIVITY_ID = 2; //based on table lib_directory

  return (
    <ActivitiesPageComponent _API_URL={_API_URL}  _PAGE_NAME={_PAGE_NAME} _FORM_FIELDS={_FORM_FIELDS} _ACTIVITY_ID={_ACTIVITY_ID}/>
  );
}
