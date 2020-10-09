import React, { useContext, useRef } from "react";
import { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import AlertasContext from "../../../../State/alertas/alertasContext";
import img from "../../../../img/construction.svg";
import ScrollToTopOnMount from "../../../routes/ScrollToTopOnMount";

const FormMedidasCuarto = ({
  dataFormulario,
  route,
  onDataChange,
  setProgreso,
}) => {
  useEffect(() => {
    setProgreso(40);
  }, []);
  const anchoRef = useRef();
  const largoRef = useRef();
  const alertasContext = useContext(AlertasContext);
  const { mostrarAlerta } = alertasContext;

  let match = useRouteMatch();
  const nextPage = (e) => {
    e.preventDefault();

    if (
      !dataFormulario.medidascuarto.ancho ||
      dataFormulario.medidascuarto.ancho === "" ||
      !dataFormulario.medidascuarto.largo ||
      dataFormulario.medidascuarto.largo === ""
    ) {
      mostrarAlerta("Faltan campos por rellenar", "warning");
      return;
    }

    if (
      dataFormulario.medidascuarto.ancho === 0 ||
      dataFormulario.medidascuarto.largo === 0
    ) {
      mostrarAlerta("Campos invalidos", "warning");
      return;
    }

    route.push(`${match.url}/bano`);
  };

  const onChange = (e) => {
    const data = {
      ancho: parseInt(anchoRef.current.value),
      largo: parseInt(largoRef.current.value),
    };

    const medidasc = {
      target: {
        name: "medidascuarto",
        value: data,
      },
    };
    onDataChange(medidasc);
  };

  return (
    <>
      <div className="container min-vh-100  d-flex flex-column justify-content-center w-100  mt-5 mt-md-2 ">
        <ScrollToTopOnMount />
        <div className="row mt-4 ">
          <div className="col-lg-6 mx-4 mb-4  ">
            <form className="pt-5">
              <div className="row w-100 py-4 ">
                <h2 className="lead">¿Cuáles son las medidas del cuarto?</h2>
              </div>
              <form action="" onSubmit={nextPage}>
                <div class="row">
                  <div class="col-lg-4">
                    <label class="col-form-label" for="largo">
                      Largo
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="metros"
                      name="largo"
                      ref={largoRef}
                      value={dataFormulario.medidascuarto.largo}
                      id="largo"
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div class="row mt-4">
                  <div class="col-lg-4">
                    <label class="col-form-label" for="ancho">
                      Ancho
                    </label>
                    <input
                      type="number"
                      ref={anchoRef}
                      class="form-control"
                      value={dataFormulario.medidascuarto.ancho}
                      placeholder="metros"
                      name="ancho"
                      id="ancho"
                      onChange={onChange}
                    />
                  </div>
                </div>

                <div className="form-group pt-5">
                  <button type="submit" className="btn btn-outline-dark">
                    Continuar
                  </button>
                </div>
              </form>
            </form>
          </div>
          <div className="col-lg-5">
            <img src={img} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FormMedidasCuarto;
