import React, { useEffect, useState } from "react";

const BandList = ({ data }) => {
  const [bands, setbands] = useState([]);
  useEffect(() => {
    setbands(data);
  }, [data]);
  console.log(bands)

  const crearRows = () => {
    return bands.map((band) => (
      <tr key={band.id}>
        <td>
          <button> +1</button>
        </td>
        <td>
          <input placeholder={band.name} />
        </td>
        <td>
          <h3>15</h3>
        </td>
        <td>
          <button>borrar</button>
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
