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
import { useEffect, useState } from "react";
import { CircleAnimatedIcon } from "@/components/animatedIcons";
import DashBoardTableComponent from "@/components/TableComponent/DashBoardTableComponent";
import { useSession,signOut } from 'next-auth/react';
import axios from "axios";


export default function IndexPage() {
  const { data: session, status } = useSession();
  const token = session?.user?.token;

  const [summaryData, setSummaryData] = useState([]);
  const [corderData, setCornerData] = useState([]);


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

  // ========================

  const summaryPoints = {
      columns: [
        { name: "RANK", uid: "id", sortable: true },
        { name: "NAME", uid: "name"},
        { name: "STATED MEETING", uid: "stated_meeting_points"},
        { name: "SPECIAL MEETING", uid: "special_meeting_points"},
        { name: "INSTALLATION", uid: "installation_points"},
        { name: "FLAG TRIBUTE", uid: "flag_tribute"},
        { name: "TOTAL POINTS", uid: "total_points"},
      ],
      data(token:any){
        const fetchData = async () => {
          try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/staff/overall-summary/points`, {
              headers: { 
                  Authorization: `Bearer ${token}` 
              }
            });
            
            var resultData = res.data;
            const {data} = resultData;
            setSummaryData(data);
            
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
      
        useEffect(() => {
          if (token) {
            fetchData();
          }
        }, [token]);
      }
  }


  const worshipperCorner = {
      columns: [
        // { name: "FILE NAME", uid: "name", sortable: true },
        // { name: "DESCRIPTION", uid: "description", sortable: true },
        { name: "NAME", uid: "name", sortable: true },
        { name: "FILE", uid: "path", sortable: true },
      ],
      data(token:any){
        const fetchData = async () => {
            try {
              const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/staff/directory`, {
                headers: { 
                    Authorization: `Bearer ${token}` 
                }
              });
              
              var resultData = res.data;
              const {data} = resultData;
              setCornerData(data);
              
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
        
          useEffect(() => {
            if (token) {
              fetchData();
            }
          }, [token]);
      }
  }


  summaryPoints.data(token);
  worshipperCorner.data(token);

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
                tableDatas={summaryData}
                columns={summaryPoints.columns}
                topContent="Summary"
            />
      </div>

      <div className="col-span-1">
            <DashBoardTableComponent
                title="activity"
                tableDatas={corderData}
                columns={worshipperCorner.columns}
                topContent="Worshipper's Corner"
            />
      </div>

    </div>

  
    </DefaultLayout>
  );
}
