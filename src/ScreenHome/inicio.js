import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './inicio.css';



function Login() {
  <Link to="/">Ir a Inicio</Link>
  
  const [mail, setMail] = useState()
  const [password, setPassword] = useState()

  const postData = () => {
    fetch ("http://localhost:5001/authpadre/login",{
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify ({
        "email": mail,
        "password": password
      }) ,method: 'POST',
    }) 
    .then(response => response.json()).then(result => {
      document.cookie = "token=" + result.data.idpadres
      console.log(result)
      if (result.message == "Success") {
        window.location.href = "/";
      }
    })
    .then((data) => {
     
    })
  }

  return (
    <div>
      <div className="jugo">
        <h2> // FAST-OUT </h2>
      </div>
      <div className="container">
        <h1>¡Te damos la Bienvenida!</h1>
        <h2> Completa los siguientes campos para inciar sesion en tu cuenta </h2>
        <input type="text" placeholder="Ingresa tu usuario" className="inicio" onChange = {(event) => setMail(event.target.value)} />
        <input type="password" placeholder="Ingresa tu Contraseña" className='psw' onChange = {(event) => setPassword(event.target.value)} />
        <button className="login" onClick = {postData} >Inciar Sesion</button>
      </div>
    </div>
  );
}

export default Login;
