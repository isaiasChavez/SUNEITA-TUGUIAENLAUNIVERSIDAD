import React, { useContext } from "react";
import AlertasContext from "../../../../State/alertas/alertasContext";

const FormDescripcion = ({ onDataChange, dataFormulario, route }) => {
  const alertasContext = useContext(AlertasContext);
  const { mostrarAlerta } = alertasContext;

  const nextPage = (e) => {
    e.preventDefault();
    //Se evalua cuantas zonas fueron marcadas para no dejar vacio el campo
    //Se da la oportunidad de dejar sola la publicación
    if (
      dataFormulario.titulo === "" ||
      dataFormulario.descripcion === "" ||
      dataFormulario.contacto === ""
    ) {
      mostrarAlerta("Hay campos vacios");
      return;
    }
    if (dataFormulario.contacto.length > 15) {
      mostrarAlerta("Coloca un contacto valido");
      return;
    }
    route.push(`/crearPublicacion/confirm`);
  };

  return (
    <>
      <div className="container min-vh-100  d-flex flex-column justify-content-center w-100 ">
        <div className="row mt-5 pt-5 ">
          <div className="col-lg-8 ">
            <form action="" onSubmit={nextPage}>
              <div className="row w-100">
                <h2 className="h4 ml-3">
                  Coloca un título para tu publicación
                </h2>
              </div>
              <div class="  mt-3">
                <input
                  type="text"
                  class="form-control"
                  id="titulopublicacion"
                  placeholder="Cuarto con todos los servicios al frente de la universidad"
                  name="titulo"
                  value={dataFormulario.titulo}
                  onChange={onDataChange}
                />
              </div>
              <div className="row w-100 pt-4 ">
                <h2 className="h4 ml-3 ">Coloca una descripción</h2>
              </div>
              <div class="ml-0 mt-3">
                <textarea
                  placeholder="El cuarto se encuentra en... tiene... lo cual permite..."
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="descripcion"
                  value={dataFormulario.descripcion}
                  onChange={onDataChange}
                ></textarea>
              </div>
              <div className="row w-100 pt-4 ">
                <h2 className="h4 ml-3 ">
                  Coloca el número al que te gustaría que te contactaran
                </h2>
                <span className="text-muted mt-2 text-smaller ml-3">
                  También te podrán llegar mensajes al correo que proporcionaste
                  en tu registro
                </span>
              </div>
              <div class="ml-0 mt-3">
                <input
                  type="number"
                  name="contacto"
                  class="form-control quitarcontroles"
                  id="exampleFormControlInput1"
                  onChange={onDataChange}
                />
              </div>

              <div className="form-group pt-5">
                <button type="submit" className="btn btn-outline-dark">
                  Terminar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormDescripcion;
