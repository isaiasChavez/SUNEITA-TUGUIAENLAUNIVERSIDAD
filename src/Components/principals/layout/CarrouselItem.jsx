import React from "react";
import img from "../../../img/fondo.jpg";
import { Link } from "react-router-dom";
const CarrouselItem = ({ texto, boton, link }) => {
  return (
    <div class="carousel-item isSlider" data-interval="5000">
      <img src={img} class="d-block w-100 border-bottom" alt="..." />

      <div class="carousel-caption d-none d-md-block  d-flex h-50 ">
        <h5 className="display-4 ">{texto}</h5>
        {boton ? (
          <Link
            to={link}
            className="btn btn-outline-light btn-block col-lg-6 offset-3 p-3 mt-5 rounded-0 lead  "
          >
            {boton}
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default CarrouselItem;
