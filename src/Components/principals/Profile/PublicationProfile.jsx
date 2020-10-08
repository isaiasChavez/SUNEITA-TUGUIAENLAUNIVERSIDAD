import React, { useContext } from "react";
import { Link } from "react-router-dom";
import img from "../../../img/fondo.jpg";
import Loading from "../../utilities/Loading";
import RentasContext from "../../../State/rentas/rentasContext";
const PublicationProfile = ({ data, ruta }) => {
  const { seleccionarRenta, pausarRenta } = useContext(RentasContext);

  const editarPublicacion = () => {
    ruta.push(`/publicacion/${data._id} `);
  };

  const eliminarPublicacion = () => {
    seleccionarRenta(data);
  };
  const pausarPublicacion = () => {
    const rentaPausada = {
      ...data,
      activa: false,
    };
    pausarRenta(rentaPausada);
  };
  const activarPublicacion = () => {
    const rentaPausada = {
      ...data,
      activa: true,
    };
    pausarRenta(rentaPausada);
  };

  return (
    <div class="card col-lg-4 p-3 shadow border-secondary">
      {data.imagenes ? (
        <div className=" img-fluid publicacionBazar-img ">
          <img
            src={data.imagenes[0].imageUrl}
            className="mx-3 my-3 rounded-lg img-fluid"
            alt=""
          />
        </div>
      ) : (
        <div className="container d-flex justify-content-center align-items-center w-100 ">
          <Loading />
        </div>
      )}
      <div class="card-body d-flex flex-column justify-content-between">
        <h5 class="card-title">
          {data.titulo.slice(0, 25).replace(/^\w/, (c) => c.toUpperCase())}...
          <span className=" text-capitalize d-block py-3 text-secondary">
            {data.asentamiento} | {data.estado}
          </span>
        </h5>

        <p class="card-text">
          <small class="text-muted">{data.precio}</small>
        </p>
        <div className="btn-group w-100">
          {data.activa ? (
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={pausarPublicacion}
            >
              Pausar
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={activarPublicacion}
            >
              Activar
            </button>
          )}

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
