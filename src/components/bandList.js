import React, { useEffect, useState } from "react";

const BandList = ({ data, votar, borrarBanda, cambiarNombre }) => {
  const [bands, setbands] = useState(data);
  useEffect(() => {
    setbands(data);
  }, [data]);
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
    cambiarNombre(id,nombre)
  };

  const crearRows = () => {
    return bands.map((band) => (
      <tr key={band.id}>
        <td>
          <button
            onClick={()=>votar(band.id)}
          > +1</button>
        </td>
        <td>
          <input
            placeholder={band.name}
            on
            onChange={(event) => cambioNombre(event, band.id)}
            onBlur={() => onPerdioFocus(band.id, band.name)}
          />
        </td>
        <td>
          <h3>{band.votes}</h3>
        </td>
        <td>
          <button onClick={() => borrarBanda(band.id)}>borrar</button>
        </td>
      </tr>
    ));
  };

  return (
    <>
      <h3>bandas actuales</h3>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Band Name</th>
            <th> votos</th>
            <th> borrar</th>
          </tr>
        </thead>
        <tbody>{crearRows()}</tbody>
      </table>
    </>
  );
};

export default BandList;
