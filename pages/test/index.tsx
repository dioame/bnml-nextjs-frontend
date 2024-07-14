import TableComponent from '@/components/table/table'
import React from 'react'

var users = [
    {
      id: 1,
      name: "Tony Reichert",
      type: "CEO",
      team: "Management",
      status: "active",
      age: "29",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      email: "tony.reichert@example.com",
      created_at: '2024-07-07'
    },
    {
      id: 2,
      name: "Zoey Lang",
      role: "Tech Lead",
      team: "Development",
      status: "paused",
      age: "25",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      email: "zoey.lang@example.com",
        created_at: '2024-07-08'
    },
    {
      id: 3,
      name: "Jane Fisher",
      role: "Sr. Dev",
      team: "Development",
      status: "active",
      age: "22",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      email: "jane.fisher@example.com",
        created_at: '2024-07-09'
    },
    {
      id: 4,
      name: "William Howard",
      role: "C.M.",
      team: "Marketing",
      status: "vacation",
      age: "28",
      avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
      email: "william.howard@example.com",
        created_at: '2024-07-10'
    },
    {
      id: 5,
      name: "Kristen Copper",
      role: "S. Manager",
      team: "Sales",
      status: "active",
      age: "24",
      avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
      email: "kristen.cooper@example.com",
        created_at: '2024-07-11'
    },
    {
      id: 6,
      name: "Brian Kim",
      role: "P. Manager",
      team: "Management",
      age: "29",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      email: "brian.kim@example.com",
      status: "Active",
        created_at: '2024-07-12'
    },
    {
      id: 7,
      name: "Michael Hunt",
      role: "Designer",
      team: "Design",
      status: "paused",
      age: "27",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29027007d",
      email: "michael.hunt@example.com",
        created_at: '2024-07-13'
    },
    {
      id: 8,
      name: "Samantha Brooks",
      role: "HR Manager",
      team: "HR",
      status: "active",
      age: "31",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e27027008d",
      email: "samantha.brooks@example.com",
        created_at: '2024-07-14'
    },
    {
      id: 9,
      name: "Frank Harrison",
      role: "F. Manager",
      team: "Finance",
      status: "vacation",
      age: "33",
      avatar: "https://i.pravatar.cc/150?img=4",
      email: "frank.harrison@example.com",
        created_at: '2024-07-15'
    },
    {
      id: 10,
      name: "Emma Adams",
      role: "Ops Manager",
      team: "Operations",
      status: "active",
      age: "35",
      avatar: "https://i.pravatar.cc/150?img=5",
      email: "emma.adams@example.com",
        created_at: '2024-07-07'
    },
    {
      id: 11,
      name: "Brandon Stevens",
      role: "Jr. Dev",
      team: "Development",
      status: "active",
      age: "22",
      avatar: "https://i.pravatar.cc/150?img=8",
      email: "brandon.stevens@example.com",
        created_at: '2024-07-07'
    },
    {
      id: 12,
      name: "Megan Richards",
      role: "P. Manager",
      team: "Product",
      status: "paused",
      age: "28",
      avatar: "https://i.pravatar.cc/150?img=10",
      email: "megan.richards@example.com",
        created_at: '2024-07-07'
    },
    {
      id: 13,
      name: "Oliver Scott",
      role: "S. Manager",
      team: "Security",
      status: "active",
      age: "37",
      avatar: "https://i.pravatar.cc/150?img=12",
      email: "oliver.scott@example.com",
        created_at: '2024-07-07'
    },
    {
      id: 14,
      name: "Grace Allen",
      role: "M. Specialist",
      team: "Marketing",
      status: "active",
      age: "30",
      avatar: "https://i.pravatar.cc/150?img=16",
      email: "grace.allen@example.com",
        created_at: '2024-07-07'
    },
    {
      id: 15,
      name: "Noah Carter",
      role: "IT Specialist",
      team: "I. Technology",
      status: "paused",
      age: "31",
      avatar: "https://i.pravatar.cc/150?img=15",
      email: "noah.carter@example.com",
        created_at: '2024-07-07'
    },
    {
      id: 16,
      name: "Ava Perez",
      role: "Manager",
      team: "Sales",
      status: "active",
      age: "29",
      avatar: "https://i.pravatar.cc/150?img=20",
      email: "ava.perez@example.com",
        created_at: '2024-07-07'
    },
    {
      id: 17,
      name: "Liam Johnson",
      role: "Data Analyst",
      team: "Analysis",
      status: "active",
      age: "28",
      avatar: "https://i.pravatar.cc/150?img=33",
      email: "liam.johnson@example.com",
        created_at: '2024-07-07'
    },
    {
      id: 18,
      name: "Sophia Taylor",
      role: "QA Analyst",
      team: "Testing",
      status: "active",
      age: "27",
      avatar: "https://i.pravatar.cc/150?img=29",
      email: "sophia.taylor@example.com",
        created_at: '2024-07-07'
    },
    {
      id: 19,
      name: "Lucas Harris",
      role: "Administrator",
      team: "Information Technology",
      status: "paused",
      age: "32",
      avatar: "https://i.pravatar.cc/150?img=50",
      email: "lucas.harris@example.com",
        created_at: '2024-07-07'
    },
    {
      id: 20,
      name: "Mia Robinson",
      role: "Coordinator",
      team: "Operations",
      status: "active",
      age: "26",
      avatar: "https://i.pravatar.cc/150?img=45",
      email: "mia.robinson@example.com",
        created_at: '2024-07-07'
    },
  ];

const columns = [
{name: "ID", uid: "id", sortable: true},
{name: "NAME", uid: "name", sortable: true},
{name: "AGE", uid: "age", sortable: true},
{name: "ROLE", uid: "role", sortable: true},
{name: "TEAM", uid: "team"},
{name: "EMAIL", uid: "email"},
{name: "STATUS", uid: "status", sortable: true},
{name: "CREATED_AT", uid: "created_at", sortable: true},
{name: "ACTIONS", uid: "actions"},
];

const statusOptions = [
{name: "Active", uid: "active"},
{name: "Paused", uid: "paused"},
{name: "Vacation", uid: "vacation"},
];
  

const INITIAL_VISIBLE_COLUMNS = ["name", "role", "status","created_at", "actions"];


const Test = () => {    
    // users.push( {
    //     id: 31,
    //     name: "Tony Rdasdeichert",
    //     type: "CEO",
    //     team: "Management",
    //     status: "active",
    //     age: "29",
    //     avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    //     email: "tony.reichert@example.com",
    //     created_at: '2024-07-07'
    //   })

  return (
    <div>
      <TableComponent users={users} columns={columns} statusOptions={statusOptions} INITIAL_VISIBLE_COLUMNS={INITIAL_VISIBLE_COLUMNS}/>
    </div>
  )
}

export default Test
