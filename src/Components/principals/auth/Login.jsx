import React, { Fragment, useState, useContext, useEffect } from "react";
import Footer from "../layout/Footer";
import Alert from "../../utilities/Alert";
import AuthContext from "../../../State/autenticacion/authContext";
import AlertasContext from "../../../State/alertas/alertasContext";
const Login = (props) => {
  const authContext = useContext(AuthContext);
  const alertasContext = useContext(AlertasContext);

  const { mostrarAlerta } = alertasContext;

  const { autenticado } = authContext;
  useEffect(() => {
    if (autenticado) {
      props.history.push("/profile");
    }
  }, [autenticado, props.history]);

  const [datosLogin, setDatosLogin] = useState({
    email: "",
    password: "",
  });

  const oninputChange = (e) => {
    setDatosLogin({ ...datosLogin, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (datosLogin.email.trim() === "") {
      mostrarAlerta("El email está vacio", "error");
      return;
    }
    if (datosLogin.password.trim() === "") {
      mostrarAlerta("El password está vacio", "error");
      return;
    }
    authContext.iniciarSesion(datosLogin);
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
            name="email"
            placeholder="Correo"
            onChange={oninputChange}
            value={datosLogin.email}
          />
          <input
            type="password"
            class="form-control col-sm-11 offset-sm-1   col-lg-4 rounded-0 offset-lg-4 my-2 mt-3 p-2 bg-outline-dark text-dark"
            id="Titulo"
            aria-describedby="emailHelp"
            name="password"
            placeholder="Contraseña"
            onChange={oninputChange}
            value={datosLogin.password}
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
