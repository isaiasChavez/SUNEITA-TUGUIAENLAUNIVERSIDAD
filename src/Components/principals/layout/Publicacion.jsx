import React, { Fragment, useContext, useEffect } from "react";
import img from "../../../img/jesus.jpg";
import img2 from "../../../img/studentBackground.jpg";
import img3 from "../../../img/studentBackground2.jpg";
import img4 from "../../../img/info.jpg";
import img5 from "../../../img/studentBackground3.jpg";
import Footer from "../../Footer";
import { useParams } from "react-router-dom";
import rentasContext from "../../../State/rentasContext";
const Publicacion = () => {
  const { rentas } = useContext(rentasContext);
  const { idpublicacion } = useParams();

  const getInfoPublication = (id) => {
    const datos = rentas.filter((renta) => {
      if (renta.id == id) {
        return renta;
      }
    });
    return datos[0];
  };

  const {
    titulo,
    descripcion,
    arrendador,
    tipo,
    zona,
    datos,
    servicios,
    precio,
  } = getInfoPublication(idpublicacion);
  console.log(datos);

  return (
    <Fragment>
      <div class="container pt-5">
        <div className="row pt-5">
          <h2 className="d-block w-100">{titulo}</h2>
          <div className=" d-block mb-3">
            <span className="lead  text-muted text-smaller">{zona}</span>
          </div>
        </div>
        <div className="row">
          <div className="col col-lg-7 d-flex flex-wrap p-0">
            <img src={img} class="  img-fluid w-50 rounded-lg" />
            <img src={img2} class=" img-fluid w-50 rounded-lg" />
            <img src={img3} class=" img-fluid w-50 rounded-lg" />
            <img src={img4} class=" img-fluid w-50 rounded-lg" />
          </div>
          <div className="col-lg-5 p-0 img-fluid ">
            <img src={img5} class=" mt-5 img-fluid rounded-lg" />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row d-flex flex-column">
                <h3 className="font-weight-bold pt-5">
                  {tipo} | Arrendador: {arrendador}
                </h3>
              </div>
              <hr />
              <div className="row">
                <ul className="list-group w-100">
                  {datos.banopro ? (
                    <li className="list-group-item">
                      Baño propio
                      <p className="text-muted">
                        Contaras con tu propio baño dentro de la habitación
                      </p>
                    </li>
                  ) : null}

                  <li className="list-group-item">
                    {datos.medidas.ancho} x {datos.medidas.largo} m2
                    <p className="text-muted">
                      La habitación cuenta con estas medidas de ancho y largo
                    </p>
                  </li>
                  {datos.soloestudiantes ? (
                    <li className="list-group-item">
                      Solo estudiantes
                      <p className="text-muted">
                        En el edificio viven estudiantes exclusivamente
                      </p>
                    </li>
                  ) : null}
                  {datos.camaras ? (
                    <li className="list-group-item">
                      Camaras de vigilancia
                      <p className="text-muted">
                        El edificio cuenta con esta medida de seguridad
                      </p>
                    </li>
                  ) : null}
                  {datos.luzincluida ? (
                    <li className="list-group-item">
                      Pago de luz incluido
                      <p className="text-muted">
                        El precio de la luz viene incluido el la renta
                      </p>
                    </li>
                  ) : null}
                  {datos.cocina ? (
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
              <div className="row">
                <h2 className="lead font-weight-bolder">Servicios</h2>
                <div className=" w-100 row-cols-lg-2 row">
                  {servicios.wifi ? (
                    <div className="col ">
                      <p className="text-muted">Wifi</p>
                    </div>
                  ) : null}
                  {servicios.cocina ? (
                    <div className="col">
                      <p className="text-muted">Cocina</p>
                    </div>
                  ) : null}
                  {servicios.banopro ? (
                    <div className="col">
                      <p className="text-muted">Baño propio</p>
                    </div>
                  ) : null}
                  {servicios.muebles ? (
                    <div className="col">
                      <p className="text-muted">Muebles</p>
                    </div>
                  ) : null}
                  {servicios.ganchos ? (
                    <div className="col">
                      <p className="text-muted">Ganchos para ropa</p>
                    </div>
                  ) : null}
                  {servicios.colchon ? (
                    <div className="col">
                      <p className="text-muted">Colchón</p>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex justify-content-center align-items-lg-start card-publication sticky-top ">
              <div class="card  text-white text-center shadow h-50 sticky-top p-4 ml-5 w-100 ">
                <div className="card-header bg-white">
                  <h2 className="font-weight-bolder lead text-dark text-left">
                    ${precio} /mes{" "}
                  </h2>
                </div>

                <div class="card-body text-dark">
                  <button className="btn btn-dark btn-block btn-lg ">
                    Contactar al arrendador
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row py-5 d-flex flex-column">
            <h3 className="lead">Qué debes saber</h3>
            <div className="row">
              <div className="col-lg-4 d-flex flex-column">
                <ul className="list-group">
                  <li className="list-group-item-dark font-weight-bold mt-3 border-0 list-group-item p-2">
                    Reglas del edificio
                  </li>
                  <li className="list-group-item p-2">
                    No se permiten mascotas
                  </li>

                  <li className="list-group-item p-2">
                    No se permiten mascotas
                  </li>
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
                  <li className="list-group-item p-2">Por mes o contrato</li>

                  <li className="list-group-item p-2">Depósito</li>
                  <li className="list-group-item p-2">Cóbro de daños</li>
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
      <Footer />
    </Fragment>
  );
};

export default Publicacion;
