import './App.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { render } from '@testing-library/react';

function App() {
  const estudiantes = [
    {id: 1, name: 'Juan', curso: '5c'},
    {id: 2, name: 'Martin', curso: '5c'},
    {id: 3, name: 'Fede', curso: '5c'},
  ];
    //   const [hijos, setHijos] = useState(" ")
    // const response = fetch("http://localhost:5001/estacionamiento/ordenar", {
    //   method: "GET",
    //   mode: "cors",
    //   credentials: "include",
    //   headers: {
    //     "Content-Type": "application/json",
    //   }
    // }).then( (res) => res.json()).then((json) => {
    //   this.setState({items: json})
    //   setHijos(json)
    //   console.log(hijos)
    // })

  return (
    <div>
      <div>
        <h1>Hola, luca!</h1>
      </div>
      <div className="contenedor">
        <h1>¿A quien quieres retirar?</h1>
        <h2>indica con un tic a quien queres retirar. Aquellos espacios que quedan en blanco no estaran disponibles para el retiro</h2>
        <form>
      {
        estudiantes.map((estudiante) => {
       return <label><input type="checkbox" /> {estudiante.name} {estudiante.curso}
       
       </label>
        }) 
      }
      </form>
      </div>
      
    </div>
  );
}

export default App;
