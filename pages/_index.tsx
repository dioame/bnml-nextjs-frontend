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



export default function IndexPage() {

  const [events, setEvent] = useState([
    { id:'1', 
      title: 'Meeting', 
      start: '2024-07-10', 
      end: '2024-07-11', 
      // interactive:true, 
      editable:true,
      // url:"https://fullcalendar.io/docs/event-parsing" 
    },
    { id:'2', 
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
        id: '3',
        title: 'Meeting123',
        start: '2024-07-10',
        end: '2024-07-16',
        editable: true,
        backgroundColor: 'red',
      }
    ]);
  }

  // a custom render function
  function renderEventContent(eventInfo:any) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }

  return (
    <DefaultLayout>
     
    <div className="grid grid-cols-3 gap-5">
      <div className="col-span-3">
        <Card>
          <CardBody className="flex items-center">
     
          <CircleAnimatedIcon className="inline-block mr-2" />
          <span>Welcome to Balanghay Nine Masonic Lodge 493 Information System.</span>
          </CardBody>
        </Card>
      </div>

      <div className="col-span-2">
      <Table aria-label="Example static collection table"
            topContent="Overall Summary"
          >
             <TableHeader>
             <TableColumn>RANK</TableColumn>
                <TableColumn>Name</TableColumn>
                <TableColumn>Stated Meeting</TableColumn>
                <TableColumn>Stated Meeting</TableColumn>
                <TableColumn>Installation</TableColumn>
                <TableColumn>Flag Tribute</TableColumn>
                <TableColumn>Total Points</TableColumn>
             </TableHeader>
             <TableBody>

              <TableRow key="3">
              <TableCell>
              <h3 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0 text-center">
                1
              </h3>
              </TableCell>
                <TableCell><User   
                      name="Jane Doe"
                      description="Product Designer"
                      avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                      }}
                    /></TableCell>
                <TableCell> 98
                </TableCell>
                <TableCell>54</TableCell>
                <TableCell>3</TableCell>
                <TableCell>33</TableCell>
                <TableCell>100</TableCell>
              </TableRow>

              <TableRow key="4">
              <TableCell>
              <h3 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0 text-center">
                2
              </h3>
              </TableCell>
                 <TableCell><User   
                      name="Jane Doe"
                      description="Product Designer"
                      avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                      }}
                    /></TableCell>
                <TableCell>12</TableCell>
                <TableCell>54</TableCell>
                <TableCell>3</TableCell>
                <TableCell>23</TableCell>
                <TableCell>90</TableCell>
              </TableRow>

              <TableRow key="4">
              <TableCell>
              <h3 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0 text-center">
                3
              </h3>
              </TableCell>
                 <TableCell><User   
                      name="Jane Doe"
                      description="Product Designer"
                      avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                      }}
                    /></TableCell>
                <TableCell>12</TableCell>
                <TableCell>54</TableCell>
                <TableCell>3</TableCell>
                <TableCell>23</TableCell>
                <TableCell>90</TableCell>
              </TableRow>

              <TableRow key="4">
                <TableCell>4</TableCell>
                 <TableCell><User   
                      name="Jane Doe"
                      description="Product Designer"
                      avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                      }}
                    /></TableCell>
                <TableCell>12</TableCell>
                <TableCell>54</TableCell>
                <TableCell>3</TableCell>
                <TableCell>23</TableCell>
                <TableCell>90</TableCell>
              </TableRow>

              <TableRow key="4">
                <TableCell>4</TableCell>
                 <TableCell><User   
                      name="Jane Doe"
                      description="Product Designer"
                      avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                      }}
                    /></TableCell>
                <TableCell>12</TableCell>
                <TableCell>54</TableCell>
                <TableCell>3</TableCell>
                <TableCell>23</TableCell>
                <TableCell>90</TableCell>
              </TableRow>

              <TableRow key="4">
                <TableCell>4</TableCell>
                 <TableCell><User   
                      name="Jane Doe"
                      description="Product Designer"
                      avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                      }}
                    /></TableCell>
                <TableCell>12</TableCell>
                <TableCell>54</TableCell>
                <TableCell>3</TableCell>
                <TableCell>23</TableCell>
                <TableCell>90</TableCell>
              </TableRow>

              <TableRow key="4">
                <TableCell>4</TableCell>
                 <TableCell><User   
                      name="Jane Doe"
                      description="Product Designer"
                      avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                      }}
                    /></TableCell>
                <TableCell>12</TableCell>
                <TableCell>54</TableCell>
                <TableCell>3</TableCell>
                <TableCell>23</TableCell>
                <TableCell>90</TableCell>
              </TableRow>

              <TableRow key="4">
              <TableCell>54</TableCell>
                 <TableCell><User   
                      name="Jane Doe"
                      description="Product Designer"
                      avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                      }}
                    /></TableCell>
                <TableCell>12</TableCell>
                <TableCell>54</TableCell>
                <TableCell>3</TableCell>
                <TableCell>23</TableCell>
                <TableCell>90</TableCell>
              </TableRow>

              <TableRow key="4">
              <TableCell>54</TableCell>
                 <TableCell><User   
                      name="Jane Doe"
                      description="Product Designer"
                      avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                      }}
                    /></TableCell>
                <TableCell>12</TableCell>
                <TableCell>54</TableCell>
                <TableCell>3</TableCell>
                <TableCell>23</TableCell>
                <TableCell>90</TableCell>
              </TableRow>

             </TableBody>

          </Table>
          
      </div>

      

      <div className="col-span-1">
          <Table isStriped aria-label="Example static collection table"
            topContent="Worshipper Master's Corner"
          >
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>PATH</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>Downloadable Forms</TableCell>
              <TableCell>
              <Chip
                variant="shadow"
                classNames={{
                  base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
                  content: "drop-shadow shadow-black text-white",
                }}
              >
                <FileOpenIcon/>
              </Chip>
              </TableCell>
            </TableRow>
            <TableRow key="2">
            <TableCell>File 2</TableCell>
            <TableCell>
              <Chip
                variant="shadow"
                classNames={{
                  base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
                  content: "drop-shadow shadow-black text-white",
                }}
              >
                <FileOpenIcon/>
              </Chip>
              </TableCell>
            </TableRow>
            <TableRow key="3">
            <TableCell>File 3</TableCell>
              <TableCell>
              <Chip
                variant="shadow"
                classNames={{
                  base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
                  content: "drop-shadow shadow-black text-white",
                }}
              >
                <FileOpenIcon/>
              </Chip>
              </TableCell>
            </TableRow>
            <TableRow key="4">
            <TableCell>File 4</TableCell>
              <TableCell>
              <Chip
                variant="shadow"
                classNames={{
                  base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
                  content: "drop-shadow shadow-black text-white",
                }}
              >
                <FileOpenIcon/>
              </Chip>
              </TableCell>
            </TableRow>
            <TableRow key="4">
            <TableCell>File 4</TableCell>
              <TableCell>
              <Chip
                variant="shadow"
                classNames={{
                  base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
                  content: "drop-shadow shadow-black text-white",
                }}
              >
                <FileOpenIcon/>
              </Chip>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <br/>
          <Table aria-label="Example static collection table"
            topContent="Tribute to the Flag"
          >
             <TableHeader>
                <TableColumn>Name</TableColumn>
                <TableColumn>Points</TableColumn>
             </TableHeader>
             <TableBody>

              <TableRow key="3">
              <TableCell><User   
                      name="Jane Doe"
                      description="Product Designer"
                      avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                      }}
                    /></TableCell>
                <TableCell> 89 </TableCell>
              </TableRow>

              <TableRow key="4">
                 <TableCell><User   
                      name="Jane Doe"
                      description="Product Designer"
                      avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                      }}
                    /></TableCell>
                <TableCell>12</TableCell>
              </TableRow>

              <TableRow key="4">
                 <TableCell><User   
                      name="Jane Doe"
                      description="Product Designer"
                      avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                      }}
                    /></TableCell>
                <TableCell>12</TableCell>
              </TableRow>

              <TableRow key="4">
                 <TableCell><User   
                      name="Jane Doe"
                      description="Product Designer"
                      avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                      }}
                    /></TableCell>
                <TableCell>12</TableCell>
              </TableRow>

              <TableRow key="4">
                 <TableCell><User   
                      name="Jane Doe"
                      description="Product Designer"
                      avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                      }}
                    /></TableCell>
                <TableCell>12</TableCell>
              </TableRow>

             </TableBody>

          </Table>
      </div>

      <div className="col-span-3">
        
          <Table aria-label="Example static collection table"
            topContent="Stated Meeting Ranking"
          >
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>Jan</TableColumn>
            <TableColumn>Feb</TableColumn>
            <TableColumn>Mar</TableColumn>
            <TableColumn>Apr</TableColumn>
            <TableColumn>May</TableColumn>
            <TableColumn>Jun</TableColumn>
            <TableColumn>Jul</TableColumn>
            <TableColumn>Aug</TableColumn>
            <TableColumn>Sep</TableColumn>
            <TableColumn>Oct</TableColumn>
            <TableColumn>Nov</TableColumn>
            <TableColumn>Dec</TableColumn>
            <TableColumn>Points</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
            <TableCell><User   
                      name="Jane Doe"
                      description="Product Designer"
                      avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                      }}
                    /></TableCell>
              <TableCell><CheckIcon/></TableCell>
              <TableCell><CheckIcon/></TableCell>
              <TableCell><CheckIcon/></TableCell>
              <TableCell><CheckIcon/></TableCell>
              <TableCell><XmarkIcon/></TableCell>
              <TableCell><XmarkIcon/></TableCell>
              <TableCell><XmarkIcon/></TableCell>
              <TableCell><XmarkIcon/></TableCell>
              <TableCell><XmarkIcon/></TableCell>
              <TableCell><XmarkIcon/></TableCell>
              <TableCell><CheckIcon/></TableCell>
              <TableCell><CheckIcon/></TableCell>
              <TableCell>12</TableCell>
            </TableRow>
            <TableRow key="2">
            <TableCell><User   
                      name="Jane Doe"
                      description="Product Designer"
                      avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                      }}
                    /></TableCell>
              <TableCell><CheckIcon/></TableCell>
              <TableCell><XmarkIcon/></TableCell>
              <TableCell><XmarkIcon/></TableCell>
              <TableCell><XmarkIcon/></TableCell>
              <TableCell><XmarkIcon/></TableCell>
              <TableCell><CheckIcon/></TableCell>
              <TableCell><CheckIcon/></TableCell>
              <TableCell><CheckIcon/></TableCell>
              <TableCell><CheckIcon/></TableCell>
              <TableCell><CheckIcon/></TableCell>
              <TableCell><CheckIcon/></TableCell>
              <TableCell><CheckIcon/></TableCell>
              <TableCell>12</TableCell>
            </TableRow>
            <TableRow key="3">
            <TableCell><User   
                      name="Jane Doe"
                      description="Product Designer"
                      avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                      }}
                    /></TableCell>
              <TableCell><CheckIcon/></TableCell>
              <TableCell><CheckIcon/></TableCell>
              <TableCell><XmarkIcon/></TableCell>
              <TableCell><XmarkIcon/></TableCell>
              <TableCell><XmarkIcon/></TableCell>
              <TableCell><XmarkIcon/></TableCell>
              <TableCell><XmarkIcon/></TableCell>
              <TableCell><CheckIcon/></TableCell>
              <TableCell><CheckIcon/></TableCell>
              <TableCell><CheckIcon/></TableCell>
              <TableCell><CheckIcon/></TableCell>
              <TableCell><CheckIcon/></TableCell>
              <TableCell>12</TableCell>
            </TableRow>
            <TableRow key="4">
            <TableCell><User   
                      name="Jane Doe"
                      description="Product Designer"
                      avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                      }}
                    /></TableCell>
              <TableCell><CheckIcon/></TableCell>
              <TableCell><CheckIcon/></TableCell>
              <TableCell><CheckIcon/></TableCell>
              <TableCell><CheckIcon/></TableCell>
              <TableCell><CheckIcon/></TableCell>
              <TableCell><CheckIcon/></TableCell>
              <TableCell><XmarkIcon/></TableCell>
              <TableCell><XmarkIcon/></TableCell>
              <TableCell><XmarkIcon/></TableCell>
              <TableCell><XmarkIcon/></TableCell>
              <TableCell><CheckIcon/></TableCell>
              <TableCell><CheckIcon/></TableCell>
              <TableCell>12</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="col-span-3">
        
        <Table aria-label="Example static collection table"
          topContent="Special Meeting Ranking"
        >
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>Jan</TableColumn>
          <TableColumn>Feb</TableColumn>
          <TableColumn>Mar</TableColumn>
          <TableColumn>Apr</TableColumn>
          <TableColumn>May</TableColumn>
          <TableColumn>Jun</TableColumn>
          <TableColumn>Jul</TableColumn>
          <TableColumn>Aug</TableColumn>
          <TableColumn>Sep</TableColumn>
          <TableColumn>Oct</TableColumn>
          <TableColumn>Nov</TableColumn>
          <TableColumn>Dec</TableColumn>
          <TableColumn>Points</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
          <TableCell><User   
                      name="Jane Doe"
                      description="Product Designer"
                      avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                      }}
                    /></TableCell>
            <TableCell><CheckIcon/></TableCell>
            <TableCell><CheckIcon/></TableCell>
            <TableCell><CheckIcon/></TableCell>
            <TableCell><CheckIcon/></TableCell>
            <TableCell><XmarkIcon/></TableCell>
            <TableCell><XmarkIcon/></TableCell>
            <TableCell><XmarkIcon/></TableCell>
            <TableCell><XmarkIcon/></TableCell>
            <TableCell><XmarkIcon/></TableCell>
            <TableCell><XmarkIcon/></TableCell>
            <TableCell><CheckIcon/></TableCell>
            <TableCell><CheckIcon/></TableCell>
            <TableCell>12</TableCell>
          </TableRow>
          <TableRow key="2">
          <TableCell><User   
                      name="Jane Doe"
                      description="Product Designer"
                      avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                      }}
                    /></TableCell>
            <TableCell><CheckIcon/></TableCell>
            <TableCell><XmarkIcon/></TableCell>
            <TableCell><XmarkIcon/></TableCell>
            <TableCell><XmarkIcon/></TableCell>
            <TableCell><XmarkIcon/></TableCell>
            <TableCell><CheckIcon/></TableCell>
            <TableCell><CheckIcon/></TableCell>
            <TableCell><CheckIcon/></TableCell>
            <TableCell><CheckIcon/></TableCell>
            <TableCell><CheckIcon/></TableCell>
            <TableCell><CheckIcon/></TableCell>
            <TableCell><CheckIcon/></TableCell>
            <TableCell>12</TableCell>
          </TableRow>
          <TableRow key="3">
          <TableCell><User   
                      name="Jane Doe"
                      description="Product Designer"
                      avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                      }}
                    /></TableCell>
            <TableCell><CheckIcon/></TableCell>
            <TableCell><CheckIcon/></TableCell>
            <TableCell><XmarkIcon/></TableCell>
            <TableCell><XmarkIcon/></TableCell>
            <TableCell><XmarkIcon/></TableCell>
            <TableCell><XmarkIcon/></TableCell>
            <TableCell><XmarkIcon/></TableCell>
            <TableCell><CheckIcon/></TableCell>
            <TableCell><CheckIcon/></TableCell>
            <TableCell><CheckIcon/></TableCell>
            <TableCell><CheckIcon/></TableCell>
            <TableCell><CheckIcon/></TableCell>
            <TableCell>12</TableCell>
          </TableRow>
          <TableRow key="4">
          <TableCell><User   
                      name="Jane Doe"
                      description="Product Designer"
                      avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                      }}
                    /></TableCell>
            <TableCell><CheckIcon/></TableCell>
            <TableCell><CheckIcon/></TableCell>
            <TableCell><CheckIcon/></TableCell>
            <TableCell><CheckIcon/></TableCell>
            <TableCell><CheckIcon/></TableCell>
            <TableCell><CheckIcon/></TableCell>
            <TableCell><XmarkIcon/></TableCell>
            <TableCell><XmarkIcon/></TableCell>
            <TableCell><XmarkIcon/></TableCell>
            <TableCell><XmarkIcon/></TableCell>
            <TableCell><CheckIcon/></TableCell>
            <TableCell><CheckIcon/></TableCell>
            <TableCell>12</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>


    <div className="col-span-3">
        
        <Table aria-label="Example static collection table"
          topContent="Installations"
        >
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>Installations</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
          <TableCell><User   
                      name="Jane Doe"
                      description="Product Designer"
                      avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                      }}
                    /></TableCell>
            <TableCell>
              
            <Chip
              variant="shadow"
              classNames={{
                base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
                content: "drop-shadow shadow-black text-white",
              }}
            >
              Balanghay Nine Masonic Lodge
            </Chip>

            <Chip
              variant="shadow"
              classNames={{
                base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
                content: "drop-shadow shadow-black text-white",
              }}
            >
              Butuan Masonic Lodge
            </Chip>

            <Chip
              variant="shadow"
              classNames={{
                base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
                content: "drop-shadow shadow-black text-white",
              }}
            >
              Butuan Masonic Lodge
            </Chip>

            <Chip
              variant="shadow"
              classNames={{
                base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
                content: "drop-shadow shadow-black text-white",
              }}
            >
              Butuan Masonic Lodge
            </Chip>

            <Chip
              variant="shadow"
              classNames={{
                base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
                content: "drop-shadow shadow-black text-white",
              }}
            >
              Butuan Masonic Lodge
            </Chip>


            <Chip
              variant="shadow"
              classNames={{
                base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
                content: "drop-shadow shadow-black text-white",
              }}
            >
              Butuan Masonic Lodge
            </Chip>

            <Chip
              variant="shadow"
              classNames={{
                base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
                content: "drop-shadow shadow-black text-white",
              }}
            >
              Butuan Masonic Lodge
            </Chip>

            <Chip
              variant="shadow"
              classNames={{
                base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
                content: "drop-shadow shadow-black text-white",
              }}
            >
              Butuan Masonic Lodge
            </Chip>

            <Chip
              variant="shadow"
              classNames={{
                base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
                content: "drop-shadow shadow-black text-white",
              }}
            >
              Butuan Masonic Lodge
            </Chip>

            <Chip
              variant="shadow"
              classNames={{
                base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
                content: "drop-shadow shadow-black text-white",
              }}
            >
              Butuan Masonic Lodge
            </Chip>

            <Chip
              variant="shadow"
              classNames={{
                base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
                content: "drop-shadow shadow-black text-white",
              }}
            >
              Butuan Masonic Lodge
            </Chip>

            <Chip
              variant="shadow"
              classNames={{
                base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
                content: "drop-shadow shadow-black text-white",
              }}
            >
              Butuan Masonic Lodge
            </Chip>
            
            </TableCell>
          </TableRow>
          <TableRow key="2">
          <TableCell><User   
                      name="Jane Doe"
                      description="Product Designer"
                      avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                      }}
                    /></TableCell>
            <TableCell>
            <Chip
              variant="shadow"
              classNames={{
                base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
                content: "drop-shadow shadow-black text-white",
              }}
            >
              Butuan Masonic Lodge
            </Chip>
            </TableCell>
          </TableRow>
          <TableRow key="3">
          <TableCell><User   
                      name="Jane Doe"
                      description="Product Designer"
                      avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                      }}
                    /></TableCell>
            <TableCell>
            <Chip
              variant="shadow"
              classNames={{
                base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
                content: "drop-shadow shadow-black text-white",
              }}
            >
              Butuan Masonic Lodge
            </Chip>
            </TableCell>
          </TableRow>
          <TableRow key="4">
          <TableCell><User   
                      name="Jane Doe"
                      description="Product Designer"
                      avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                      }}
                    /></TableCell>
            <TableCell>
            <Chip
              variant="shadow"
              classNames={{
                base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
                content: "drop-shadow shadow-black text-white",
              }}
            >
              Butuan Masonic Lodge
            </Chip>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
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
        eventContent={renderEventContent}
        height={500}
        eventClick={(e)=>{
          console.log(e.event.id);
        }}
        customButtons={{
          myCustomButton: {
            text: 'Add Event',
            click: addEvent
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
