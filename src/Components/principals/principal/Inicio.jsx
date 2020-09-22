import React, { Fragment } from "react";
import Hero from "../layout/Hero";
import Slider from "../layout/Slider";
import Footer from "../layout/Footer";
import imgJumbotron from "../../../img/studentBackground.jpg";

import studentBackground from "../../../img/jesus.jpg";

import studentBackground2 from "../../../img/studentBackground2.jpg";
import { Link } from "react-router-dom";
const Inicio = () => {
  return (
    <Fragment>
      <div className=" min-vh-100">
        <Slider />
        <Hero
          clase="d-md-none"
          principal="Busca un cuarto"
          secondary="Recibe una recomendación"
          button="Buscar un cuarto"
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

        <div className="container-fluid pt-5 contenerdor-principal ">
          <div className="row d-flex justify-content-around my-5 ">
            <div class="card  text-white col-12 mt-3 col-lg-4 text-center shadow p-2">
              <Link to={"/consejos"}>
                <img
                  src={studentBackground}
                  class="card-img img-fluid card-inicio imagep "
                  alt="..."
                />
                <div class="card-body text-dark">
                  <h5 class="card-title lead">Publicaciones de estudiantes</h5>
                  <p class="card-text">
                    Recibe datos de la experiencia de los estudiantes en los
                    diversos alojamientos y muchas cosas más que puedes hacer en
                    la universidad
                  </p>
                </div>
              </Link>
            </div>
            <div class="card text-white  col-12  mt-3 col-lg-4 text-center shadow p-2">
              <Link to={"/rentas"}>
                <img
                  src={studentBackground2}
                  class="card-img img-fluid card-inicio imagep"
                  alt="..."
                />
                <div class="card-body text-dark ">
                  <h5 class="card-title lead ">Publicaciones de vivienda</h5>
                  <p class="card-text">
                    Recibe información de directamente de las personas que
                    rentan cuartos cerca de la universidad
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="min-vh-100 py-5 container-fluid px-5">
          <div class="card mb-3 mt-5 pt-5 border-0">
            <div class="row no-gutters">
              <div class="col-md-5">
                <img
                  src={imgJumbotron}
                  class="card-img shadow img-thumbnail"
                  alt="..."
                />
              </div>
              <div class="col-md-7">
                <div class="card-body d-flex flex-column align-items-end  h-75 justify-content-around">
                  <h5 class="card-title display-4 mx-4 text-muted text-right">
                    Publica una recomendación para tu Suneita del pasado
                  </h5>
                  <p class="card-text text-right lead text-muted">
                    Publica el lugar donde recomiendas vivir, consejos de
                    supervivencia, ¿que hacer después de un examen estresante?
                  </p>
                  <Link
                    to={"/consejos"}
                    className="btn btn-outline-dark rounded-0 btn-lg w-50 align-self-end font-weight-light  "
                  >
                    Ver recomiendaciones
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </Fragment>
  );
};

export default Inicio;
