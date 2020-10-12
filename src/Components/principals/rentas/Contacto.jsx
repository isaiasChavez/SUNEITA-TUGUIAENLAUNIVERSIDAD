import React from "react";
import { useParams } from "react-router-dom";

const Contacto = () => {
  const { username } = useParams();

  return (
    <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <h1>Puedes contactar a {username} de las siguientes formas</h1>
      <div className="container">
        <div className="row mt-5">
          <h2 className="lead col-lg-12 m-0 p-0">
            Escribe un correo a {username}{" "}
          </h2>
          <form className="col-lg-8 offset-2 mt-5">
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Mensaje</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>

            <button type="submit" class="btn btn-dark btn-block btn-lg">
              Enviar
            </button>
          </form>
        </div>
        <div className="row mt-5">
          <h2 className="lead">Contacta por sus redes sociales</h2>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
