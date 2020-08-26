import React, { Fragment } from "react";

const Form2 = () => {
  return (
    <Fragment>
      <div className="container min-vh-100  d-flex flex-column justify-content-center w-100 ">
        <div className="row ">
          <div className="col-lg-8 ">
            <div className="row w-100">
              <h2>¿Qué servicios ofreces?</h2>
            </div>
            <div className="row">
              <span className="badge badge-light rounded-0"> paso 2 </span>
              <p className="lead d-block w-100 pt-4">¿Con que puede contar un estudiante al rentar contigo?</p>
            </div>

            <div class="custom-control custom-checkbox mr-sm-2 mt-2">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customControlAutosizing"
              />
              <label class="custom-control-label" for="customControlAutosizing">
                Agua caliente
              </label>
            </div>

            <div class="custom-control custom-checkbox mr-sm-2 mt-2">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customControlAutosizing"
              />
              <label class="custom-control-label" for="customControlAutosizing">
                Wifi
              </label>
            </div>
            <div class="custom-control custom-checkbox mr-sm-2 mt-2">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customControlAutosizing"
              />
              <label class="custom-control-label" for="customControlAutosizing">
                Productos iniciales de limpieza
              </label>
            </div>
            <div class="custom-control custom-checkbox mr-sm-2 mt-2">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customControlAutosizing"
              />
              <label class="custom-control-label" for="customControlAutosizing">
                Ganchos
              </label>
            </div>
            <div class="custom-control custom-checkbox mr-sm-2 mt-2">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customControlAutosizing"
              />
              <label class="custom-control-label" for="customControlAutosizing">
                Colchón
              </label>
            </div>
            <div class="custom-control custom-checkbox mr-sm-2 mt-2">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customControlAutosizing"
              />
              <label class="custom-control-label" for="customControlAutosizing">
                Escritorio/Zona para trabajar
              </label>
            </div>

            <div className="form-group pt-5">
              <button className="btn btn-dark ">Continuar</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Form2;
