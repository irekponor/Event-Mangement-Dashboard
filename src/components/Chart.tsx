import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";

// Registering necessary chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Generating labels for the months
const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const data: ChartData<"bar"> = {
  labels: labels,
  datasets: [
    {
      data: [620, 900, 800, 400, 989, 600, 830, 300, 810, 600, 910, 580], // data
      backgroundColor: "#8576ff", // Simplified to a single color
      borderColor: "#8576ff",
      borderWidth: 1,
    },
  ],
};

const options: ChartOptions<"bar"> = {
  responsive: true,
  aspectRatio: 2, // Adjust aspect ratio
  plugins: {
    legend: {
      display: false, // hide legend
    },
    title: {
      display: false, // hide title
    },
  },
  scales: {
    x: {
      grid: {
        display: true, // display grid on X-axis
      },
      ticks: {
        color: "#aaa",
      },
    },
    y: {
      grid: {
        color: "#aaa", // Customize grid color on Y-axis
      },
      ticks: {
        color: "#aaa",
        stepSize: 200, // Y-axis step size
      },
    },
  },
};

const Chart: React.FC = () => {
  return (
    <div
      style={{
        width: "40%",
        margin: "200px 340px",
        height: "90vh",
      }}
    >
      <h2 className="font-title mt-32 text-custom-color1 text-[17px] pb-4">
        Event Registrations per month
      </h2>
      <Bar
        className="bg-foreground-color outline outline-outline-color rounded-md"
        data={data}
        options={options}
      />
    </div>
  );
};

export default Chart;