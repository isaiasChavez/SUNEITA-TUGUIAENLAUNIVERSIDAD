import React, { Fragment, useContext, useEffect } from "react";
import ScrollToTopOnMount from "../../../routes/ScrollToTopOnMount";

import img from "../../../../img/reading.svg";
import AlertasContext from "../../../../State/alertas/alertasContext";

import { useRef } from "react";
import { useRouteMatch } from "react-router-dom";

const Form2 = ({ onDataChange, dataFormulario, route, setProgreso }) => {
  let match = useRouteMatch();
  const alertasContext = useContext(AlertasContext);
  const { mostrarAlerta } = alertasContext;

  useEffect(() => {
    setProgreso(20);
  }, []);

  const aguaCRef = useRef();
  const wfRef = useRef();
  const pilCRef = useRef();
  const ganCRef = useRef();
  const colCRef = useRef();
  const escCRef = useRef();

  const nextPage = (e) => {
    e.preventDefault();
    let numeroDeServicios = 0;
    for (const key in dataFormulario.servicios) {
      if (dataFormulario.servicios.hasOwnProperty(key)) {
        const element = dataFormulario.servicios[key];
        if (element === true) {
          numeroDeServicios++;
        }
      }
    }
    if (numeroDeServicios === 0) {
      mostrarAlerta("Por favor selecciona al menos un servicio", "warning");
      return;
    }

    route.push(`${match.url}/zonas`);
  };

  const onchange = () => {
    const data = {
      aguaCRef: aguaCRef.current.checked,
      wfRef: wfRef.current.checked,
      pilCRef: pilCRef.current.checked,
      ganCRef: ganCRef.current.checked,
      colCRef: colCRef.current.checked,
      escCRef: escCRef.current.checked,
    };
    const servicios = {
      target: {
        name: "servicios",
        value: data,
      },
    };
    onDataChange(servicios);
  };

  return (
    <Fragment>
      <div className="container min-vh-100  d-flex flex-column justify-content-center w-100 pt-5 mt-5 mt-md-2 ">
        <ScrollToTopOnMount />
        <div className="row  pt-5">
          <div className="col-lg-7 mx-4 mb-4 ">
            <div className="row w-100">
              <h2 className="mx-3">¿Qué servicios ofreces?</h2>
            </div>
            <div className="row">
              <p className="lead d-block w-100 pt-4">
                ¿Con que puede contar un estudiante al rentar contigo?
              </p>
            </div>
            <form onSubmit={nextPage}>
              <div class="custom-control custom-checkbox mr-sm-2 mt-2">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="aguaC"
                  name="aguaC"
                  onChange={onchange}
                  ref={aguaCRef}
                  checked={dataFormulario.servicios.aguaCRef}
                />
                <label class="custom-control-label" for="aguaC">
                  Agua caliente
                </label>
              </div>

              <div class="custom-control custom-checkbox mr-sm-2 mt-2">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="wf"
                  name="wf"
                  onChange={onchange}
                  ref={wfRef}
                  checked={dataFormulario.servicios.wfRef}
                />
                <label class="custom-control-label" for="wf">
                  Wifi
                </label>
              </div>
              <div class="custom-control custom-checkbox mr-sm-2 mt-2">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="pil"
                  onChange={onchange}
                  ref={pilCRef}
                  checked={dataFormulario.servicios.pilCRef}
                />
                <label class="custom-control-label" for="pil">
                  Productos iniciales de limpieza
                </label>
              </div>
              <div class="custom-control custom-checkbox mr-sm-2 mt-2">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="gan"
                  onChange={onchange}
                  ref={ganCRef}
                  checked={dataFormulario.servicios.ganCRef}
                />
                <label class="custom-control-label" for="gan">
                  Ganchos
                </label>
              </div>
              <div class="custom-control custom-checkbox mr-sm-2 mt-2">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="col"
                  onChange={onchange}
                  ref={colCRef}
                  checked={dataFormulario.servicios.colCRef}
                />
                <label class="custom-control-label" for="col">
                  Colchón
                </label>
              </div>
              <div class="custom-control custom-checkbox mr-sm-2 mt-2">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="esc"
                  onChange={onchange}
                  ref={escCRef}
                  checked={dataFormulario.servicios.escCRef}
                />
                <label class="custom-control-label" for="esc">
                  Escritorio/Zona para trabajar
                </label>
              </div>

              <div className="form-group pt-5">
                <button type="submit" className="btn btn-outline-dark">
                  Continuar
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-4">
            <img src={img} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Form2;
