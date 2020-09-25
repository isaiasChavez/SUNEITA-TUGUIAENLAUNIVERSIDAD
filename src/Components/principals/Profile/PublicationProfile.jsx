import React, { useContext } from "react";
import img from "../../../img/fondo.jpg";
import RentasContext from "../../../State/rentas/rentasContext";

const PublicationProfile = ({ data }) => {
  const {
    guardarRentaActual,
    pausarRenta,
    editarRenta,
    rentaSeleccionada,
  } = useContext(RentasContext);
  console.log(guardarRentaActual);

  const editarPublicacion = () => {
    editarRenta();
  };

  const eliminarPublicacion = () => {
    console.log(data);
    guardarRentaActual(data._id);
    console.log(rentaSeleccionada);

    console.log("Se ejecuto una accion");
  };
  const pausarPublicacion = () => {
    pausarRenta();
  };

  return (
    <div class="card">
      <img src={img} class="card-img-top" alt="..." />
      <div class="card-body d-flex flex-column justify-content-between">
        <h5 class="card-title">
          {data.titulo.slice(0, 25)}...
          <span className="d-block py-3 text-secondary">
            {data.asentamiento} | {data.estado}
          </span>
        </h5>

        <p class="card-text">
          <small class="text-muted">{data.precio}</small>
        </p>
        <div className="btn-group w-100">
          <button
            data-target="#exampleModal"
            data-toggle="modal"
            type="button"
            className="btn btn-outline-dark"
            onClick={editarPublicacion}
          >
            Editar
          </button>
          <button
            data-target="#exampleModal"
            data-toggle="modal"
            type="button"
            className="btn btn-outline-secondary"
            onClick={pausarPublicacion}
          >
            Pausar
          </button>
          <button
            data-target="#exampleModal"
            data-toggle="modal"
            type="button"
            className="btn btn-outline-danger"
            onClick={eliminarPublicacion}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PublicationProfile;
