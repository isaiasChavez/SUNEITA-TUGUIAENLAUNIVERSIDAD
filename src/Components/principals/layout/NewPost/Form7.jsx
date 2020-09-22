import React, { Fragment } from "react";
import { Link, useRouteMatch } from "react-router-dom";

const Form4 = ({ onDataChange, dataFormulario }) => {
  let match = useRouteMatch();

  return (
    <Fragment>
      <div className="container min-vh-100  d-flex flex-column justify-content-center w-100 ">
        <div className="row ">
          <div className="col-lg-8 ">
            <div className="row w-100">
              <h2>¿Dónde está ubicado?</h2>
            </div>

            <form className="my-5">
              <div class="form-group">
                <label for="inputAddress">Dirección</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                />
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputCity">Ciudad</label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>
                <div class="form-group col-md-4">
                  <label for="inputState">Estado</label>
                  <select id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="form-group col-md-2">
                  <label for="inputZip">Codigo Postal</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputZip"
                    name="direccion"
                    onChange={onDataChange}
                  />
                </div>
              </div>
            </form>

            <div className="form-group pt-5">
              <Link from={`${match.url}`} to={`/`}>
                Terminar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Form4;
