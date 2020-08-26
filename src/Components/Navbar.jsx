import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../img/logo.png";
const Navbar = () => {
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
                Recomendaciones
              </NavLink>
            </li>
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
                to={"/dejarconsejo"}
                className="btn btn-dark w-100 mb-2"
                activeClassName="active"
              >
                Recomendar
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
