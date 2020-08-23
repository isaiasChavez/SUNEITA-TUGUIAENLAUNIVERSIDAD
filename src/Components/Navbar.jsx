import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top pb-0 navigation ">
        <Link to={"/"} className="navbar-brand my-1">
          <img src={Logo} alt="..." class="img-thumbnail logo" />{" "}
        </Link>
        <Link to={"/"} className="navbar-brand mr-0">
          <span className="display-5 text-dark">SUNEITA</span>
        </Link>

        <Link to={"/"} className="nav-link  "></Link>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="px-1">
              <Link to={"/"} className="nav-link pb-3">
                Inicio
              </Link>
            </li>
            <li className="px-1">
              <a
                class="nav-link  pb-3"
                data-toggle="modal"
                data-target="#staticBackdrop"
                href="#!"
              >
                Acerca de
              </a>
            </li>
            <li class="px-1">
              <Link to={"/rentas"} className="nav-link active pb-3">
                Renta un cuarto
              </Link>
            </li>

            <li class="px-1">
              <Link to={"/consejos"} className="nav-link active pb-3">
                Recomendaciones
              </Link>
            </li>

            <li class="px-1">
              <Link to={"/dejarconsejo"} className="btn btn-dark w-100 mb-2">
                Recomendar
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
