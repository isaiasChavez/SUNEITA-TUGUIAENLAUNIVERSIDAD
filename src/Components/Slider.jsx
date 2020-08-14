import React from "react";
import img from "../img/fondo.jpg";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";
import CarrouselItem from "./CarrouselItem";
const Slider = ({ informacion,setpaginaEnPrincipal }) => {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide d-none d-lg-block "
      data-ride="carousel"
      data-touch="true"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" data-interval="5000">
          <img src={img} class="d-block w-100   border-bottom" alt="..." />
          <div class="carousel-caption d-none d-md-block  d-flex h-50 ">
            <h5 className="display-4 mb-5">
              ¿Buscas un cuarto? Ya no regreses un mes antes a buscar.
            </h5>

            <a href="#!" className="btn btn-outline-light btn-block col-lg-6 offset-3 p-3 mt-5 rounded-0 lead"
              onClick={ () =>{
                setpaginaEnPrincipal({
                  consejos: false,
                  rentas: true,
                  dejarConsejo: false,
                });
              }}
            >
              {" "}
              Revisa informacion de sitios para rentar en Acatlima y sus
              alrededores.
            </a>
          </div>
        </div>

        <CarrouselItem
          texto={"Ahorrate problemas, escucha a los que ya estamos aquí."}
          boton={" Deja un aporte " }
          setpaginaEnPrincipal={setpaginaEnPrincipal}
        />
        <CarrouselItem
          texto={
            "Ya no te desgastes caminando todo el pueblo buscando habitaciones"
          }
          setpaginaEnPrincipal={setpaginaEnPrincipal}
        />
      </div>

      <a
        class="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
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
