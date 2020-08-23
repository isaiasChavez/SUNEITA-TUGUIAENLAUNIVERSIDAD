import React from "react";
import imagen from "../img/jesus.jpg";
import { Link } from "react-router-dom";
const Renta = ({ renta }) => {
  const {
    titulo,
    tipo,
    publicante,
    descripcion,
    contacto1,
    direccion,
    rango_precios,
    servicios,
    mascotas,
    zona,
  } = renta;

  const badgeColor =
    publicante === "Arrendatario" ? "badge-danger" : "badge-info";

  return (
    <div class="col col-lg-4 pb-0 my-3 ">
      <Link>
        <div class="card  border-0">
          <div className={`badge ${badgeColor} w-25`}>{publicante}</div>

          <img src={imagen} class="card-img-top  rounded" alt="..." />
          <div class="card-body font-weight-light h6 text-muted text-smaller text-rent">
            <p class="text-rent">
              {tipo} | {zona}
            </p>
            <p className="text-rent">{descripcion}</p>
            <p class="font-weight-bold text-rent">{rango_precios} al mes</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Renta;
