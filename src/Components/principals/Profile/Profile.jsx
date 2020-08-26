import React, { Fragment } from "react";
import img from "../../../img/fondo.jpg";
import Footer from "../../Footer";
const Profile = () => {
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
                  <h5 class="card-title text-center display-4">Juan Gabriel</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="lead py-4">Publicaciones Activas</p>
        </div>
        <div class="card-deck pt-5">
          <div class="card">
            <img src={img} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>

              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
              <div className="btn-group w-100">
                <button className="btn btn-outline-dark">Editar</button>
                <button className="btn btn-outline-secondary">Pausar</button>
                <button className="btn btn-outline-danger">Eliminar</button>
              </div>
            </div>
          </div>
          <div class="card">
            <img src={img} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>

              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
              <div className="btn-group w-100">
                <button className="btn btn-outline-dark">Editar</button>
                <button className="btn btn-outline-secondary">Pausar</button>
                <button className="btn btn-outline-danger">Eliminar</button>
              </div>
            </div>
          </div>
          <div class="card">
            <img src={img} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>

              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
              <div className="btn-group w-100">
                <button className="btn btn-outline-dark">Editar</button>
                <button className="btn btn-outline-secondary">Pausar</button>
                <button className="btn btn-outline-danger">Eliminar</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <p className="lead py-5">Publicaciones Pausadas</p>
        </div>
        <div class="card-deck pt-5">
          <div class="card">
            <img src={img} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>

              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
              <div className="btn-group w-100">
                <button className="btn btn-outline-dark">Editar</button>
                <button className="btn btn-outline-secondary">Pausar</button>
                <button className="btn btn-outline-danger">Eliminar</button>
              </div>
            </div>
          </div>
          <div class="card">
            <img src={img} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>

              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
              <div className="btn-group w-100">
                <button className="btn btn-outline-dark">Editar</button>
                <button className="btn btn-outline-secondary">Pausar</button>
                <button className="btn btn-outline-danger">Eliminar</button>
              </div>
            </div>
          </div>
          <div class="card">
            <img src={img} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>

              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
              <div className="btn-group w-100">
                <button className="btn btn-outline-dark">Editar</button>
                <button className="btn btn-outline-secondary">Pausar</button>
                <button className="btn btn-outline-danger">Eliminar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Profile;
