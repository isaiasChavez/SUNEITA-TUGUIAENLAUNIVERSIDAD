import React, { Fragment } from "react";
import { useRouteMatch } from "react-router-dom";
import img from "../../../../img/great-idea.svg";

const Form4 = ({ onDataChange, dataFormulario, route }) => {
  let match = useRouteMatch();

  const nextPage = (e) => {
    console.log("Está pasando");
    e.preventDefault();
    //Se evalua cuantas zonas fueron marcadas para no dejar vacio el campo
    //Se da la oportunidad de dejar sola la publicación
    if (
      dataFormulario.precio === null ||
      dataFormulario.precio < 400 ||
      dataFormulario.deposito === null
    ) {
      alert("Por favor coloca datos validos");
      return;
    }

    if (dataFormulario.tipocontrato === "") {
      alert("No puedes dejar este campo vacio");
      return;
    }
    if (dataFormulario.deposito === "") {
      alert("No puedes dejar este campo vacio");
      return;
    }
    route.push(`${match.url}/direccion`);
  };

  return (
    <Fragment>
      <div className="container min-vh-100  d-flex flex-column justify-content-center w-100 ">
        <div className="row ">
          <div className="col-lg-6">
            <form className="pt-5">
              <div className="row w-100 py-4 ">
                <h2 className="lead">¿Cuál es el precio?</h2>
              </div>
              <form action="" onSubmit={nextPage}>
                <div class="row">
                  <div class="col-lg-4">
                    <input
                      type="number"
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
                  <div class="col-lg-4 my-1">
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
                      <option value="sin contrato">Sin contrato</option>
                    </select>
                  </div>
                </div>
                <div className="row w-100 py-3">
                  <h2 className="lead">Depósito</h2>
                </div>
                <div class="row align-items-center">
                  <div class="col-lg-4 my-1">
                    <select
                      class="custom-select mr-sm-2"
                      id="inlineFormCustomSelect"
                      name="deposito"
                      onChange={onDataChange}
                      value={dataFormulario.deposito}
                    >
                      <option selected>Escoje</option>
                      <option value="sin deposito">Sin depósito</option>
                      <option value="medio mes">Medio mes de renta</option>
                      <option value="Un mes de renta">Mes de renta</option>
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
          <div className="col-lg-6   py-5">
            <img src={img} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Form4;
