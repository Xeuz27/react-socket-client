import React, { useState } from "react";

const BandAdd = ({addBand}) => {
  const [name, setName] = useState('')
  const onSubmit = (e) => {
    e.preventDefault()
    if (name.trim().length > 0){
      addBand( name ) //llamada al action creator para enviar la accion a
    }
    setName('')
  }
  
  return (
    <>
      <h3> agregar banda </h3>
      <form onSubmit={onSubmit}>
        <input
         className="" 
         placeholder="nombre de nueva banda"
         value={name}
         onChange={(e) =>setName(e.target.value)}
         />
      </form>
    </>
  );
};

export default BandAdd;
