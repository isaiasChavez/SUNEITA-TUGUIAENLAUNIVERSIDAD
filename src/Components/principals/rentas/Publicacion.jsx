import React, { Fragment, useState, useContext, useEffect } from "react";

import Mapa from "../../utilities/Maps/Mapa";
import ScrollToTopOnMount from "../../routes/ScrollToTopOnMount";
import Loading from "../../utilities/Loading";
import Carrusel from "./Carrusel";
import { Link, useRouteMatch, useParams } from "react-router-dom";

import RentasContext from "../../../State/rentas/rentasContext";

const Publicacion = () => {
  let match = useRouteMatch();
  const {
    rentaSeleccionada,
    guardarRentaActual,
    obtenerImagenesRenta,
  } = useContext(RentasContext);

  const [imagenesRenta, setImagenesRenta] = useState(null);

  const { idpublicacion } = useParams();
  useEffect(() => {
    guardarRentaActual(idpublicacion);
    obtenerImagenesRenta(idpublicacion)
      .then((data) => {
        const { images } = data.data.imagenes[0];
        setImagenesRenta(images);
      })
      .catch((error) => {
        console.log("Hubo un error al obtener la data ", error);
      });
  }, [idpublicacion]);

  if (!rentaSeleccionada) {
    return null;
  }

  const {
    titulo,
    username,
    luzincluida,
    medidascuarto,
    soloestudiantes,
    direccion,
    ciudad,
    estado,
    descripcion,
    zonasDelCuarto,
    tipo,
    zona,
    tipobano,
    tipocontrato,
    servicios,
    numeroexterior,
    precio,
    mascotas,
    deposito,
    contacto,
  } = rentaSeleccionada;

  const linkAWhatsapp = `https://api.whatsapp.com/send?phone=52${contacto}&text=Hola%20Me%20me%20interesa%20esta%20publicacion%20|%20${titulo}%20|`;

  return (
    <Fragment>
      <ScrollToTopOnMount />
      <div class="container pt-5">
        <div className="row pt-5">
          <h2 className="d-block w-100 text-capitalize my-5">{titulo}</h2>
          <div className=" d-block mb-3">
            <span className="lead  text-muted text-smaller">{zona}</span>
          </div>
        </div>
        <div className="row">
          <Carrusel arrayImagenes={imagenesRenta} />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row d-flex flex-column">
                <h3 className="font-weight-bold pt-5">
                  {tipo} | Arrendador: {username}
                </h3>
              </div>
              <hr />
              <div className="row">
                <ul className="list-group w-100">
                  {tipobano == "privado" ? (
                    <li className="list-group-item">
                      Baño propio
                      <p className="text-muted">
                        Contaras con tu propio baño dentro de la habitación
                      </p>
                    </li>
                  ) : null}

                  <li className="list-group-item">
                    {medidascuarto.ancho} x {medidascuarto.largo} m2
                    <p className="text-muted">
                      La habitación cuenta con estas medidas de ancho y largo
                    </p>
                  </li>
                  {soloestudiantes ? (
                    <li className="list-group-item">
                      Solo estudiantes
                      <p className="text-muted">
                        En el edificio viven estudiantes exclusivamente
                      </p>
                    </li>
                  ) : null}
                  {/* {datos.camaras ? 
                    <li className="list-group-item">
                      Camaras de vigilancia
                      <p className="text-muted">
                        El edificio cuenta con esta medida de seguridad
                      </p>
                    </li>
                   : null} */}
                  {luzincluida ? (
                    <li className="list-group-item">
                      Pago de luz incluido
                      <p className="text-muted">
                        El precio de la luz viene incluido el la renta
                      </p>
                    </li>
                  ) : null}
                  {zonasDelCuarto.cocinaRef ? (
                    <li className="list-group-item">
                      Cocina Integrada
                      <p className="text-muted">
                        El departamento cuenta con una cocina en el interior
                      </p>
                    </li>
                  ) : null}
                </ul>
              </div>
              <hr />
              <div className="row py-5">
                <h2 className="lead font-weight-bolder w-100">Descripcion</h2>
                <p className="py-3">{descripcion}</p>
              </div>
              {/* SERVICIOS */}
              <div className="row mb-5">
                <h2 className="lead font-weight-bolder">Servicios</h2>
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
                      <span class="material-icons d-inline px-3">
                        single_bed
                      </span>
                      <p className="text-muted d-inline">Colchón</p>
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="row">
                <h2 className="lead font-weight-bolder">Zonas Accesibles</h2>
                <div className=" w-100 row-cols-lg-2 row">
                  {zonasDelCuarto.zltRef ? (
                    <div className="col d-flex justify-content-start mt-2">
                      <span class="material-icons d-inline px-3">wash</span>
                      <p className="text-muted">Zona para lavar trastes</p>
                    </div>
                  ) : null}
                  {zonasDelCuarto.zlrRef ? (
                    <div className="col d-flex justify-content-start mt-2">
                      <span class="material-icons d-inline px-3">
                        local_laundry_service
                      </span>
                      <p className="text-muted">Zona para lavar ropa</p>
                    </div>
                  ) : null}
                  {zonasDelCuarto.zcRef ? (
                    <div className="col d-flex justify-content-start mt-2">
                      <span class="material-icons d-inline px-3">deck</span>
                      <p className="text-muted">Zonas comunes</p>
                    </div>
                  ) : null}
                  {zonasDelCuarto.ztRef ? (
                    <div className="col d-flex justify-content-start mt-2">
                      <span class="material-icons d-inline px-3">
                        house_siding
                      </span>
                      <p className="text-muted">Tendedero</p>
                    </div>
                  ) : null}
                  {zonasDelCuarto.cochRef ? (
                    <div className="col d-flex justify-content-start mt-2">
                      <span class="material-icons d-inline px-3">
                        drive_eta
                      </span>
                      <p className="text-muted">Cochera</p>
                    </div>
                  ) : null}
                  {zonasDelCuarto.balconRef ? (
                    <div className="col d-flex justify-content-start mt-2">
                      <span class="material-icons d-inline px-3">house</span>
                      <p className="text-muted">Balcón</p>
                    </div>
                  ) : null}
                  {zonasDelCuarto.cocinaRef ? (
                    <div className="col d-flex justify-content-start mt-2">
                      <span class="material-icons d-inline px-3">kitchen</span>
                      <p className="text-muted">Cocina</p>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className=" col-12 col-lg-4 d-flex justify-content-center align-items-lg-start card-publication sticky-top ">
              <div class="card  text-white text-center shadow  sticky-top p-4 ml-lg-5 w-100 ">
                <div className="card-header bg-white">
                  <h2 className="font-weight-bolder lead text-dark text-left">
                    ${precio} / {tipocontrato}
                  </h2>
                </div>

                <div class="card-body text-dark">
                  <a
                    className="btn btn-outline-success btn-block btn-lg "
                    href={`${rentaSeleccionada}`}
                  >
                    <span className="text-smaller ">
                      <a href={linkAWhatsapp}>
                        Contactar al arrendador por WhatsApp
                      </a>
                    </span>
                  </a>
                  <Link
                    from={`${match.url}/`}
                    to={`${match.url}/contacto/${username}`}
                    className="btn btn-outline-dark btn-block btn-lg "
                  >
                    <span className="text-smaller ">Otros métodos</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex flex-column mt-4 mx-3">
            <h2 className=" py-4 h1 font-weight-bold">Ubicacion</h2>
            <div className="row d-flex flex-column h5">
              <div className="">
                <p>
                  Calle: {direccion} # {numeroexterior}
                </p>
                <p></p>
                <p>{ciudad}</p>
                <p>{estado}</p>
              </div>
              <div className="mapa-contenedor my-4">
                <Mapa />
              </div>
            </div>
          </div>
          <div className="row py-5 d-flex flex-column my-4">
            <h3 className="lead">Qué debes saber</h3>
            <div className="row">
              <div className="col-lg-4 d-flex flex-column">
                <ul className="list-group">
                  <li className="list-group-item-dark font-weight-bold mt-3 border-0 list-group-item p-2">
                    Reglas del edificio
                  </li>
                  {mascotas ? (
                    <li className="list-group-item p-2">
                      <span className="text-uppercase font-weight-bolder">
                        Si
                      </span>{" "}
                      se permiten mascotas
                    </li>
                  ) : (
                    <li className="list-group-item p-2">
                      No se permiten mascotas
                    </li>
                  )}
                  <li className="list-group-item p-2">No se permite fumar</li>
                  <li className="list-group-item p-2">
                    No se admiten fiestas o eventos
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 d-flex flex-column">
                <ul className="list-group">
                  <li className="list-group-item-dark font-weight-bold mt-3 border-0 list-group-item p-2">
                    Normas de arrendamiento
                  </li>

                  <li className="list-group-item p-2">
                    Tipo de contrato: {tipocontrato}
                  </li>

                  <li className="list-group-item p-2">
                    Depósito: {deposito} de renta
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 border-0 d-flex flex-column">
                <ul className="list-group m-0">
                  <li className="list-group-item-dark font-weight-bold mt-3 border-0 list-group-item p-2">
                    Seguridad
                  </li>
                  <li className="list-group-item p-2">
                    Bloqueo de edificio en temporada vacacional
                  </li>

                  <li className="list-group-item p-2">No se permite fumar</li>
                  <li className="list-group-item p-2">
                    No se admiten fiestas o eventos
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Publicacion;
