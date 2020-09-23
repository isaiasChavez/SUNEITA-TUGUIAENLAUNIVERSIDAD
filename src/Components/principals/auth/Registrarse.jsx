import React, { Fragment, useState, useContext, useEffect } from "react";
import Footer from "../layout/Footer";
import AuthContext from "../../../State/autenticacion/authContext";

import "react-datepicker/dist/react-datepicker.css";

const Registrarse = (props) => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (authContext.autenticado) {
      props.history.push("/");
    }
  }, [authContext.autenticado, props.history]);

  const initialState = {
    username: "",
    name: "",
    lastname: "",
    email: "",
    password: "",
    passwordConfirmar: "",
  };
  const [datosRegistro, setDatosRegistro] = useState(initialState);

  const {
    username,
    name,
    lastname,
    email,
    password,
    passwordConfirmar,
  } = datosRegistro;

  const oninputChange = (e) => {
    setDatosRegistro({ ...datosRegistro, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (
      username.trim() === "" ||
      name.trim() === "" ||
      lastname.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      passwordConfirmar.trim() === ""
    ) {
      alert("No puedes dejar campos vacios");
      return;
    }
    if (password.length < 6) {
      alert("Password debe ser de al menos 6 caracteres");
      return;
    }
    if (password !== passwordConfirmar) {
      alert("Las contraseñas no coinciden");
    }

    try {
      const { passwordConfirmar, lastname, ...rest } = datosRegistro;
      const ok = await authContext.registrarUsuario(rest);
      console.log(ok);
      if (ok) {
        setDatosRegistro(initialState);
      }
    } catch (error) {
      console.log(error);
    }
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
            name="username"
            placeholder="@nombredeusuario"
            onChange={oninputChange}
            value={datosRegistro.username}
          />
          <input
            type="text"
            class="form-control col-sm-11 offset-sm-1 col-lg-4 rounded-0 offset-lg-4 p-2 mt-3 bg-outline-dark text-dark "
            id="Titulo"
            aria-describedby=""
            name="name"
            placeholder="Nombre"
            onChange={oninputChange}
            value={datosRegistro.name}
          />
          <input
            type="text"
            class="form-control col-sm-11 offset-sm-1 col-lg-4 rounded-0 offset-lg-4 p-2 mt-3 bg-outline-dark text-dark "
            id="Titulo"
            aria-describedby=""
            name="lastname"
            placeholder="apellido"
            onChange={oninputChange}
            value={datosRegistro.lastname}
          />

          <input
            type="email"
            class="form-control col-sm-11 offset-sm-1 col-lg-4 rounded-0 offset-lg-4 p-2 mt-3 bg-outline-dark text-dark "
            id="correo"
            aria-describedby=""
            name="email"
            placeholder="Correo"
            onChange={oninputChange}
            value={datosRegistro.email}
          />
          <input
            type="password"
            class="form-control col-sm-11 offset-sm-1   col-lg-4 rounded-0 offset-lg-4 my-2 mt-3 p-2 bg-outline-dark text-dark"
            id="pass"
            aria-describedby="emailHelp"
            name="password"
            placeholder="Contraseña"
            onChange={oninputChange}
            value={datosRegistro.password}
          />
          <input
            type="password"
            class="form-control col-sm-11 offset-sm-1   col-lg-4 rounded-0 offset-lg-4 my-2 mt-3 p-2 bg-outline-dark text-dark"
            id="pass"
            aria-describedby="emailHelp"
            name="passwordConfirmar"
            placeholder="Repita la contraseña"
            onChange={oninputChange}
            value={datosRegistro.passwordConfirmar}
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
