import React, { Fragment, useState } from "react";
import Footer from "../../Footer";
import DatePicker from "react-datepicker";
import {Redirect} from 'react-router-dom'

import { au } from "../../../Firebase";
import "react-datepicker/dist/react-datepicker.css";

const Login = () => {
  
  const [datosRegistro, setDatosRegistro] = useState({
    usuario: "",
    nombre: "",
    apellido: "",
    fecha_nacimiento: new Date(),
    correo: "",
    contrasena: "",
    telefono: "",
  });

  const re = ''

  const onChangeDate = (date) => {
    setDatosRegistro({ fecha_nacimiento: date });
  };

  const oninputChange = (e) => {
    setDatosRegistro({ ...datosRegistro, [e.target.name]: e.target.value });
  };

  au.onAuthStateChanged(function(user) {
    if (user) {
      console.log('Logeado')
       

    } else {
      // No user is signed in.
    }
  });
  

  const onSubmit = async (e) => {
    e.preventDefault();
    const { correo, contrasena } = datosRegistro;

    au.createUserWithEmailAndPassword(correo, contrasena)
      .then((algo) => {
        console.log(algo);
        console.log("Se logró registrar");
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  };

  return (
    <Fragment>
      <div className="container  min-vh-100 d-flex align-items-center justify-content-center flex-column">
      <Redirect to='/profile'/> 
        <p className=" lead h1 text-uppercase pt-5 mt-5  mb-5 text-secondary">
          Registrate para comenzar a publicar
        </p>
        {}
        <form
          className="row w-100 form-group d-flex flex-column "
          onSubmit={onSubmit}
        >
          <input
            type="text"
            class="form-control col-sm-11 offset-sm-1 col-lg-4 rounded-0 offset-lg-4 p-2 mt-3 bg-outline-dark text-dark "
            id="Titulo"
            aria-describedby=""
            name="usuario"
            placeholder="@nombredeusuario"
            onChange={oninputChange}
          />
          <input
            type="text"
            class="form-control col-sm-11 offset-sm-1 col-lg-4 rounded-0 offset-lg-4 p-2 mt-3 bg-outline-dark text-dark "
            id="Titulo"
            aria-describedby=""
            name="nombre"
            placeholder="Nombre"
            onChange={oninputChange}
          />
          <input
            type="text"
            class="form-control col-sm-11 offset-sm-1 col-lg-4 rounded-0 offset-lg-4 p-2 mt-3 bg-outline-dark text-dark "
            id="Titulo"
            aria-describedby=""
            name="Titulo"
            placeholder="apellido"
            onChange={oninputChange}
          />
          <DatePicker
            className="form-control col-sm-11 offset-sm-1 col-lg-4 rounded-0 offset-lg-4 p-2 mt-3 "
            selected={datosRegistro.fecha_Nacimiento}
            onChange={onChangeDate}
          />
          <input
            type="password"
            class="form-control col-sm-11 offset-sm-1   col-lg-4 rounded-0 offset-lg-4 my-2 mt-3 p-2 bg-outline-dark text-dark"
            id="Titulo"
            aria-describedby="emailHelp"
            name="telefono"
            placeholder="telefono"
            onChange={oninputChange}
          />
          <input
            type="text"
            class="form-control col-sm-11 offset-sm-1 col-lg-4 rounded-0 offset-lg-4 p-2 mt-3 bg-outline-dark text-dark "
            id="Titulo"
            aria-describedby=""
            name="correo"
            placeholder="Correo"
            onChange={oninputChange}
          />
          <input
            type="password"
            class="form-control col-sm-11 offset-sm-1   col-lg-4 rounded-0 offset-lg-4 my-2 mt-3 p-2 bg-outline-dark text-dark"
            id="Titulo"
            aria-describedby="emailHelp"
            name="contrasena"
            placeholder="Contraseña"
            onChange={oninputChange}
          />
          <input
            type="submit"
            class="form-control col-sm-11 offset-sm-1   col-lg-4 rounded-0 offset-lg-4  btn btn-outline-dark my-4"
            id="Titulo"
            aria-describedby="emailHelp"
            name="Titulo"
            value="Registrarse"
          />
          <input
            type="submit"
            class="form-control col-sm-11 offset-sm-1   col-lg-4 rounded-0 offset-lg-4  btn btn-outline-dark my-0"
            id="Titulo"
            aria-describedby="emailHelp"
            name="Titulo"
            value="Ingresar con Google"
          />
        </form>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Login;
