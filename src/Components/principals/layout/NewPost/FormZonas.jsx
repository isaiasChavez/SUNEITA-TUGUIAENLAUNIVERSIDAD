import React, { Fragment, useRef, useContext } from "react";
import { useRouteMatch } from "react-router-dom";
import AlertasContext from "../../../../State/alertas/alertasContext";
import ScrollToTopOnMount from "../../../routes/ScrollToTopOnMount";

import img from "../../../../img/innovation_.svg";

const Form3 = ({ onDataChange, dataFormulario, route }) => {
  let match = useRouteMatch();
  const alertasContext = useContext(AlertasContext);
  const { mostrarAlerta } = alertasContext;

  const zlrRef = useRef();
  const zltRef = useRef();
  const zcRef = useRef();
  const ztRef = useRef();
  const cochRef = useRef();
  const cocinaRef = useRef();
  const balconRef = useRef();
  const nextPage = (e) => {
    e.preventDefault();
    console.log(route);
    let zonasDelCuarto = 0;
    //Se evalua cuantas zonas fueron marcadas para no dejar vacio el campo
    for (const key in dataFormulario.zonasDelCuarto) {
      if (dataFormulario.zonasDelCuarto.hasOwnProperty(key)) {
        const existe = dataFormulario.zonasDelCuarto[key];
        if (existe === true) {
          zonasDelCuarto++;
        }
      }
    }
    //Se da la oportunidad de dejar sola la publicación
    if (zonasDelCuarto === 0) {
      mostrarAlerta("Por favor selecciona al menos un campo", "warning");
      return;
    }
    route.push(`${match.url}/medidas`);
  };

  const saltar = () => {
    const data = {
      zlrRef: zlrRef.current.checked,
      zltRef: zltRef.current.checked,
      zcRef: zcRef.current.checked,
      ztRef: ztRef.current.checked,
      cochRef: cochRef.current.checked,
      cocinaRef: cocinaRef.current.checked,
      balconRef: balconRef.current.checked,
    };
    const zonas = {
      target: {
        name: "zonasDelCuarto",
        value: data,
      },
    };
    onDataChange(zonas);
  };

  return (
    <Fragment>
      <div className="container min-vh-100  d-flex flex-column justify-content-center w-100 pt-5 mt-5 mt-md-2 ">
        <ScrollToTopOnMount />
        <div className="row ">
          <div className="col-lg-7 mx-4 mb-4 ">
            <div className="row w-100">
              <span className="badge badge-dark rounded-0 my-4">
                {" "}
                paso 3 de 9{" "}
              </span>
              <h2>¿Con que zonas cuenta?</h2>
            </div>
            <div className="row">
              <span className="badge badge-light rounded-0"> paso 2 </span>
              <p className="lead d-block w-100 pt-4">
                ¿A que zonas puede acceder el estudiante al rentar?
              </p>
            </div>
            <form action="" onSubmit={nextPage}>
              <div class="custom-control custom-checkbox mr-sm-2 mt-2">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="zonalavadoropa"
                  name="zonalavadoropa"
                  ref={zlrRef}
                  onChange={saltar}
                  checked={dataFormulario.zonasDelCuarto.zlrRef}
                />
                <label class="custom-control-label" for="zonalavadoropa">
                  Zona de lavado de ropa
                </label>
              </div>
              <div class="custom-control custom-checkbox mr-sm-2 mt-2">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="zlt"
                  name="zlt"
                  ref={zltRef}
                  checked={dataFormulario.zonasDelCuarto.zltRef}
                  onChange={saltar}
                />
                <label class="custom-control-label" for="zlt">
                  Zona de lavado de trastes
                </label>
              </div>
              <div class="custom-control custom-checkbox mr-sm-2 mt-2">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="zonascomunes"
                  name="zonascomunes"
                  ref={zcRef}
                  onChange={saltar}
                  checked={dataFormulario.zonasDelCuarto.zcRef}
                />
                <label class="custom-control-label" for="zonascomunes">
                  Zonas comunes
                </label>
              </div>

              <div class="custom-control custom-checkbox mr-sm-2 mt-2">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="zonatendedero"
                  name="zonatendedero"
                  ref={ztRef}
                  onChange={saltar}
                  checked={dataFormulario.zonasDelCuarto.ztRef}
                />
                <label class="custom-control-label" for="zonatendedero">
                  Zona de tendedero
                </label>
              </div>
              <div class="custom-control custom-checkbox mr-sm-2 mt-2">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="cochera"
                  name="cochera"
                  ref={cochRef}
                  onChange={saltar}
                  checked={dataFormulario.zonasDelCuarto.cochRef}
                />
                <label class="custom-control-label" for="cochera">
                  Cochera
                </label>
              </div>
              <div class="custom-control custom-checkbox mr-sm-2 mt-2">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="cocina"
                  name="cocina"
                  ref={cocinaRef}
                  onChange={saltar}
                  checked={dataFormulario.zonasDelCuarto.cocinaRef}
                />
                <label class="custom-control-label" for="cocina">
                  Cocina
                </label>
              </div>
              <div class="custom-control custom-checkbox mr-sm-2 mt-2">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="balcon"
                  name="balcon"
                  ref={balconRef}
                  onChange={saltar}
                  checked={dataFormulario.zonasDelCuarto.balconRef}
                />
                <label class="custom-control-label" for="balcon">
                  Balcón
                </label>
              </div>

              <div className="form-group pt-5">
                <button type="submit" className="btn btn-outline-dark">
                  Continuar
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-5 my-4">
            <img src={img} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Form3;
