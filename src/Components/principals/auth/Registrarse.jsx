import React, { Fragment, useState,useContext } from "react";
import Footer from "../../Footer";
import AuthContext from "../../../State/authContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Registrarse = () => {
  const { authData } = useContext(AuthContext);

  const [datosRegistro, setDatosRegistro] = useState({
    usuario: "",
    nombre: "",
    apellido: "",
    fecha_nacimiento: new Date(),
    correo: "",
    contrasena: "",
    telefono: "",
  });

  

  const onChangeDate = (date) => {
    setDatosRegistro({...datosRegistro, fecha_nacimiento: date });
  };

  const oninputChange = (e) => {
    setDatosRegistro({ ...datosRegistro, [e.target.name]: e.target.value });
  };


  

  const onSubmit = async (e) => {
    e.preventDefault();
    const { correo, contrasena } = datosRegistro;
    authData.crearUsuarioEIngresar(correo,contrasena,datosRegistro)
    


    
  };

  return (
    <Fragment>
      <div className="container  min-vh-100 d-flex align-items-center justify-content-center flex-column">
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
            name="apellido"
            placeholder="apellido"
            onChange={oninputChange}
          />
          <DatePicker
            className="form-control col-sm-11 offset-sm-1 col-lg-4 rounded-0 offset-lg-4 p-2 mt-3 "
            selected={datosRegistro.fecha_Nacimiento}
            onChange={onChangeDate}
          />
          <input
            type="number"
            class="form-control col-sm-11 offset-sm-1   col-lg-4 rounded-0 offset-lg-4 my-2 mt-3 p-2 bg-outline-dark text-dark"
            id="telefono"
            aria-describedby="emailHelp"
            name="telefono"
            placeholder="Telefono"
            onChange={oninputChange}
          />
          <input
            type="email"
            class="form-control col-sm-11 offset-sm-1 col-lg-4 rounded-0 offset-lg-4 p-2 mt-3 bg-outline-dark text-dark "
            id="correo"
            aria-describedby=""
            name="correo"
            placeholder="Correo"
            onChange={oninputChange}
          />
          <input
            type="password"
            class="form-control col-sm-11 offset-sm-1   col-lg-4 rounded-0 offset-lg-4 my-2 mt-3 p-2 bg-outline-dark text-dark"
            id="pass"
            aria-describedby="emailHelp"
            name="contrasena"
            placeholder="Contraseña"
            onChange={oninputChange}
          />
          <input
            type="password"
            class="form-control col-sm-11 offset-sm-1   col-lg-4 rounded-0 offset-lg-4 my-2 mt-3 p-2 bg-outline-dark text-dark"
            id="pass"
            aria-describedby="emailHelp"
            name="contrasena"
            placeholder="Repita la contraseña"
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

export default Registrarse;
