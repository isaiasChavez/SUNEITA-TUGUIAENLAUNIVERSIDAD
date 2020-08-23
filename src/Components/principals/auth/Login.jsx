import React, { Fragment } from "react";
import Footer from "../../Footer";
const Login = () => {
  return (
    <Fragment>
      <div className="container  min-vh-100 d-flex align-items-center justify-content-center flex-column">
        <p className=" lead h1 text-uppercase  mb-5 text-secondary">Iniciar Sesion </p>
        <form className="row w-100">
          <input
            type="text"
            class="form-control col-sm-11 offset-sm-1 col-lg-4 rounded-0 offset-lg-4 p-4 bg-outline-dark text-white "
            id="Titulo"
            aria-describedby=""
            name="Titulo"
            placeholder="Usuario"
          />
          <input
            type="password"
            class="form-control col-sm-11 offset-sm-1   col-lg-4 rounded-0 offset-lg-4 my-4 p-4 bg-outline-dark text-white"
            id="Titulo"
            aria-describedby="emailHelp"
            name="Titulo"
            placeholder="Contraseña"
          />
          <input
            type="submit"
            class="form-control col-sm-11 offset-sm-1   col-lg-4 rounded-0 offset-lg-4  btn btn-outline-dark my-4"
            id="Titulo"
            aria-describedby="emailHelp"
            name="Titulo"
            value="Ingresar"
          />
        </form>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Login;
