import './App.css';
import { json, Link } from "react-router-dom";
import { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState();
  useEffect(() => {

  const getData = async () => {
    let token = "token=";
    console.log(token);

    const response = await fetch("http://localhost:5001/estacionamiento/ordenar" , {
      method: "GET",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(id)
    })
      const json = await response.json()
      const data = json
      setData(data)
    return data
  }

    let lol = getData();
    console.log(lol);
  }, []);



  return (
    <div>
      <div>
        <h1>Hola, luca!</h1>
      </div>
      <div className="contenedor">
        <h1>¿A quien quieres retirar?</h1>
        <h2>indica con un tic a quien queres retirar. Aquellos espacios que quedan en blanco no estaran disponibles para el retiro</h2>
        <div>{data && data.map((hijo)=>{

        return (
        <div>
           <label><input type="checkbox" /> {hijo.nombreHijo} {hijo.apellidoHijo} {hijo.año} {hijo.curso} 
       </label> 
      </div>
      )
        })}</div>
        <form>
          <input type="button" className="logearse" value="Solicitar dársena" />
        </form>
      </div>
    </div>
  );
}

export default App;
