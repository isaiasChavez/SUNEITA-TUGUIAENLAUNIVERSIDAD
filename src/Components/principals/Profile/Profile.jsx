import React, { Fragment, useContext, useEffect } from "react";
import ScrollToTopOnMount from "../../routes/ScrollToTopOnMount";

import img from "../../../img/logo.png";
import Footer from "../layout/Footer";
import Modal from "../../utilities/Modal";
import RentasContext from "../../../State/rentas/rentasContext";
import BazarContext from "../../../State/bazar/bazarContext";
import AuthContext from "../../../State/autenticacion/authContext";
import PublicationProfile from "./PublicationProfile";
import ProductCardProfile from "./ProductCardProfile";

const Profile = (props) => {
  const rentasContext = useContext(RentasContext);
  const bazarContext = useContext(BazarContext);

  const authContext = useContext(AuthContext);

  const { obtenerRentasUsuario, rentasUsuario } = rentasContext;
  const { obtenerProductosUsuario, productosUsuario } = bazarContext;

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

  console.log("ACTIVOS", productosActivos);
  if (cargando) {
    return null;
  }
  return (
    <Fragment>
      <ScrollToTopOnMount />
      <Modal />
      <div className="container min-vh-100 margin-for-nav pb-5">
        <div className="row ">
          <div class="card p-4 mb-3 w-100">
            <div class="row ">
              <div class="col-12 col-md-4 col-lg-2">
                <img
                  src={img}
                  class="card-img img-thumbnail img-fluid"
                  alt="..."
                />
              </div>
              <div class=" col-sm-11 col-md-8 col-lg-8 d-flex align-items-center align-items-center ">
                <div class="card-body ">
                  <div className="lead text-muted d-flex align-items-center">
                    <span className="">Bienvenido</span>
                    <span className="display-4 px-4 text-capitalize">
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
            <div className="row ">
              <p className=" py-4 h3 text-uppercase">Publicaciones Activas</p>
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
            <div className="row">
              <p className=" py-5 h3 text-uppercase">Publicaciones Pausadas</p>
            </div>
            <div class="card-deck pt-5">
              {publicacionesInactivas.map((publicacion) => (
                <PublicationProfile data={publicacion} ruta={props.history} />
              ))}
            </div>
          </Fragment>
        ) : null}

        {/* //PRODUCTOS DEL BAZAR */}

        {productosActivos.length !== 0 ? (
          <Fragment>
            <div className="row">
              <p className="h3 text-uppercase py-4">
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
            <div className="row">
              <p className="h3 text-uppercase py-5">
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
      </div>
      <Footer />
    </Fragment>
  );
};

export default Profile;
