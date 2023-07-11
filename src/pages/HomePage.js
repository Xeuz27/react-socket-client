import {useContext, useState, useEffect } from "react";

import "../App.css";
import BandAdd from "../components/bandAdd";
import BandList from "../components/bandList";
import { SocketContext } from "../context/SocketContext";
import { useSocket } from "../hooks/useSocket";

function HomePage() {
   const {online, socket} = useContext(SocketContext)
  //  const [bands, setBands] = useState([])
  // const {online, socket} = useSocket('http://localhost:8080')


  // useEffect(() => {
  //   socket.on("current-bands", (bands) => {
  //     setBands(bands)
  //   });
  // }, [socket]);

  // const votar = (id) => {
  //   socket.emit('votar-banda', id)
  // }
  // const borrarBanda = (id) => {
  //   console.log('borrando banda', id)
  //   socket.emit('borrar-banda', id)
  // }
  // const cambiarNombre = (id, nombre) => {
  //   socket.emit('cambiar-nombre-banda', {id, nombre})
  // }
  // const addBand = (nombre) => {
  //   socket.emit('add-band', nombre)
  // }



  return (
    <div className="container">
      <div className="alert ml-8">
        <p>
          status:
          {online ? (
            <span className="text-green-500"> online</span>
          ) : (
            <span className="text-red-500"> offline</span>
          )}
        </p>
      </div>

      <h1 className="w-content text-3xl ml-8">bandnames</h1>
      <hr />

      {/* <div className="flex ml-8">
        <div className="p-4 w-[60%] border border-solid border-sky-950">
          <BandList data={bands} votar={votar} borrarBanda={borrarBanda} cambiarNombre={cambiarNombre} />
        </div>
        <div className="p-4 w-[40%] border-sky-950 border-solid border">
          <BandAdd addBand={addBand} />
        </div>
      </div> */}
    </div>
  );
}

export default HomePage;
