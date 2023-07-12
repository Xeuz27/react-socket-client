import { useContext, useState, useEffect } from "react";

import "../App.css";
import BandAdd from "../components/bandAdd";
import BandList from "../components/bandList";
import { SocketContext } from "../context/SocketContext";
import { useSocket } from "../hooks/useSocket";
import {BandChart} from "../components/BandChart";

function HomePage() {
  const { online } = useContext(SocketContext);
  return (
    <div className="container">
      <div className="alert ml-8">
        <p className="font-medium">
          Status:
          {online ? (
            <span className="text-green-500 text-xl bg-green-100 p-1 rounded-lg">
              Online
            </span>
          ) : (
            <span className="text-red-500 text-xl bg-red-100 p-1 rounded-lg"> offline</span>
          )}
        </p>
      </div>

      <h1 className="w-content text-3xl ml-8">bandnames</h1>
      <hr />
      <div className="w-[600px] mx-auto h-auto"><BandChart /></div>
      

      <div className="flex ml-8">
        <div className="p-4 w-[60%] border border-solid border-sky-950">
          <BandList />
        </div>
        <div className="p-4 w-[40%] border-sky-950 border-solid border">
          <BandAdd />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
