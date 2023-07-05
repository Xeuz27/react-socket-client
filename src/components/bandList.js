import React from "react";

const BandList = () => {
    const crearRows = () => {
        return (
            <tr>
                <td>
                    <button> +1</button>
                </td>
                <td>
                    <input />
                </td>
                <td><h3>15</h3></td>
                <td><button>borrar</button></td>
            </tr>
        )
    }

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
