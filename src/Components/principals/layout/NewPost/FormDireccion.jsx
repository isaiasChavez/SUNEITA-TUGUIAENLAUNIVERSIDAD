import React, { Fragment, useContext, useEffect } from "react";
import AlertasContext from "../../../../State/alertas/alertasContext";
import ScrollToTopOnMount from "../../../routes/ScrollToTopOnMount";

import { useRouteMatch } from "react-router-dom";
import img from "../../../../img/city.svg";
import axios from "axios";
const Form4 = ({
  onDataChange,
  dataFormulario,
  route,
  setdataFormulario,
  setProgreso,
}) => {
  useEffect(() => {
    setProgreso(70);
  }, []);
  let match = useRouteMatch();
  const alertasContext = useContext(AlertasContext);
  const { mostrarAlerta } = alertasContext;
  const traerInfoCP = async () => {
    try {
      const data = await axios(
        `https://api-sepomex.hckdrk.mx/query/info_cp/${dataFormulario.codigopostal}`
      );
      const dataApi = data.data[0].response;
      console.log(dataApi);
      setdataFormulario({
        ...dataFormulario,
        ciudad: dataApi.ciudad,
        estado: dataApi.estado,
        asentamiento: dataApi.asentamiento,
      });
    } catch (error) {
      console.log("No se han encontrado datos");
      console.log(error);
    }
  };

  const nextPage = (e) => {
    e.preventDefault();
    //Se evalua cuantas zonas fueron marcadas para no dejar vacio el campo
    //Se da la oportunidad de dejar sola la publicación
    if (
      dataFormulario.direccion === "" ||
      dataFormulario.ciudad === "" ||
      dataFormulario.estado === "" ||
      dataFormulario.codigopostal === "" ||
      dataFormulario.numeroexterior === "" ||
      dataFormulario.numeroexterior === null
    ) {
      mostrarAlerta("Faltan datos", "warning");
      return;
    }
    route.push(`${match.url}/descripcion`);
  };

  return (
    <Fragment>
      <div className="container min-vh-100  d-flex flex-column justify-content-center w-100 pt-5 mt-5 mt-md-2 ">
        <ScrollToTopOnMount />
        <div className="row mt-5 pt-5 ">
          <div className="col-lg-8 pr-5 mx-4 mb-4 ">
            <div className="row w-100">
              <h2>¿Dónde está ubicado?</h2>
            </div>

            <form className="my-5" onSubmit={nextPage}>
              <div class="form-group">
                <label for="inputAddress">Dirección</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="Ejemplo: Calle nardos esquina pensamientos"
                  name="direccion"
                  value={dataFormulario.direccion}
                  onChange={onDataChange}
                />
              </div>
              <div className="form-row">
                <div class="form-group col-md-3 d-block">
                  <label for="numerointerior">Número Interior </label>
                  <input
                    type="number"
                    class="form-control "
                    id="numerointerior"
                    name="numerointerior"
                    value={dataFormulario.numerointerior}
                    onChange={onDataChange}
                  />
                  <span className="text-muted mt-2 text-smaller">
                    (opcional)
                  </span>
                </div>
                <div class="form-group col-md-3 d-block">
                  <label for="numeroexterior">Número exterior</label>
                  <input
                    type="number"
                    class="form-control "
                    id="numeroexterior"
                    name="numeroexterior"
                    value={dataFormulario.numeroexterior}
                    onChange={onDataChange}
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputCity">Asentamiento</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputCity"
                    name="asentamiento"
                    value={dataFormulario.asentamiento}
                    onChange={onDataChange}
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputCity">Ciudad</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputCity"
                    name="ciudad"
                    value={dataFormulario.ciudad}
                    onChange={onDataChange}
                  />
                </div>
                <div class="form-group col-md-4">
                  <label for="inputState">Estado</label>
                  <select
                    id="inputState"
                    class="form-control"
                    name="estado"
                    value={dataFormulario.estado}
                    onChange={onDataChange}
                  >
                    <option selected>Choose...</option>
                    <option>Oaxaca</option>
                  </select>
                </div>

                <div class="form-group col-md-2">
                  <label for="inputZip">Codigo Postal</label>
                  <input
                    type="text"
                    class="form-control "
                    id="inputZip"
                    name="codigopostal"
                    value={dataFormulario.codigopostal}
                    onChange={onDataChange}
                  />
                  <button
                    type="button"
                    onClick={traerInfoCP}
                    className="btn btn-sm d-inline btn-outline-info w-100 mt-2"
                  >
                    Buscar
                  </button>
                </div>
              </div>

              <div className="form-group pt-5">
                <button
                  type="submit"
                  onClick={nextPage}
                  className="btn btn-outline-dark"
                >
                  Continuar
                </button>
              </div>
            </form>
          </div>

          <div className="col-lg-4 py-5 text-center pl-5">
            <img src={img} alt="" className="img-fluid " />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Form4;
