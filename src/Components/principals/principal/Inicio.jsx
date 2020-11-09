import React, { Fragment } from "react";
import ScrollToTopOnMount from "../../routes/ScrollToTopOnMount";

import Hero from "../layout/Hero";
import Slider from "../layout/Slider";

import studentBackground from "../../../img/shopping.svg";
import studentBackground2 from "../../../img/buildings.svg";
import BazarImage from "../../../img/team.svg";
import { Link } from "react-router-dom";
import Carrusel from "../../principals/rentas/Carrusel";
const Inicio = () => {
  return (
    <Fragment>
      <ScrollToTopOnMount />
      <div className=" min-vh-100">
        <Slider />
        <Hero
          clase="d-lg-none"
          principal="Busca un cuarto"
          secondary="Vende lo que ya no usas"
          button="Buscar un cuarto"
          link={"rentas"}
        />
        <div className="container">
          <div className="infoInicio row d-flex justify-content-around text-center mt-5">
            <div className=" lead  col-sm-10 offset-sm-1 col-lg-3 m-4 ">
              <i class="material-icons icon ">emoji_people</i>
              <p>
                Ayuda a un utemita a vivir en un buen lugar los próximos años
              </p>
            </div>
            <div className=" lead col-lg-3 m-4  ">
              <i class="icon material-icons">house</i>
              <p> Publica tu alojamiento para que todos lo vean</p>
            </div>
            <div className=" lead col-lg-3 m-4">
              <i class="material-icons icon">engineering</i>
              <p> Consigue un mejor lugar para vivir tus años de carrera</p>
            </div>
          </div>
        </div>

        <div className="container-fluid pt-5 contenerdor-principal px-5 ">
          <div className="row d-flex justify-content-around my-5 ">
            <div class="card  text-white  rounded-lg col-12 col-md-5 mt-3 col-lg-4 text-center shadow p-2">
              <Link className="" to={"/consejos"}>
                <div className="w-100">
                  <img
                    src={studentBackground}
                    class="card-img img-fluid fit  "
                    alt="..."
                  />
                </div>
                <div class="card-body text-dark">
                  <div className="card-title mb-3">
                    <h2 class="card-title h2 text-uppercase ">Bazar</h2>
                  </div>
                  <p class="card-text lead">
                    Publica los objetos que ya no usas, ya sea porque terminaste
                    tus años de estudio o porque crees ya no necesitarlos.
                  </p>
                </div>
              </Link>
            </div>
            <div class="card text-white rounded-lg  col-12 col-md-5  mt-3 col-lg-4 text-center shadow p-2">
              <Link className=" rounded-lg" to={"/rentas"}>
                <img
                  src={studentBackground2}
                  class="card-img img-fluid "
                  alt="..."
                />
                <div class="card-body text-dark ">
                  <div className="card-title mb-3">
                    <h2 class="card-title h2 text-uppercase ">
                      Renta de cuartos
                    </h2>
                  </div>
                  <p class="card-text lead">
                    Recibe información de directamente de las personas que
                    rentan cuartos cerca de la universidad
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="min-vh-100 py-5 container-fluid px-5">
          <div class="card  mt-5 pt-5 border-0 ">
            <div class="row d-flex flex-column flex-md-row">
              <div class="col-md-5">
                <img
                  src={BazarImage}
                  class=" img-fluid"
                  alt="imagen del bazar"
                />
              </div>
              <div class="col-md-7">
                <div class="card-body d-flex flex-column  justify-content-around">
                  <h5 class="card-title d-none d-md-block display-4   mx-4 text-muted text-right">
                    Vende o dona aquello que ya no usas
                  </h5>
                  <h5 class="card-title d-md-none display-5 h2 text-muted text-wrap  text-center">
                    Vende algo para tu suneita del pasado
                  </h5>
                  <p class="card-text text-center my-4 lead text-muted">
                    Quizá tienes algún mueble, un libro o material, aquello que
                    ya no uses por cualquier razón, seguro que a alguien le será
                    útil.
                  </p>
                  <Link
                    to={"/consejos"}
                    className="btn btn-outline-dark rounded-0 btn-lg w-100 align-self-end font-weight-light mt-4 "
                  >
                    Ir al bazar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Inicio;
