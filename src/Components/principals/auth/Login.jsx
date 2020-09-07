import React, { Fragment, useState, useContext } from "react";
import AuthContext from "../../../State/authContext";
import Footer from "../../Footer";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { authData } = useContext(AuthContext);
  const configNotification = {
    position: "top-right",
    autoClose: 3500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  };

  const [datosLogin, setDatosLogin] = useState({
    correo: "",
    contrasena: "",
  });

  const oninputChange = (e) => {
    setDatosLogin({ ...datosLogin, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { correo, contrasena } = datosLogin;
    
    if (correo.trim() === '' || contrasena.trim() ==='') {
      toast("Ingresa campos validos!", configNotification);
      return
    }
    authData.ingresarConCorreo(correo, contrasena);
  };

  return (
    <Fragment>
      <div className="container  min-vh-100 d-flex align-items-center justify-content-center flex-column">
        <p className=" lead h1 text-uppercase pt-5 mt-5  mb-5 text-secondary">
          Iniciar Sesion
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
            value="Iniciar Sesión"
          />
        </form>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Login;
