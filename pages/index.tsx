import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { CheckIcon, GithubIcon, XmarkIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { Calendar, Card, CardBody, CardFooter, CardHeader, Image, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";

export default function IndexPage() {
  return (
    <DefaultLayout>
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-3">
        <Card>
          <CardBody>
            <p>Welcome to Balanghay Nine Masonic Lodge 493 Information System.</p>
          </CardBody>
        </Card>
      </div>

      <div className="col-span-3">
      <Table aria-label="Example static collection table"
            topContent="Overall Summary"
          >
             <TableHeader>
                <TableColumn>Name</TableColumn>
                <TableColumn>Stated Meeting</TableColumn>
                <TableColumn>Stated Meeting</TableColumn>
                <TableColumn>Installation</TableColumn>
                <TableColumn>Flag Tribute</TableColumn>
                <TableColumn>Total Points</TableColumn>
             </TableHeader>
             <TableBody>

              <TableRow key="3">
                <TableCell>Tony G</TableCell>
                <TableCell>12</TableCell>
                <TableCell>54</TableCell>
                <TableCell>3</TableCell>
                <TableCell>33</TableCell>
                <TableCell>100</TableCell>
              </TableRow>

              <TableRow key="4">
                <TableCell>Tony S</TableCell>
                <TableCell>12</TableCell>
                <TableCell>54</TableCell>
                <TableCell>3</TableCell>
                <TableCell>23</TableCell>
                <TableCell>90</TableCell>
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
              <TableCell>Tony Reichert</TableCell>
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
              <TableCell>Zoey Lang</TableCell>
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
              <TableCell>Jane Fisher</TableCell>
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
              <TableCell>William Howard</TableCell>
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
            <TableCell>Tony Reichert</TableCell>
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
            <TableCell>Zoey Lang</TableCell>
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
            <TableCell>Jane Fisher</TableCell>
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
            <TableCell>William Howard</TableCell>
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

      <div className="col-span-2">
        <Calendar aria-label="Date (No Selection)" />
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
              <TableCell>File 1</TableCell>
              <TableCell>File Path</TableCell>
            </TableRow>
            <TableRow key="2">
            <TableCell>File 2</TableCell>
            <TableCell>File Path</TableCell>
            </TableRow>
            <TableRow key="3">
            <TableCell>File 3</TableCell>
            <TableCell>File Path</TableCell>
            </TableRow>
            <TableRow key="4">
            <TableCell>File 4</TableCell>
            <TableCell>File Path</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
    </DefaultLayout>
  );
}
