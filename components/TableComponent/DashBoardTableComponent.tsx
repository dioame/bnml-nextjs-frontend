'use client';
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
  Selection,
  ChipProps,
  SortDescriptor,
  Link,
} from "@nextui-org/react";
import DefaultLayout from "@/layouts/default";

import {PlusIcon} from "./assets/PlusIcon";
import {VerticalDotsIcon} from "./assets/VerticalDotsIcon";
import {ChevronDownIcon} from "./assets/ChevronDownIcon";
import {SearchIcon} from "./assets/SearchIcon";
import {capitalize} from "./assets/utils";
import { CheckIcon, ExportIcon, FileOpenIcon, XmarkIcon } from "../icons";
import * as XLSX from "xlsx";


export default function DashBoardTableComponent(
  { 
    title,
    columns,
    tableDatas,
    topContent
  } : any
) {

  //init
  type TableDatas = typeof tableDatas[0];

  const [filterValue, setFilterValue] = React.useState("");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "age",
    direction: "ascending",
  });

  const [page, setPage] = React.useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    return columns;
  }, []);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...tableDatas];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.name.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }

    return filteredUsers;
  }, [tableDatas, filterValue]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: TableDatas, b: TableDatas) => {
      const first = a[sortDescriptor.column as keyof TableDatas] as number;
      const second = b[sortDescriptor.column as keyof TableDatas] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((data: TableDatas, columnKey: React.Key) => {
    const cellValue = data[columnKey as keyof TableDatas];

    const months = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
    if(months.includes(columnKey)){
        if(cellValue){
          return <CheckIcon/>;
        }else{
          return <XmarkIcon/>;
        }
    }
    switch(columnKey){
        case "installation":
          // console.log(cellValue)
          // $''
          // for(var i in cellValue){

          // }
          return(
            <>
            {cellValue.map((value:any)=>{
              return (
                <div className="gap-3">
                <Chip
                  variant="shadow"
                  classNames={{
                    base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
                    content: "drop-shadow shadow-black text-white",
                  }}
                >
                 {value.name}
                </Chip>
                </div>
              )
            })}
            </>
          )
        case "path":
          return (
            <Chip
              variant="shadow"
              classNames={{
                base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
                content: "drop-shadow shadow-black text-white",
              }}
              as={Link}
              target="_blank"
              href={`${process.env.NEXT_PUBLIC_API_URL}/${data['path']}`}
            >
              <FileOpenIcon/>
            </Chip>
          )
        case "id": 
        return (
            <h3 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0 text-center">
                {cellValue}
            </h3>
        );
        case "name":
        return (
            <User   
            name={cellValue}
            avatarProps={{
                src: ''
            }}
            />
        )
        default:
            return cellValue;
    }
  }, []);

  const onNextPage = React.useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = React.useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onClear = React.useCallback(()=>{
    setFilterValue("")
    setPage(1)
  },[])


  function onExport(title:any,worksheetname:any){

    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils?.json_to_sheet(tableDatas);
    XLSX.utils.book_append_sheet(workbook, worksheet, worksheetname);
    // Save the workbook as an Excel file
    XLSX.writeFile(workbook, `${title}.xlsx`);
    
  }

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onPreviousPage}>
            Previous
          </Button>
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}>
            Next
          </Button>
        </div>
      </div>
    );
  }, [items.length, page, pages, hasSearchFilter]);

  return (
    // <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 ">
        {/* <div className="inline-block max-w-lg text-center justify-center"> */}
          <Table
            aria-label="Example table with custom cells, pagination and sorting"
            isHeaderSticky
            bottomContent={bottomContent}
            classNames={{
              wrapper: "max-h-full",
            }}
            sortDescriptor={sortDescriptor}
            topContent= {topContent}
            onSortChange={setSortDescriptor}
            style={{height:"auto"}}
          >
            <TableHeader columns={headerColumns}>
              {(column:any) => (
                <TableColumn
                  key={column.uid}
                  align={column.uid === "actions" ? "center" : "start"}
                  allowsSorting={column.sortable}
                >
                  {column.name}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody emptyContent={"No Data found"} items={sortedItems}>
              {(item) => (
                <TableRow key={item.id}>
                  {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                </TableRow>
              )}
            </TableBody>
          </Table>
          {/* </div> */}
      </section>
  );
}
