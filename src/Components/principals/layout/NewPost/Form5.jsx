import React, { Fragment } from "react";
import { Link, useRouteMatch } from "react-router-dom";

const Form4 = ({ onDataChange, dataFormulario, route }) => {
  let match = useRouteMatch();

  const nextPage = (e) => {
    console.log("Está pasando");
    e.preventDefault();
    //Se evalua cuantas zonas fueron marcadas para no dejar vacio el campo
    //Se da la oportunidad de dejar sola la publicación
    if (dataFormulario.precio === 0 || dataFormulario.precio < 400) {
      alert("Por favor coloca un precio valido");
      return;
    }

    if (dataFormulario.tipocontrato === "") {
      alert("No puedes dejar este campo vacio");
      return;
    }
    route.push(`${match.url}/cp-5`);
  };

  return (
    <Fragment>
      <div className="container min-vh-100  d-flex flex-column justify-content-center w-100 ">
        <div className="row ">
          <div className="col-lg-8 ">
            <form className="pt-5">
              <div className="row w-100 py-4 ">
                <h2 className="lead">¿Cuál es el precio?</h2>
              </div>
              <form action="" onSubmit={nextPage}>
                <div class="row">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder=""
                      name="precio"
                      value={dataFormulario.precio}
                      onChange={onDataChange}
                    />
                  </div>
                </div>
                <div className="row w-100 py-3">
                  <h2 className="lead">¿Qué tipo de contrato?</h2>
                </div>
                <div class="row align-items-center">
                  <div class="col-auto my-1">
                    <select
                      class="custom-select mr-sm-2"
                      id="inlineFormCustomSelect"
                      name="tipocontrato"
                      onChange={onDataChange}
                      value={dataFormulario.tipocontrato}
                    >
                      <option selected>Escoje</option>
                      <option value="mes">Por mes</option>
                      <option value="bimestre">Por bimestre</option>
                      <option value="trimestre">Por trimestre</option>
                      <option value="semestre">Por semestre</option>
                      <option value="año">Por año</option>
                    </select>
                  </div>
                </div>

                <div className="form-group pt-5">
                  <button type="submit" className="btn btn-outline-dark">
                    Continuar
                  </button>
                </div>
              </form>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Form4;
