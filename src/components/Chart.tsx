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
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const data: ChartData<"bar"> = {
  labels: labels,
  datasets: [
    {
      data: [65, 59, 80, 81, 56, 55, 40, 73, 20, 40, 87, 47], // data
      backgroundColor: [
        "#8576ff",
        "#8576ff",
        "#8576ff",
        "#8576ff",
        "#8576ff",
        "#8576ff",
        "#8576ff",
        "#8576ff",
        "#8576ff",
        "#8576ff",
        "#8576ff",
        "#8576ff",
      ],
      borderColor: [
        "#8576ff",
        "#8576ff",
        "#8576ff",
        "#8576ff",
        "#8576ff",
        "#8576ff",
        "#8576ff",
        "#8576ff",
        "#8576ff",
        "#8576ff",
        "#8576ff",
        "#8576ff",
      ],
      borderWidth: 1,
    },
  ],
};

const options: ChartOptions<"bar"> = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Event Registrations per month",
    },
  },
};

const Chart: React.FC = () => {
  return (
    <div style={{ width: "40%", margin: "200px 340px", height: "80vh" }}>
      <h2 className="font-title mt-24 text-custom-color1">
        Event Registrations per month
      </h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Chart;
