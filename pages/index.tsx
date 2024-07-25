import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { CheckIcon, FileOpenIcon, GithubIcon, Home, XmarkIcon,SparklesIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import {  Button, Card, CardBody, CardFooter, CardHeader, Chip, Image, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, User } from "@nextui-org/react";

// CALENDAR
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import { useState } from "react";
import { CircleAnimatedIcon } from "@/components/animatedIcons";
import DashBoardTableComponent from "@/components/TableComponent/DashBoardTableComponent";



export default function IndexPage() {


  const [events, setEvent] = useState([
    { id:1, 
      title: 'Meeting', 
      start: '2024-07-10', 
      end: '2024-07-11', 
      // interactive:true, 
      editable:true,
      // url:"https://fullcalendar.io/docs/event-parsing" 
    },
    { id:2, 
      title: 'Meetingx', 
      start: '2024-07-10', 
      end: '2024-07-16', 
      editable:true ,
      backgroundColor: 'red',
    },

  ]);

  function addEvent(){
    setEvent([
      ...events,
      {
        id: 3,
        title: 'Meeting123',
        start: '2024-07-10',
        end: '2024-07-16',
        editable: true,
        backgroundColor: 'red',
      }
    ]);
  }

  // a custom render function
  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }

  //========================

  const columTable = [
    { name: "RANK", uid: "id", sortable: true },
    { name: "NAME", uid: "name"},
    { name: "STATED MEETING", uid: "stated_meeting"},
    { name: "SPECIAL MEETING", uid: "special_meeting"},
    { name: "INSTALLATION", uid: "installation"},
    { name: "FLAG TRIBUTE", uid: "flag_tribute"},
    { name: "TOTAL POINTS", uid: "total_points"},
  ];

  const activityData = [
    {id: 1, name: "Hello",}
  ];



  // ========================


  const cornerColumn = [
    { name: "FILE NAME", uid: "file_name", sortable: true },
    { name: "FILE", uid: "file", sortable: true },
  ];

  const cornerData = [
    {id: 1, file_name: "Hello", file: 'C://'}
  ];


  return (
    <DefaultLayout>
     
    <div className="grid grid-cols-3 gap-5">
      <div className="col-span-3">
        <Card>
          <CardBody className="flex inline-block">
          <CircleAnimatedIcon className="inline-block mr-2" />
          <span>Welcome to Balanghay Nine Masonic Lodge 493 Information System.</span>
          </CardBody>
        </Card>
      </div>

      <div className="col-span-2">
            <DashBoardTableComponent
                title="activity"
                tableDatas={activityData}
                columns={columTable}
                topContent="Summary"
            />
      </div>

      <div className="col-span-1">
            <DashBoardTableComponent
                title="activity"
                tableDatas={cornerData}
                columns={cornerColumn}
                topContent="Worshipper's Corner"
            />
      </div>

    </div>

  
    </DefaultLayout>
  );
}
