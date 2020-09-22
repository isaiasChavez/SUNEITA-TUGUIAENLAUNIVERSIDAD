import React, { Fragment, useRef } from "react";
import { useRouteMatch } from "react-router-dom";

const Form3 = ({ onDataChange, dataFormulario, route }) => {
  let match = useRouteMatch();

  const zlrRef = useRef();
  const zltRef = useRef();
  const zcRef = useRef();
  const ztRef = useRef();
  const cochRef = useRef();

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
      const respuesta = window.confirm(
        "¿Estas seguro que no cuentas con ningúna zona? La publicación será colocada como 'Solo la construccion'"
      );
      if (respuesta) {
        route.replace(`${match.url}/cp-3`);
      } else {
        return;
      }
    }
    route.push(`${match.url}/cp-3`);
  };

  const saltar = () => {
    const data = {
      zlrRef: zlrRef.current.checked,
      zltRef: zltRef.current.checked,
      zcRef: zcRef.current.checked,
      ztRef: ztRef.current.checked,
      cochRef: cochRef.current.checked,
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
      <div className="container min-vh-100  d-flex flex-column justify-content-center w-100 ">
        <div className="row ">
          <div className="col-lg-8 ">
            <div className="row w-100">
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

              <div className="form-group pt-5">
                <button type="submit" className="btn btn-outline-dark">
                  Continuar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Form3;
