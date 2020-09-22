import React from "react";
import imagen from "../../../img/jesus.jpg";
import { Link } from "react-router-dom";
const Renta = ({ renta }) => {
  const {
    _id,
    titulo,
    datos,
    tipo,
    publicante,
    descripcion,
    zona,
    precio,
  } = renta;

  return (
    <div class="col col-lg-4 pb-0 my-3 ">
      <Link to={`/publicacion/${_id}`}>
        <div class="card  border-0">
          <img src={imagen} class="card-img-top  rounded" alt="..." />
          <div class="card-body font-weight-light h6 text-muted text-smaller text-rent">
            <p class="text-rent">
              {tipo} | {zona}
            </p>
            <p className="text-rent">{descripcion}</p>
            <p class="font-weight-bold text-rent">{precio} al mes</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Renta;
