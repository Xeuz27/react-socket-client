import React, { useContext, useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { SocketContext } from "../context/SocketContext";
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const BandChart = () => {
  const { socket } = useContext(SocketContext);
  const [bands, setBands] = useState([]);
  useEffect(() => {
    socket.on("current-bands", (bands) => {
      setBands(bands);
    });
    return () => socket.off("current-bands");
  }, [socket]);
  
  let data = {
    labels: bands.map(band => band.name)
    ,
    datasets: [
      // Cada una de las líneas del gráfico
      {
        label: "Beneficios",
        data: bands.map(band => band.votes),
        tension: 0.4,
        fill: true,
        borderColor: "rgb(100, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        pointRadius: 5,
        pointBorderColor: "rgba(255, 99, 132)",
        pointBackgroundColor: "rgba(255, 99, 132)",
      },
    ],
  };
  let options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    scales: {
      // y: {
      //   min: -40,
      // },
      x: {
        min: 0,
        ticks: { color: "rgb(255, 99, 132)" },
      },
    },
  };

  return (
    <Bar
      id="myChart"
      className="w-[600px]"
      data={data}
      options={options}
    />
  );
};

