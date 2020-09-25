import img from "../../../../img/checklist.svg";
import { COMPARTIDO, PRIVADO } from "../../../../types";
import React, { Fragment, useContext } from "react";

import { useRouteMatch } from "react-router-dom";
import AlertasContext from "../../../../State/alertas/alertasContext";

const Form4 = ({ onDataChange, dataFormulario, route }) => {
  let match = useRouteMatch();
  const alertasContext = useContext(AlertasContext);
  const { mostrarAlerta } = alertasContext;

  const nextPage = (e) => {
    e.preventDefault();
    //Se evalua cuantas zonas fueron marcadas para no dejar vacio el campo
    //Se da la oportunidad de dejar sola la publicación
    if (
      dataFormulario.tipobano === "" ||
      dataFormulario.luzincluida === null ||
      dataFormulario.soloestudiantes === null ||
      dataFormulario.mascotas === null
    ) {
      mostrarAlerta("Hay campos vacios", "warning");
      return;
    }
    route.push(`${match.url}/precontra`);
  };

  return (
    <Fragment>
      <div className="container min-vh-100  d-flex flex-column justify-content-center w-100 ">
        <div className="row pt-5 mt-5">
          <div className="col-lg-6 ">
            <form action="" onSubmit={nextPage}>
              <div className="row w-100">
                <h2 className="h4">¿Qué tipo de baño hay?</h2>
              </div>
              <div class="custom-control custom-checkbox mr-sm-2 mt-2">
                <input
                  class="form-check-input"
                  type="radio"
                  id="compartido"
                  name="tipobano"
                  value={COMPARTIDO}
                  checked={
                    dataFormulario.tipobano === COMPARTIDO ? true : false
                  }
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
                  id="banoprivado"
                  name="tipobano"
                  value={PRIVADO}
                  checked={dataFormulario.tipobano === PRIVADO ? true : false}
                  onChange={onDataChange}
                />
                <label class="form-check-label" for="bp">
                  Baño privado
                </label>
              </div>
              <div className="row w-100 pt-4 pb-4">
                <h2 className="h4">¿La luz está incluida en el contrato?</h2>
              </div>
              <div class="custom-control custom-checkbox mr-sm-2 mt-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="luzincluida"
                  id="luzincluidasi"
                  checked={dataFormulario.luzincluida === true ? true : false}
                  value={true}
                  onChange={onDataChange}
                />
                <label class="form-check-label" for="luzincluidasi">
                  Si
                </label>
              </div>
              <div class="custom-control custom-checkbox mr-sm-2 mt-2">
                <input
                  class="form-check-input"
                  type="radio"
                  id="luzincluidano"
                  name="luzincluida"
                  value={false}
                  onChange={onDataChange}
                  checked={dataFormulario.luzincluida === false ? true : false}
                />
                <label class="form-check-label" for="luzincluidano">
                  No
                </label>
              </div>

              <div className="row w-100 pt-4 pb-4">
                <h2 className="h4">¿En el edificio solo viven estudiantes?</h2>
              </div>
              <div class="custom-control custom-checkbox mr-sm-2 mt-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="soloestudiantes"
                  id="soloestudiantessi"
                  value={true}
                  onChange={onDataChange}
                  checked={
                    dataFormulario.soloestudiantes === true ? true : false
                  }
                />
                <label class="form-check-label" for="luzincluidasi">
                  Si, solo estudiantes.
                </label>
              </div>
              <div class="custom-control custom-checkbox mr-sm-2 mt-2">
                <input
                  class="form-check-input"
                  type="radio"
                  id="soloestudiantesno"
                  name="soloestudiantes"
                  value={false}
                  onChange={onDataChange}
                  checked={
                    dataFormulario.soloestudiantes === false ? true : false
                  }
                />
                <label class="form-check-label" for="luzincluidano">
                  No, también civiles.
                </label>
              </div>

              <div className="row w-100 pt-4 pb-4">
                <h2 className="h4">¿Se permiten mascotas?</h2>
              </div>
              <div class="custom-control custom-checkbox mr-sm-2 mt-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="mascotas"
                  id="mascotassi"
                  value={true}
                  onChange={onDataChange}
                  checked={dataFormulario.mascotas === true ? true : false}
                />
                <label class="form-check-label" for="mascotassi">
                  Si.
                </label>
              </div>
              <div class="custom-control custom-checkbox mr-sm-2 mt-2">
                <input
                  class="form-check-input"
                  type="radio"
                  id="mascotasno"
                  name="mascotas"
                  value={false}
                  onChange={onDataChange}
                  checked={dataFormulario.mascotas === false ? true : false}
                />
                <label class="form-check-label" for="mascotasno">
                  No
                </label>
              </div>

              <div className="form-group pt-5">
                <button type="submit" className="btn btn-outline-dark">
                  Continuar
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-4 offset-1  py-5">
            <img src={img} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Form4;
