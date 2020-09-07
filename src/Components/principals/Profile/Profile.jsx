import React, { Fragment, useContext } from "react";
import img from "../../../img/fondo.jpg";
import Footer from "../../Footer";
import rentasContext from "../../../State/rentasContext";
import PublicationProfile from "./PublicationProfile";
import AuthContext from "../../../State/authContext";

const Profile = () => {
  const { authData } = useContext(AuthContext);
  const { dataUser } = authData;
  const { datosRentas } = useContext(rentasContext);

  const publicacionesDeEsteUsuario = datosRentas.getRentasByUser(
    dataUser.username
  );

  const publicacionesActivas = publicacionesDeEsteUsuario.filter(
    (publicacion) => {
      if (publicacion.status === "active") return publicacion;
    }
  );
  const publicacionesInactivas = publicacionesDeEsteUsuario.filter(
    (publicacion) => {
      if (publicacion.status === "inactive") return publicacion;
    }
  );

  return (
    <Fragment>
      <div className="container min-vh-100 margin-for-nav pb-5">
        <div className="row ">
          <div class="card p-4 mb-3 w-100">
            <div class="row ">
              <div class="col-sm-1 col-md-4">
                <img
                  src={img}
                  class="card-img img-thumbnail img-fluid"
                  alt="..."
                />
              </div>
              <div class=" col-sm-11 col-md-8 col-lg-8 d-flex align-items-center align-items-center ">
                <div class="card-body ">
                  <div className="lead text-muted">Bienvenido...</div>
                  <h5 class="card-title text-center display-4">
                    {dataUser.nombre} {dataUser.apellido}
                  </h5>
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
