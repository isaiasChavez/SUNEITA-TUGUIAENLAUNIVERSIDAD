import img from "../../../../img/great-idea.svg";
import React, { Fragment, useContext } from "react";
import { useRouteMatch } from "react-router-dom";
import { CASA, DEPARTAMENTO, HABITACION } from "../../../../types/";
import AlertasContext from "../../../../State/alertas/alertasContext";

const Form1 = ({ onDataChange, dataFormulario, route }) => {
  let match = useRouteMatch();
  const alertasContext = useContext(AlertasContext);
  const { mostrarAlerta } = alertasContext;

  const nextPage = (e) => {
    e.preventDefault();
    if (dataFormulario.tipoCuarto === "") {
      mostrarAlerta("No puedes avanzar sin seleccionar", "warning");
    } else {
      route.push(`${match.url}/servicios`);
    }
  };

  return (
    <Fragment>
      <div className="container min-vh-100  d-flex flex-column justify-content-center w-100 ">
        <div className="row ">
          <div className="col-lg-7 ">
            <div className="row w-100">
              <h2>Hola, vamos a crear el anuncio</h2>
            </div>
            <div className="row ">
              <span className="badge badge-dark rounded-0"> paso 1 </span>
              <p className="lead d-block w-100 pt-4">
                ¿Qué tipo de cuartos rentas?
              </p>
            </div>
            <form onSubmit={nextPage} action="">
              <div class="form-check pt-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="tipoCuarto"
                  id="exampleRadios1"
                  value={HABITACION}
                  onChange={onDataChange}
                />
                <label class="form-check-label" for="exampleRadios1">
                  Habitación
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="tipoCuarto"
                  id="exampleRadios2"
                  value={DEPARTAMENTO}
                  onChange={onDataChange}
                />
                <label class="form-check-label" for="exampleRadios2">
                  Departamento
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="tipoCuarto"
                  id="exampleRadios3"
                  value={CASA}
                  onChange={onDataChange}
                />
                <label class="form-check-label" for="exampleRadios3">
                  Casa completa
                </label>
              </div>
              <div className="form-group pt-5">
                <button type="submit" className="btn btn-outline-dark">
                  Continuar
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-5">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Form1;
