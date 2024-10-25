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
    <div className="xl:w-[38%] w-[90%] xl:m-[320px] mt-2 ml-4">
      <h2 className="font-semibold font-title xl:mt-20 mt-44 pl-2 xl:pt-40 pt-96 text-custom-color1 text-[17px] pb-2">
        Event Registrations per month
      </h2>
      <div>
        <Bar
          className="bg-foreground-color outline outline-outline-color rounded-md"
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default Chart;
