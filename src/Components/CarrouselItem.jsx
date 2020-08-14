import React from "react";
import img from "../img/fondo.jpg";

const CarrouselItem = ({ texto, boton,setpaginaEnPrincipal }) => {
  return (
    <div class="carousel-item" data-interval="5000">
      <img src={img} class="d-block w-100  h-50 border-bottom" alt="..." />

      <div class="carousel-caption d-none d-md-block  d-flex h-50 ">
        <h5 className="display-4 ">{texto}</h5>
        {boton ? (
          <a
            href="#!"
            className="btn btn-outline-light btn-block  mt-5  rounded-0 lead"
            onClick={()=>{
              setpaginaEnPrincipal({
                consejos: false,
                rentas: true,
                dejarConsejo: false,
              });
            }
              
            }
          >
            {boton}
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default CarrouselItem;
