import DataTable from "react-data-table-component";

const Eventstable = () => {
  const columns = [
    {
      name: "Event Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "Speaker",
      selector: (row) => row.speaker,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
  ];
  const data = [
    {
      id: 1,
      name: "Cloud Innovation Summit",
      date: "2024-10-15",
      speaker: "Jane Doe",
      status: (
        <div className="pt-3 pb-3">
          <button className="text-green-400 outline outline-1 outline-green-400 p-2 w-20 rounded-full">
            completed
          </button>
        </div>
      ),
    },
    {
      id: 2,
      name: "Blockchain Revolution Conference",
      date: "2024-11-05",
      speaker: "Dr. Peter Smith",
      status: (
        <div className="pt-3 pb-3">
          <button className="text-blue-400 outline outline-1 outline-blue-400 p-2 w-20 rounded-full">
            In Progress
          </button>
        </div>
      ),
    },
    {
      id: 3,
      name: "AI in Healthcare Symposium",
      date: "2024-12-01",
      speaker: "Dr. Aisha Malik",
      status: (
        <div className="pt-3 pb-3">
          <button className="text-green-400 outline outline-1 outline-green-400 p-2 w-20 rounded-full">
            completed
          </button>
        </div>
      ),
    },
    {
      id: 4,
      name: "Future of Fintech Forum",
      date: "2024-10-25",
      speaker: "John Lee",
      status: (
        <div className="pt-3 pb-3">
          <button className="text-green-400 outline outline-1 outline-green-400 p-2 w-20 rounded-full">
            completed
          </button>
        </div>
      ),
    },
    {
      id: 5,
      name: "Data Analytics in Business",
      date: "2024-11-12",
      speaker: "Rachel Moore",
      status: (
        <div className="pt-3 pb-3">
          <button className="text-green-400 outline outline-1 outline-green-400 p-2 w-20 rounded-full">
            completed
          </button>
        </div>
      ),
    },
    {
      id: 6,
      name: "Sustainable Energy Expo",
      date: "2024-09-28",
      speaker: "Prof. Alan Green",
      status: (
        <div className="pt-3 pb-3">
          <button className="text-green-400 outline outline-1 outline-green-400 p-2 w-20 rounded-full">
            completed
          </button>
        </div>
      ),
    },
    {
      id: 7,
      name: "Web3 Interfaces Workshop",
      date: "2024-10-10",
      speaker: "Kevin Adams",
      status: (
        <div className="pt-3 pb-3">
          <button className="text-blue-400 outline outline-1 outline-blue-400 p-2 w-20 rounded-full">
            In Progress
          </button>
        </div>
      ),
    },
    {
      id: 8,
      name: "Cybersecurity For Startups",
      date: "2024-11-19",
      speaker: "Emily Zhang",
      status: (
        <div className="pt-3 pb-3">
          <button className="text-green-400 outline outline-1 outline-green-400 p-2 w-20 rounded-full">
            completed
          </button>
        </div>
      ),
    },
    {
      id: 9,
      name: "Smart Cities Forum",
      date: "2024-10-18",
      speaker: "Dr. Maria Hernandez",
      status: (
        <div className="pt-3 pb-3">
          <button className="text-blue-400 outline outline-1 outline-blue-400 p-2 w-20 rounded-full">
            In Progress
          </button>
        </div>
      ),
    },
    {
      id: 10,
      name: "Texh Safari Mixer",
      date: "2024-09-30",
      speaker: "Guest Panel",
      status: (
        <div className="pt-3 pb-3">
          <button className="text-blue-400 outline outline-1 outline-blue-400 p-2 w-20 rounded-full">
            In Progress
          </button>
        </div>
      ),
    },
  ];
  return (
    <div className="m-8">
      <DataTable columns={columns} data={data}></DataTable>
    </div>
  );
};

export default Eventstable;
