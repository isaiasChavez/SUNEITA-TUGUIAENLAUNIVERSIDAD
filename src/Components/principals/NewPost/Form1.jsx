import React, { Fragment } from "react";
import {Link,useRouteMatch} from 'react-router-dom'
const Form1 = () => {
  let match = useRouteMatch();
  return (
    <Fragment>
      <div className="container min-vh-100  d-flex flex-column justify-content-center w-100 ">
        <div className="row ">
          <div className="col-lg-8 ">
            <div className="row w-100">
              <h2>Hola, vamos a crear el anuncio</h2>
            </div>
            <div className="row ">
              <span className="badge badge-dark rounded-0"> paso 1 </span>
              <p className="lead d-block w-100 pt-4">
                ¿Qué tipo de cuartos rentas?
              </p>
            </div>
            <div class="form-check pt-2">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
                
              />
              <label class="form-check-label" for="exampleRadios1">
                Habitación
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="option2"
              />
              <label class="form-check-label" for="exampleRadios2">
                Departamento
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios3"
                value="option3"
                
              />
              <label class="form-check-label" for="exampleRadios3">
                Casa completa
              </label>
            </div>
            <div className="form-group pt-5">
            <Link to={`${match.url}/cp-1`}>Continuar</Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Form1;
