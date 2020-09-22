import React, { Fragment } from "react";
import { useRouteMatch } from "react-router-dom";

const Form4 = ({ onDataChange, dataFormulario, route }) => {
  let match = useRouteMatch();

  const nextPage = (e) => {
    e.preventDefault();
    //Se evalua cuantas zonas fueron marcadas para no dejar vacio el campo
    //Se da la oportunidad de dejar sola la publicación
    if (dataFormulario.tipobano === "") {
      alert("No puedes dejar este campo vacio");
      return;
    }
    route.push(`${match.url}/cp-4`);
  };

  return (
    <Fragment>
      <div className="container min-vh-100  d-flex flex-column justify-content-center w-100 ">
        <div className="row ">
          <div className="col-lg-8 ">
            <div className="row w-100">
              <h2>¿Qué tipo de baño hay?</h2>
            </div>
            <form action="" onSubmit={nextPage}>
              <div class="custom-control custom-checkbox mr-sm-2 mt-2">
                <input
                  class="form-check-input"
                  type="radio"
                  id="bc"
                  name="tipobano"
                  value="compartido"
                  onChange={onDataChange}
                />
                <label class="form-check-label" for="bc">
                  Baño compartido
                </label>
              </div>
              <div class="custom-control custom-checkbox mr-sm-2 mt-2">
                <input
                  class="form-check-input"
                  type="radio"
                  id="bp"
                  name="tipobano"
                  value="privado"
                  onChange={onDataChange}
                />
                <label class="form-check-label" for="bp">
                  Baño privado
                </label>
              </div>

              <div className="form-group pt-5">
                <button type="submit" className="btn btn-outline-dark">
                  Continuar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Form4;
