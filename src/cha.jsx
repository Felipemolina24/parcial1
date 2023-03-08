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

  function sumarValores(){
    let suma = 0
    numeros.forEach((item) => {
      suma += parseFloat(item.valor)
    })
    return suma;
  }

  return (
    <div className="container">
      <form onSubmit={numprev} class="center">
        <h1 class="cho"> Juegue su Chance </h1>
        <div className="form-group">
          <label class="col">Número:</label>
          <input class="inp" placeholder='Numero a jugar'
            type="number"
            name="numero"
            value={numeros.numero || ''}
            onChange={Lis}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label class= "col" >Valor:</label>
          <input class="inc" placeholder='Ingrese el valor'
            type="text"
            name="valor"
            value={numeros.valor || ''}
            onChange={Lis}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Agregar</button>
      </form>
      <ul className="list-group">
        {numeros.map((nv, index) => (
          <li key={index} className="list-group-item">
            Numero: {nv.numero}, Valor: $ {nv.valor}
          </li>
        ))}
      </ul>
      <center><p className="mt-3">Total: {sumarValores()}</p></center>
      
    </div>
  );
}

export default MostrarResultado;

