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
import { useRouter } from 'next/router';
import statedMeeting from "./stated-meeting";


export default function IndexPage() {
  const { data: session, status } = useSession();
  const token = session?.user?.token;

  const [summaryData, setSummaryData] = useState([]);
  const [statedData, setStatedData] = useState([]);
  const [specialData, setSpecialData] = useState([]);
  const [corderData, setCornerData] = useState([]);
  const [installationData, setInstallationData] = useState([]);
  const [flagTributeData, setFlagTributeData] = useState([]);
  const [events, setEvent] = useState([]);
  const router = useRouter();


  const calendarEvents = {
    addEvent(){
      router.push('/events');
    },
    renderEventContent(eventInfo:any){
      return (
        <>
          <b>{eventInfo.timeText}</b>
          <i>{eventInfo.event.title}</i>
        </>
      )
    },
    data(token:any){
      const fetchData = async () => {
        try {
          const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/staff/activities`, {
            headers: { 
                Authorization: `Bearer ${token}` 
            }
          });
          var resultData = res.data;
          const {data} = resultData;
          // console.log(data);
          const activities = [];
          for(var i in data){
            activities.push({
                  id : data[i].id,
                  title: data[i].name,
                  start: data[i].start_date_raw,
                  end: data[i].end_date_raw,
                  editable: true,
                  backgroundColor: (data[i].lib_activity_id === 1) ? '#f0b173' :  (data[i].lib_activity_id == 2) ? '#4ce64c' : '#638bd4'
              });
          }
          setEvent(activities);
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
  };

  const summaryPoints = {
      columns: [
        { name: "RANK", uid: "id", sortable: true },
        { name: "NAME", uid: "name"},
        { name: "STATED MEETING", uid: "stated_meeting_points"},
        { name: "SPECIAL MEETING", uid: "special_meeting_points"},
        { name: "INSTALLATION", uid: "installation_points"},
        { name: "FLAG TRIBUTE", uid: "flag_tribute_points"},
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


  const statedPoints = {
    columns: [
      { name: "RANK", uid: "user_id", sortable: true },
      { name: "NAME", uid: "name"},
      { name: "JAN", uid: "jan"},
      { name: "FEB", uid: "feb"},
      { name: "MAR", uid: "mar"},
      { name: "APR", uid: "apr"},
      { name: "MAY", uid: "may"},
      { name: "JUN", uid: "jun"},
      { name: "JUL", uid: "jul"},
      { name: "AUG", uid: "aug"},
      { name: "SEP", uid: "sep"},
      { name: "OCT", uid: "oct"},
      { name: "NOV", uid: "nov"},
      { name: "DEC", uid: "dec"},
      { name: "POINTS", uid: "points"},
    ],
    data(token:any){
      const fetchData = async () => {
        try {
          const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/staff/meeting/stated-meeting/points`, {
            headers: { 
                Authorization: `Bearer ${token}` 
            }
          });
          
          var resultData = res.data;
          const {data} = resultData;
          // console.log(data);
          const newData = [];
          for(var i in data){
              newData.push({
                 id: data[i].id,
                 user_id: data[i].user_id,
                 name: data[i].name,
                 jan: data[i].activities.jan ? true : null,
                 feb: data[i].activities.feb ? true : null,
                 mar: data[i].activities.mar ? true : null,
                 apr: data[i].activities.apr ? true : null,
                 may: data[i].activities.may ? true : null,
                 jun: data[i].activities.jun ? true : null,
                 jul: data[i].activities.jul ? true : null,
                 aug: data[i].activities.aug ? true : null,
                 sep: data[i].activities.sep ? true : null,
                 oct: data[i].activities.oct ? true : null,
                 nov: data[i].activities.nov ? true : null,
                 dec: data[i].activities.dec ? true : null,
                 points: data[i].points
              });
          }
          // console.log(newData);
          setStatedData(newData);
          
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


const specialPoints = {
  columns: [
    { name: "RANK", uid: "user_id", sortable: true },
    { name: "NAME", uid: "name"},
    { name: "JAN", uid: "jan"},
    { name: "FEB", uid: "feb"},
    { name: "MAR", uid: "mar"},
    { name: "APR", uid: "apr"},
    { name: "MAY", uid: "may"},
    { name: "JUN", uid: "jun"},
    { name: "JUL", uid: "jul"},
    { name: "AUG", uid: "aug"},
    { name: "SEP", uid: "sep"},
    { name: "OCT", uid: "oct"},
    { name: "NOV", uid: "nov"},
    { name: "DEC", uid: "dec"},
    { name: "POINTS", uid: "points"},
  ],
  data(token:any){
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/staff/meeting/special-meeting/points`, {
          headers: { 
              Authorization: `Bearer ${token}` 
          }
        });
        
        var resultData = res.data;
        const {data} = resultData;
        // console.log(data);
        const newData = [];
        for(var i in data){
            newData.push({
               id: data[i].id,
               user_id: data[i].user_id,
               name: data[i].name,
               jan: data[i].activities.jan ? true : null,
               feb: data[i].activities.feb ? true : null,
               mar: data[i].activities.mar ? true : null,
               apr: data[i].activities.apr ? true : null,
               may: data[i].activities.may ? true : null,
               jun: data[i].activities.jun ? true : null,
               jul: data[i].activities.jul ? true : null,
               aug: data[i].activities.aug ? true : null,
               sep: data[i].activities.sep ? true : null,
               oct: data[i].activities.oct ? true : null,
               nov: data[i].activities.nov ? true : null,
               dec: data[i].activities.dec ? true : null,
               points: data[i].points
            });
        }
        // console.log(newData);
        setSpecialData(newData);
        
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
        { name: "id", uid: "id", sortable: true },
        { name: "NAME", uid: "fname", sortable: true },
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
              data.map((item:any)=>{
                item.fname = item.name
              });
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

  const installationPoints = {
      columns: [
        { name: "RANK", uid: "user_id", sortable: true },
        { name: "NAME", uid: "name", sortable: true },
        { name: "INSTALLATION", uid: "installation"},
        { name: "POINTS", uid: "points"},
      ],
      data(token:any){
        const fetchData = async () => {
            try {
              const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/staff/installation/points`, {
                headers: { 
                    Authorization: `Bearer ${token}` 
                }
              });
              
              var resultData = res.data;
              const {data} = resultData;

              console.log(data);
              setInstallationData(data);
              
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

  const flagTribute = {
      columns: [
        { name: "RANK", uid: "rank", sortable: true },
        { name: "NAME", uid: "name", sortable: true },
        { name: "POINTS", uid: "points"},
      ],
      data(token:any){
        const fetchData = async () => {
          try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/staff/flag-tribute/points`, {
              headers: { 
                  Authorization: `Bearer ${token}` 
              }
            });
            
            var resultData = res.data;
            const {data} = resultData;

            setFlagTributeData(data);
            
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
  };


  specialPoints.data(token);
  statedPoints.data(token);
  summaryPoints.data(token);
  worshipperCorner.data(token);
  calendarEvents.data(token);
  installationPoints.data(token);
  flagTribute.data(token);

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
                paginationNumber={10}
            />
      </div>

      <div className="col-span-1">
            <DashBoardTableComponent
                title="activity"
                tableDatas={corderData}
                columns={worshipperCorner.columns}
                topContent="Worshipper's Corner"
            />

            <DashBoardTableComponent
                title="activity"
                tableDatas={flagTributeData}
                columns={flagTribute.columns}
                topContent="Flag Tribute"
            />
      </div>

     

      <div className="col-span-3">
          <DashBoardTableComponent
                title="activity"
                tableDatas={statedData}
                columns={statedPoints.columns}
                topContent="Stated Meeting"
          />
      </div>

      <div className="col-span-3">
          <DashBoardTableComponent
                title="activity"
                tableDatas={specialData}
                columns={specialPoints.columns}
                topContent="Special Meeting"
          />
      </div>

      <div className="col-span-3">
          <DashBoardTableComponent
                title="activity"
                tableDatas={installationData}
                columns={installationPoints.columns}
                topContent="Installations"
          />
      </div>



      <div className="col-span-3">
      <Card>
          <CardHeader>
            Calendar of Activities
          </CardHeader>
          <CardBody>

      <FullCalendar 
        plugins={[dayGridPlugin,timeGridPlugin,listPlugin]}
        initialView='dayGridMonth'
        events={events}
        eventContent={calendarEvents.renderEventContent}
        height={500}
        eventClick={(e)=>{
          console.log(e.event.id);
        }}
        customButtons={{
          myCustomButton: {
            text: 'Add Event',
            click: calendarEvents.addEvent
          }
        }}
        headerToolbar={{
          left: 'prev,next myCustomButton',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek' 
        }}
      />
          </CardBody>
        </Card>

      </div>

    </div>

  
    </DefaultLayout>
  );
}
