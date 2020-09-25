import React, { Fragment, useContext, useEffect } from "react";
import ScrollToTopOnMount from "../../routes/ScrollToTopOnMount";

import img from "../../../img/logo.png";
import Footer from "../layout/Footer";
import Modal from "../../utilities/Modal";
import RentasContext from "../../../State/rentas/rentasContext";
import PublicationProfile from "./PublicationProfile";
import AuthContext from "../../../State/autenticacion/authContext";

const Profile = () => {
  const rentasContext = useContext(RentasContext);

  const authContext = useContext(AuthContext);

  const { obtenerRentasUsuario, rentasUsuario } = rentasContext;

  useEffect(() => {
    obtenerRentasUsuario();
  }, []);

  const { usuario, cargando } = authContext;

  const publicacionesActivas = rentasUsuario.filter((renta) => renta.activa);
  const publicacionesInactivas = [];
  console.log(rentasUsuario);

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
            <div className="row">
              <p className="lead py-4">Publicaciones Activas</p>
            </div>
            <div class="card-deck pt-5">
              {publicacionesActivas.map((publicacion) => (
                <PublicationProfile data={publicacion} />
              ))}
            </div>
          </Fragment>
        ) : null}
        {publicacionesInactivas.length != 0 ? (
          <Fragment>
            <div className="row">
              <p className="lead py-5">Publicaciones Pausadas</p>
            </div>
            <div class="card-deck pt-5">
              {publicacionesInactivas.map((publicacion) => (
                <PublicationProfile data={publicacion} />
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
