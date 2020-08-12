import React from "react";
import imagen from "../img/jesus.jpg";
const Renta = ({ renta }) => {
  const {
    titulo,
    descripcion,
    contacto1,
    direccion,
    rango_precios,
    servicios,
    mascotas
  } = renta;
  return (
    <div class="col mt-4 mb-4">
      <div class="card">
        <img src={imagen} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{titulo}</h5>
          <p class="card-text">{descripcion}</p>
        </div>
        <div class="card-footer">
          <p class="card-text">
            Número de contacto:
            <span className="font-weight-light text-dark">{contacto1} </span>
          </p>
          <p class="card-text">
            Dirección:
            <span className="font-weight-light text-dark">{direccion}</span>
          </p>
          <p class="card-text">
            Rango de precios:
            <span className="font-weight-light text-dark ml-3">
              {rango_precios}
            </span>
          </p>
          <p class="card-text">
            <span className="">Servicios:</span>
            <ul class="list-group list-group-flush">
              {servicios.map(servicio =>(
                <li class="list-group-item p-2">{servicio}</li>
              ))}

             
            </ul>
          </p>
          <p class="card-text">
            Aceptan mascotas:
            <span className="font-weight-light text-dark ml-3">
              {mascotas}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Renta;
