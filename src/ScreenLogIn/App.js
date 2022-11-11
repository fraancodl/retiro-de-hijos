import './App.css';
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react';

function App() {

  const [data, setData] = useState();
  console.log(data)
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  const getData = () => {
    let id = getCookie("LoggedId")

    fetch ("http://localhost:5001/estacionamiento/ordenar", {
      method:"POST",
      mode:"cors",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(id)
    })  
    .then((response) => {
      setData(response);
      console.log(response);
      return response.text();
      
    })
    .then((data) => {
    })
  }

  useEffect(() => {
    getData();
    console.log(data);
  },[]);

  // getData()


  return(
    <div>
      <div>
      <h1>Hola, luca!</h1>
      </div>
      <div className="contenedor">
        <h1>¿A quien quieres retirar?</h1>
        <h2>indica con un tic a quien queres retirar. Aquellos espacios que quedan en blanco no estaran disponibles para el retiro</h2>
        {/* <p>{data}</p> */}
        <form>
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="button" className="logearse" value="Solicitar dársena"/>
        </form>
      </div>
    </div>
  );
}

export default App;