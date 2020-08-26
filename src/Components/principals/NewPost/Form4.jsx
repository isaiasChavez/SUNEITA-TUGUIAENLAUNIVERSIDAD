import React, { Fragment } from "react";

const Form4 = () => {
  return (
    <Fragment>
      <div className="container min-vh-100  d-flex flex-column justify-content-center w-100 ">
        <div className="row ">
          <div className="col-lg-8 ">
            <div className="row w-100">
              <h2>¿Qué tipo de baño hay?</h2>
            </div>
           

            <div class="custom-control custom-checkbox mr-sm-2 mt-2">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customControlAutosizing"
              />
              <label class="custom-control-label" for="customControlAutosizing">
                Baño compartido
              </label>
            </div>
            <div class="custom-control custom-checkbox mr-sm-2 mt-2">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customControlAutosizing"
              />
              <label class="custom-control-label" for="customControlAutosizing">
                Baño privado
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

export default Form4;
