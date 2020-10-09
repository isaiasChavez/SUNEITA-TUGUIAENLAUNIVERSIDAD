import React, { useEffect } from "react";
import ScrollToTopOnMount from "../../../routes/ScrollToTopOnMount";

const FormConfirm = ({ dataFormulario, route, publicar, setProgreso }) => {
  useEffect(() => {
    setProgreso(99);
  }, []);
  const { servicios, zonasDelCuarto } = dataFormulario;

  if (dataFormulario.titulo === "") {
    route.push("/crearPublicacion");
  }

  const confirmarPublicacion = () => {
    publicar();
    route.push("/");
  };
  return (
    <>
      <div className="container min-vh-100  d-flex flex-column justify-content-center w-100 mt-5 pt-5 ">
        <ScrollToTopOnMount />
        <div className="row w-100 ">
          <h2 className="text-center ">¿Esta información es correcta?</h2>
        </div>
        <div className="row px-2">
          <ul class="list-group list-group-flush mx-4 mb-4">
            <li class="list-group-item">
              <span className="lead text-secondary d-block">Titulo</span>
              {dataFormulario.titulo}
            </li>
            <li class="list-group-item">
              <span className="lead text-secondary d-block">Descripcion</span>
              {dataFormulario.descripcion}
            </li>
            <li class="list-group-item">
              <span className="lead text-secondary d-block">
                Tipo de cuarto
              </span>
              {dataFormulario.tipoCuarto}
            </li>
            <li class="list-group-item">
              <span className="lead text-secondary d-block">Precio</span>
              {dataFormulario.precio}
            </li>

            <li class="list-group-item">
              <span className="lead text-secondary d-block">Deposito</span>
              {dataFormulario.deposito}
            </li>
          </ul>
        </div>
        <div className="row mt-5 px-3">
          <h2 className="lead text-secondary">Servicios</h2>
          <div className=" w-100 row-cols-lg-2 row">
            {servicios.aguaCRef ? (
              <div className="col p-2  d-flex justify-content-start">
                <span class="material-icons d-inline px-3">hot_tub</span>
                <p className="text-muted d-inline">Agua caliente</p>
              </div>
            ) : null}
            {servicios.wfRef ? (
              <div className="col p-2 d-flex justify-content-start">
                <span class="material-icons d-inline px-3">wifi</span>
                <p className="text-muted d-inline">Wifi</p>
              </div>
            ) : null}
            {servicios.pilCRef ? (
              <div className="col p-2 d-flex justify-content-start">
                <span class="material-icons  d-inline px-3">
                  cleaning_services
                </span>
                <p className="text-muted d-inline">
                  Productos Iniciales de limpieza
                </p>
              </div>
            ) : null}
            {servicios.escCRef ? (
              <div className="col d-flex justify-content-start">
                <span class="material-icons d-inline px-3">computer</span>
                <p className="text-muted d-inline">Mesa para trabajar</p>
              </div>
            ) : null}
            {servicios.ganCRef ? (
              <div className="col d-flex justify-content-start">
                <span class="material-icons d-inline px-3">house</span>
                <p className="text-muted d-inline">Ganchos para ropa</p>
              </div>
            ) : null}
            {servicios.colCRef ? (
              <div className="col d-flex justify-content-start">
                <span class="material-icons d-inline px-3">single_bed</span>
                <p className="text-muted d-inline">Colchón</p>
              </div>
            ) : null}
          </div>
        </div>
        <div className="row mt-5 px-3">
          <h2 className="lead text-secondary">Zonas Accesibles</h2>
          <div className=" w-100 row-cols-lg-2 row">
            {zonasDelCuarto.zltRef ? (
              <div className="col ">
                <p className="text-muted">Zona para lavar trastes</p>
              </div>
            ) : null}
            {zonasDelCuarto.zlrRef ? (
              <div className="col">
                <p className="text-muted">Zona para lavar ropa</p>
              </div>
            ) : null}
            {zonasDelCuarto.zcRef ? (
              <div className="col">
                <p className="text-muted">Zonas comunes</p>
              </div>
            ) : null}
            {zonasDelCuarto.ztRef ? (
              <div className="col">
                <p className="text-muted">Tendedero</p>
              </div>
            ) : null}
            {zonasDelCuarto.cochRef ? (
              <div className="col">
                <p className="text-muted">Cochera</p>
              </div>
            ) : null}
            {zonasDelCuarto.balconRef ? (
              <div className="col">
                <p className="text-muted">Balcón</p>
              </div>
            ) : null}
            {zonasDelCuarto.cocinaRef ? (
              <div className="col">
                <p className="text-muted">Cocina</p>
              </div>
            ) : null}
          </div>
        </div>
        <div className="row my-5 justify-content-center px-4">
          <button
            className="btn btn-outline-dark py-2 btn-block"
            onClick={confirmarPublicacion}
          >
            Todo está bien, publicar
          </button>
        </div>
      </div>
    </>
  );
};

export default FormConfirm;
