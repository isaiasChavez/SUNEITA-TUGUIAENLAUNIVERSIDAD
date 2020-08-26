import React, { Fragment } from "react";

const Form4 = () => {
  return (
    <Fragment>
      <div className="container min-vh-100  d-flex flex-column justify-content-center w-100 ">
        <div className="row ">
          <div className="col-lg-8 ">
            <form className="pt-5">
              <div className="row w-100 py-4 ">
                <h2 className='lead'>¿Cuál es el precio?</h2>
              </div>
              <div class="row">
                <div class="col">
                  <input type="text" class="form-control" placeholder="" />
                </div>
              </div>
              <div className="row w-100 py-3">
                <h2 className='lead'>¿Qué tipo de contrato?</h2>
              </div>
              <div class="row align-items-center">
                <div class="col-auto my-1">
                  <select
                    class="custom-select mr-sm-2"
                    id="inlineFormCustomSelect"
                  >
                    <option selected>Escoje</option>
                    <option value="1">Por mes</option>
                    <option value="2">Por bimestre</option>
                    <option value="2">Por trimestre</option>
                    <option value="3">Por semestre</option>
                    <option value="3">Por año</option>
                  </select>
                </div>
              </div>
            </form>

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
