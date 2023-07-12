import React, { useContext, useEffect } from "react";
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

export const BandChart = () => {
    const { socket } = useContext(SocketContext);
    let newBands = [];
    useEffect( () => {
        socket.on("current-bands", (bands) => {
        //   setbands(bands);
        bands.map((band)=> {
            var newBand = {
                name: band.name
            };
            newBands.push(newBand)
        })
        })
        
    
        return () => socket.off("current-bands");
      }, [socket]);

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
  var beneficios = [0, 62, 20, 36, 80, 40, 30, 20, 25, 30, 12, 60];
  var meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  var midata = {
    labels: meses,
    datasets: [
      // Cada una de las líneas del gráfico
      {
        label: "Beneficios",
        data: beneficios,
        tension: 0.4,
        fill: true,
        borderColor: "rgb(100, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        pointRadius: 5,
        pointBorderColor: "rgba(255, 99, 132)",
        pointBackgroundColor: "rgba(255, 99, 132)",
      },
      // {
      //   label: "Otra línea",
      //   data: [20, 25, 60, 65, 45, 10, 0, 25, 35, 7, 20, 25],
      //   fill: true,
      //   borderColor: "rgb(10, 150, 132)",
      //   backgroundColor: "rgba(10, 150, 132, 0.5)",
      //   pointRadius: 5,
      //   pointBorderColor: "rgba(255, 99, 132)",
      //   pointBackgroundColor: "rgba(255, 99, 132)",

      // },
    ],
  };
  var misoptions = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    scales: {
      y: {
        min: -40,
      },
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
      data={midata}
      options={misoptions}
    />
  );
};

//  export default BandChart;
