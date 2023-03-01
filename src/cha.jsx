import React, { useState } from 'react';

function MostrarResultado() {
  const [numeros, setNumeros] = useState([]);

  const Lis = (event) => {
    const { nombre, valores } = event.target;
    setNumeros((estado) => ({
      ...estado,
      [nombre]: valores,
    }));
  };

  const numprev = (event) => {
    event.evento();
    setNumeros((estado) => [
      ...estado,
      {
        numero: estado.numero,
        valor: estado.valor,
      },
    ]);
  };

  return (
    <div>
      <form onSubmit={numprev}>
        <label>
          Número:
          <input
            type="number"
            nombre="numero"
            value={numeros.numero || ''}
            onChange={Lis}
          />
        </label>
        <label>
          Valor:
          <input
            type="text"
            nombre="valor"
            valores={numeros.valor || ''}
            onChange={Lis}
          />
        </label>
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {numeros.map((nv, indeice) => (
          <li key={indeice}>
            Numero: {nv.numero}, Valor: $ {nv.valor}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MostrarResultado;
