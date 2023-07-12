import React, { useContext, useEffect, useState } from "react";
import { SocketContext } from "../context/SocketContext";

const BandList = () => {
  const [bands, setbands] = useState([]);
  const { socket } = useContext(SocketContext);

  useEffect(() => {
    socket.on("current-bands", (bands) => {
      setbands(bands);
    });
    return () => socket.off("current-bands");
  }, [socket]);
  
  const cambioNombre = (event, id) => {
    const nuevoNombre = event.target.value;
    setbands((bands) =>
      bands.map((band) => {
        if (band.id === id) {
          band.name = nuevoNombre;
        }
        return band;
      })
    );
  };

  const onPerdioFocus = (id, nombre) => {
    socket.emit("cambiar-nombre-banda", { id, nombre });
  };  
  const votar = (id) => {
    socket.emit("votar-banda", id);
  };  
  const borrarBanda = (id) => {
    console.log("borrando banda", id);
    socket.emit("borrar-banda", id);
  };  
  const crearRows = () => {
    return bands.map((band) => (
      <tr key={band.id}>
        <td>
          <button
            className="m-4 px-4 py-1 bg-sky-600 rounded border-1 border-sky-950 text-white text-md font-bold
            "
            onClick={() => votar(band.id)}
          >
            Votar +1
          </button>
        </td>
        <td>
          <input
            className="text-center text-stone-950 font-bold placeholder:text-slate-400 border border-sky-950 py-1"
            placeholder={band.name}
            on
            onChange={(event) => cambioNombre(event, band.id)}
            onBlur={() => onPerdioFocus(band.id, band.name)}
          />
        </td>
        <td className="mr-4 font-bold">
          <h3>{band.votes}</h3>
        </td>
        <td>
          <button
            className="p-4 py-1 rounded-lg bg-red-400 font-bold text-sm"
            onClick={() => borrarBanda(band.id)}
          >
            Borrar
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <>
      <h3 className="text-center text-xl">bandas actuales</h3>
      <table className="text-center w-4/5 mx-auto">
        <thead>
          <tr>
            <th># de Votos</th>
            <th>Band Name</th>
            <th>votos</th>
            <th>{""}</th>
          </tr>
        </thead>
        <tbody>{crearRows()}</tbody>
      </table>
    </>
  );
};

export default BandList;
