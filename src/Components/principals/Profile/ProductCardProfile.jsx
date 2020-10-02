import React, { useContext } from "react";
import { Link } from "react-router-dom";
import img from "../../../img/fondo.jpg";
import BazarContext from "../../../State/bazar/bazarContext";
const PublicationProfile = ({ data, ruta }) => {
  const { seleccionarProducto, actualizarProducto } = useContext(BazarContext);

  let bordercolor = "border-dark";

  if (data.activa) {
    bordercolor = "border-info";
  }

  const editarPublicacion = () => {
    ruta.push(`/publicacion/${data._id} `);
  };

  const eliminarPublicacion = () => {
    seleccionarProducto(data);
  };
  const pausarPublicacion = () => {
    const productoPausado = {
      ...data,
      activa: false,
    };
    actualizarProducto(productoPausado);
  };
  const activarPublicacion = () => {
    const productoActivado = {
      ...data,
      activa: true,
    };
    actualizarProducto(productoActivado);
  };

  return (
    <div class={`card col-lg-4 p-3 shadow border ${bordercolor}`}>
      <div className="card-img-top d-flex justify-content-center">
        <img src={img} class="img-card-profile rounded-lg" alt="..." />
      </div>
      <div class="card-body d-flex flex-column justify-content-between">
        <h5 class="card-title">
          {data.titulo.slice(0, 25).replace(/^\w/, (c) => c.toUpperCase())}...
          <span className="d-block py-3 text-secondary text-lowercase">
            {data.estado}
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
          <button
            data-target="#exampleModal"
            data-toggle="modal"
            type="button"
            className="btn btn-outline-primary"
            onClick={editarPublicacion}
          >
            Editar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PublicationProfile;
