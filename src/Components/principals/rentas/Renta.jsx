import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import RentasContext from "../../../State/rentas/rentasContext";
const Renta = ({ renta }) => {
  const { obtenerImagenesRenta } = useContext(RentasContext);
  const [imagen, setimagen] = useState(null);

  const { _id, titulo, tipoCuarto, asentamiento, precio } = renta;
  return (
    <div class="col col-12 col-md-4 col-lg-4 pb-0 my-3 ">
      <Link to={`/publicacion/${_id}`}>
        <div class="card  border-0">
          {imagen ? (
            <img
              src={imagen[0].imageUrl}
              class="card-img-top  rounded"
              alt="..."
            />
          ) : null}

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
