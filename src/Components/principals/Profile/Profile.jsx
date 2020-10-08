import React, { Fragment, useContext, useEffect } from "react";
import ScrollToTopOnMount from "../../routes/ScrollToTopOnMount";

import img from "../../../img/logo.png";
import Modal from "../../utilities/Modal";
import RentasContext from "../../../State/rentas/rentasContext";
import BazarContext from "../../../State/bazar/bazarContext";
import AuthContext from "../../../State/autenticacion/authContext";
import PublicationProfile from "./PublicationProfile";
import ProductCardProfile from "./ProductCardProfile";
import { Link } from "react-router-dom";

const Profile = (props) => {
  const authContext = useContext(AuthContext);
  const { obtenerRentasUsuario, rentasUsuario } = useContext(RentasContext);
  const { obtenerProductosUsuario, productosUsuario } = useContext(
    BazarContext
  );

  useEffect(() => {
    obtenerRentasUsuario();
    obtenerProductosUsuario();
  }, []);

  const { usuario, cargando } = authContext;

  const publicacionesActivas = rentasUsuario.filter((renta) => renta.activa);
  const publicacionesInactivas = rentasUsuario.filter((renta) => !renta.activa);

  const productosActivos = productosUsuario.filter(
    (producto) => producto.activa
  );
  const productosInactivos = productosUsuario.filter(
    (producto) => !producto.activa
  );

  if (cargando) {
    return null;
  }
  return (
    <Fragment>
      <ScrollToTopOnMount />
      <Modal />
      <div className="container min-vh-100 margin-for-nav pb-5 px-2">
        <div className="row ">
          <div class="card p-4 mb-3 w-100">
            <div class="row ">
              <div class="col-3 col-md-4 col-lg-2 d-flex align-items-center">
                <img
                  src={img}
                  class="img-card-profile img-fluid ml-2"
                  alt="..."
                />
              </div>
              <div class=" col-9 col-md-8 col-lg-8 d-flex align-items-center align-items-center ">
                <div class="card-body ">
                  <div className="lead text-muted d-flex flex-column flex-md-row align-items-center">
                    <span className="">Bienvenido</span>
                    <span className=" d-none d-md-block display-4 px-4 text-capitalize">
                      {usuario.name}
                    </span>
                    <span className=" d-md-none h2 px-4 mt-3 text-capitalize">
                      {usuario.name}
                    </span>
                  </div>
                  <h5 class="card-title text-center display-4"></h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />

        {publicacionesActivas.length != 0 ? (
          <Fragment>
            <div className="row justify-content-center">
              <p className=" py-4 h3 text-center text-uppercase">
                Publicaciones Activas
              </p>
            </div>
            <div class="card-deck pt-5  p-4 ">
              {publicacionesActivas.map((publicacion) => (
                <PublicationProfile data={publicacion} ruta={props.history} />
              ))}
            </div>
          </Fragment>
        ) : null}
        {publicacionesInactivas.length != 0 ? (
          <Fragment>
            <div className="row justify-content-center">
              <p className=" py-5 h3 text-uppercase">Publicaciones Pausadas</p>
            </div>
            <div class="card-deck pt-5">
              {publicacionesInactivas.map((publicacion) => (
                <PublicationProfile data={publicacion} ruta={props.history} />
              ))}
            </div>
          </Fragment>
        ) : null}
        {rentasUsuario.length === 0 ? (
          <>
            <div className=" d-flex  flex-column py-5 my-5 ">
              <div className="  d-flex justify-content-center flex-column">
                <h4 className="text-center">
                  No tienes publicaciones de rentas.
                </h4>
                <Link
                  to="/crearPublicacion"
                  className="btn col-10 offset-1 col-lg-8 offset-lg-2 btn-dark btn-lg my-4 "
                >
                  Publicar Renta
                </Link>
              </div>
            </div>
          </>
        ) : null}

        {/* //PRODUCTOS DEL BAZAR */}

        {productosActivos.length !== 0 ? (
          <Fragment>
            <div className="row justify-content-center">
              <p className="h3 text-uppercase py-4 ">
                Productos del bazar Activos
              </p>
            </div>
            <div class="card-deck pt-5">
              {productosActivos.map((producto) => (
                <ProductCardProfile data={producto} ruta={props.history} />
              ))}
            </div>
          </Fragment>
        ) : null}
        {productosInactivos.length !== 0 ? (
          <Fragment>
            <div className="row justify-content-center">
              <p className="h3 text-uppercase py-5 text-center ">
                Productos del bazar pausados
              </p>
            </div>
            <div class="card-deck pt-5">
              {productosInactivos.map((producto) => (
                <ProductCardProfile data={producto} ruta={props.history} />
              ))}
            </div>
          </Fragment>
        ) : null}
        {productosUsuario.length === 0 ? (
          <>
            <div className=" d-flex  flex-column py-5 my-5 ">
              <div className="  d-flex justify-content-center flex-column">
                <h4 className="text-center">
                  No tienes publicaciones de articulos en el bazar.
                </h4>
                <Link
                  to="/publicarenbazar"
                  className="btn col-10 offset-1 col-lg-8 offset-lg-2 btn-dark btn-lg my-4 "
                >
                  Publicar Articulo
                </Link>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </Fragment>
  );
};

export default Profile;
