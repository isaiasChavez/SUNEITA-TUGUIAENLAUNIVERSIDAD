import React, { Fragment, useContext } from "react";
import { useRouteMatch } from "react-router-dom";
import ScrollToTopOnMount from "../../../routes/ScrollToTopOnMount";

import {
  MES,
  BIMESTRE,
  TRIMESTRE,
  SEMESTRE,
  ANUAL,
  SIN_CONTRATO,
  MES_DEPOSITO,
  SIN_DEPOSITO,
  MEDIOMES_DEPOSITO,
} from "../../../../types";
import AlertasContext from "../../../../State/alertas/alertasContext";

import img from "../../../../img/great-idea.svg";

const Form4 = ({ onDataChange, dataFormulario, route }) => {
  let match = useRouteMatch();
  const alertasContext = useContext(AlertasContext);
  const { mostrarAlerta } = alertasContext;

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
      mostrarAlerta("Por favor coloca datos validos", "warning");
      return;
    }

    if (dataFormulario.tipocontrato === "") {
      alert("No puedes dejar este campo vacio");
      mostrarAlerta("Coloca un contrato", "warning");
      return;
    }
    if (dataFormulario.deposito === "") {
      mostrarAlerta("Coloca un deposito", "warning");

      return;
    }
    route.push(`${match.url}/direccion`);
  };

  return (
    <Fragment>
      <div className="container min-vh-100  d-flex flex-column justify-content-center w-100  pt-5 mt-5 mt-md-2">
        <ScrollToTopOnMount />
        <div className="row ">
          <div className="col-lg-6 mx-4 mb-4">
            <div className="row w-100 py-4">
              <span className="badge badge-dark rounded-0 my-4">
                {" "}
                paso 6 de 9{" "}
              </span>
              <h2 className="">¿Cuál es el precio?</h2>
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
                    <option value={MES}>Por mes</option>
                    <option value={BIMESTRE}>Por bimestre</option>
                    <option value={TRIMESTRE}>Por trimestre</option>
                    <option value={SEMESTRE}>Por semestre</option>
                    <option value={ANUAL}>Por año</option>
                    <option value={SIN_CONTRATO}>Sin contrato</option>
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
                    <option value={SIN_DEPOSITO}>Sin depósito</option>
                    <option value={MEDIOMES_DEPOSITO}>
                      Medio mes de renta
                    </option>
                    <option value={MES_DEPOSITO}>Mes de renta</option>
                  </select>
                </div>
              </div>

              <div className="form-group pt-5">
                <button type="submit" className="btn btn-outline-dark">
                  Continuar
                </button>
              </div>
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
