import { useState, useEffect } from "react";
import { io } from "socket.io-client";

import "./App.css";
import BandAdd from "./components/bandAdd";
import BandList from "./components/bandList";

const connectSocketServer = () => {
  const socket = io.connect("http://localhost:8080", {
    transports: ["websocket"],
  });
  return socket;
};
function App() {
  const [socket, setSocket] = useState(connectSocketServer());
  const [online, setOnline] = useState(false);
  useEffect(() => {
    setOnline(socket.connected);
  }, [socket]);

  useEffect(() => {
    socket.on("connect", () => {
      setOnline(true);
    });
  }, [socket]);
  useEffect(() => {
    socket.on("disconnect", () => {
      setOnline(false);
    });
  }, [socket]);

  return (
    <div className="container">
      <div class="alert ml-8">
        <p>
          status:{" "}
          {online ? (
            <span className="text-green-500"> online</span>
          ) : (
            <span className="text-red-500"> offline</span>
          )}
        </p>
      </div>

      <h1 className="w-content text-3xl ml-8">bandnames</h1>
      <hr />

      <div className="flex ml-8">
        <div className="p-4 w-[60%] border border-solid border-red-500">
          <BandList />
        </div>
        <div className="p-4 w-[40%] border-red-500 border-solid border">
          <BandAdd />
        </div>
      </div>
    </div>
  );
}

export default App;
