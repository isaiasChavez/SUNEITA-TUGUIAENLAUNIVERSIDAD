import React from "react";
import imagen from "../../../img/jesus.jpg";
import { Link } from "react-router-dom";
const Renta = ({ renta }) => {
  const { _id, titulo, tipoCuarto, asentamiento, precio } = renta;
  return (
    <div class="col col-12 col-md-4 col-lg-4 pb-0 my-3 ">
      <Link to={`/publicacion/${_id}`}>
        <div class="card  border-0">
          <img src={imagen} class="card-img-top  rounded" alt="..." />
          <div class="card-body font-weight-light h6 text-muted text-rent">
            <p class="text-rent py-3">
              <span className="text-capitalize font-weight-bolder  font-weight-bold text-primary">
                {tipoCuarto}
              </span>{" "}
              | {asentamiento}
            </p>
            <p className="text-rent">{titulo.slice(0, 50)}...</p>
            <p class="font-weight-bold text-rent my-3">{precio} al mes</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Renta;
