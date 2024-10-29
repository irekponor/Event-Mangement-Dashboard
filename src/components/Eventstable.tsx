import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const Eventstable = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Function to update isMobile based on window width
  const handleResize = () => {
    setIsMobile(window.innerWidth < 1280); // Set 1280px as the breakpoint for mobile
  };

  useEffect(() => {
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize); // Add event listener
    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, []);

  const columns = isMobile
    ? [
        {
          name: (
            <span className="font-title text-[14px] text-custom-color1">
              Event Name
            </span>
          ),
          selector: (row) => row.name,
          sortable: true,
          cell: (row) => (
            <span className="font-title text-[14px] text-custom-color1">
              {row.name}
            </span>
          ),
        },
        {
          name: (
            <span className="font-title text-[14px] text-custom-color1">
              Status
            </span>
          ),
          selector: (row) => row.status,
          sortable: true,
        },
      ]
    : [
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
          <button className="xl:text-green-400 max-xl:text-white max-xl:bg-green-500 xl:outline outline-1 outline-green-400 p-2 w-20 rounded-full">
            Completed
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
          <button className="xl:text-blue-400 max-xl:text-white max-xl:bg-blue-500 xl:outline outline-1 outline-blue-400 p-2 w-20 rounded-full">
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
          <button className="xl:text-green-400 max-xl:text-white max-xl:bg-green-500 xl:outline outline-1 outline-green-400 p-2 w-20 rounded-full">
            Completed
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
          <button className="xl:text-green-400 max-xl:text-white max-xl:bg-green-500 xl:outline outline-1 outline-green-400 p-2 w-20 rounded-full">
            Completed
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
          <button className="xl:text-green-400 max-xl:text-white max-xl:bg-green-500 xl:outline outline-1 outline-green-400 p-2 w-20 rounded-full">
            Completed
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
          <button className="xl:text-green-400 max-xl:text-white max-xl:bg-green-500 xl:outline outline-1 outline-green-400 p-2 w-20 rounded-full">
            Completed
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
          <button className="xl:text-blue-400 max-xl:text-white max-xl:bg-blue-500 xl:outline outline-1 outline-blue-400 p-2 w-20 rounded-full">
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
          <button className="xl:text-green-400 max-xl:text-white max-xl:bg-green-500 xl:outline outline-1 outline-green-400 p-2 w-20 rounded-full">
            Completed
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
          <button className="xl:text-blue-400 max-xl:text-white max-xl:bg-blue-500 xl:outline outline-1 outline-blue-400 p-2 w-20 rounded-full">
            In Progress
          </button>
        </div>
      ),
    },
    {
      id: 10,
      name: "Tech Safari Mixer",
      date: "2024-09-30",
      speaker: "Guest Panel",
      status: (
        <div className="pt-3 pb-3">
          <button className="xl:text-blue-400 max-xl:text-white max-xl:bg-blue-500 xl:outline outline-1 outline-blue-400 p-2 w-20 rounded-full">
            In Progress
          </button>
        </div>
      ),
    },
  ];

  const customStyles = {
    rows: {
      style: {
        backgroundColor: "var(--foreground-color)",
        color: "var(--secondary-text-color)",
      },
    },
    headCells: {
      style: {
        backgroundColor: "var(--table-color)",
        color: "var(--main-color)",
      },
    },
  };

  return (
    <div>
      <DataTable
        columns={columns}
        data={data}
        customStyles={customStyles}
        responsive // Enable responsive behavior
      />
    </div>
  );
};

export default Eventstable;
