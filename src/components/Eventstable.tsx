import DataTable from "react-data-table-component";

const Eventstable = () => {
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Age",
      selector: (row) => row.age,
    },
  ];
  const data = [
    {
      id: 1,
      name: "emma",
      email: "emma@gmail.com",
      age: "23",
    },
    {
      id: 1,
      name: "jemmi",
      email: "198jj@gmail.com",
      age: "20",
    },
    {
      id: 1,
      name: "dami",
      email: "dami99@gmail.com",
      age: "18",
    },
    {
      id: 1,
      name: "derra",
      email: "d.@gmail.com",
      age: "31",
    },
    {
      id: 1,
      name: "perter",
      email: "peyt@gmail.com",
      age: "29",
    },
  ];
  return (
    <div className="m-8">
      <DataTable columns={columns} data={data}></DataTable>
    </div>
  );
};

export default Eventstable;
