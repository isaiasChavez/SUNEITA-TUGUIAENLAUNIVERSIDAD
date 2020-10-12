import React from "react";
import img from "../../../img/Slider/callesdeoaxaca-large.jpg";
import paisaje from "../../../img/Slider/paisaje-medium.jpg";
import cielo from "../../../img/Slider/cielo.jpg";
import CarrouselItem from "./CarrouselItem";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide isSlider d-none d-lg-block "
      data-ride="carousel"
      data-touch="true"
    >
      <div class="carousel-inner isSlider">
        <div class="carousel-item active isSlider bg-dark" data-interval="5000">
          <img
            src={img}
            class="d-block w-100 img-fluid  border-bottom img-opacity"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block  d-flex h-50 ">
            <h5 className="display-4 mb-5 text-shadow">
              ¿Buscas un cuarto? Ya no regreses un mes antes a buscar.
            </h5>

            <Link
              to={"/rentas"}
              className="btn text-shadow btn-outline-light btn-block col-lg-6 offset-3 p-3 mt-5 rounded-0   "
            >
              <span className="">
                Revisa informacion de sitios para rentar en Acatlima y sus
                alrededores.
              </span>
            </Link>
          </div>
        </div>

        <CarrouselItem
          texto={"Ahorrate problemas, escucha a los que ya estamos aquí."}
          boton={"Leer los consejos "}
          link={"/consejos"}
          img={cielo}
        />
        <CarrouselItem
          texto={
            "Ya no te desgastes caminando todo el pueblo buscando habitaciones"
          }
          boton={"Leer los consejos "}
          link={"/consejos"}
          img={paisaje}
        />
      </div>

      <a
        class="carousel-control-prev isSlider"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next isSlider"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Slider;
