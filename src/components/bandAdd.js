import React, { useContext, useState } from "react";
import { SocketContext } from "../context/SocketContext";

const BandAdd = () => {
  const [name, setName] = useState("");
  const { socket } = useContext(SocketContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (name.trim().length > 0) {
      socket.emit("add-band", name);
    }
    setName("");
  };

  return (
    <>
      <h3 className="pl-4 text-lg font-medium"> Agregar banda </h3>
      <form onSubmit={onSubmit}>
        <input
          className="py-1 px-2 border border-sky-950"
          placeholder="nombre de nueva banda"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </>
  );
};

export default BandAdd;
