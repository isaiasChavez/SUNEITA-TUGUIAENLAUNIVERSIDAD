import React, { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Alert from "../../utilities/Alert";

import Logo from "../../../img/logo.png";

import AuthContext from "../../../State/autenticacion/authContext";

const Navbar = (props) => {
  const authContext = useContext(AuthContext);
  const { autenticado, cerrarSesion } = authContext;

  useEffect(() => {}, [autenticado]);
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top pb-0 navigation ">
        <NavLink
          to={"/"}
          className="navbar-brand my-1"
          activeClassName="active"
        >
          <img src={Logo} alt="..." class="img-thumbnail logo" />{" "}
        </NavLink>
        <Link to={"/"} className="navbar-brand mr-0">
          <span className="display-5 text-dark">SUNEITA</span>
        </Link>

        <Link to={"/"} className="nav-link  "></Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="px-1">
              <NavLink
                to={"/rentas"}
                className="nav-link pb-3"
                activeClassName="active"
              >
                Renta un cuarto
              </NavLink>
            </li>

            <li class="px-1">
              <NavLink
                to={"/consejos"}
                className="nav-link  pb-3"
                activeClassName="active"
              >
                Bazar
              </NavLink>
            </li>
            {autenticado ? (
              <div className="d-flex">
                <li class="px-1">
                  <NavLink
                    to={"/profile"}
                    className="nav-link  pb-3"
                    activeClassName="active"
                  >
                    Perfil
                  </NavLink>
                </li>
                <li class="px-1">
                  <NavLink
                    to={"/crearPublicacion"}
                    className="btn btn-dark w-100 mb-2"
                    activeClassName="active"
                  >
                    Publicar
                  </NavLink>
                </li>
                <li class="px-1">
                  <NavLink
                    onClick={cerrarSesion}
                    to={"/"}
                    className="btn px-0  w-100 mb-2"
                    activeClassName="active"
                  >
                    Cerrar Sesión
                  </NavLink>
                </li>
              </div>
            ) : (
              <div className="d-flex">
                <li class="px-1">
                  <NavLink
                    to={"/ingresar"}
                    className="btn  w-100 mb-2"
                    activeClassName="active"
                  >
                    Ingresar
                  </NavLink>
                </li>
                <li class="px-1">
                  <NavLink
                    to={"/registrarse"}
                    className="btn  w-100 mb-2"
                    activeClassName="active"
                  >
                    Registrarse
                  </NavLink>
                </li>
              </div>
            )}
          </ul>
        </div>
      </nav>
      <Alert />
    </>
  );
};

export default Navbar;
