import React, { Fragment } from "react";

const Form4 = ({ onDataChange, dataFormulario, route }) => {
  const nextPage = (e) => {
    e.preventDefault();
    //Se evalua cuantas zonas fueron marcadas para no dejar vacio el campo
    //Se da la oportunidad de dejar sola la publicación
    if (
      dataFormulario.direccion === "" ||
      dataFormulario.ciudad === "" ||
      dataFormulario.estado === "" ||
      dataFormulario.codigopostal === ""
    ) {
      alert("Hay campos invalidos");
      return;
    }
    route.push("/profile");
  };

  return (
    <Fragment>
      <div className="container min-vh-100  d-flex flex-column justify-content-center w-100 ">
        <div className="row ">
          <div className="col-lg-8 ">
            <div className="row w-100">
              <h2>¿Dónde está ubicado?</h2>
            </div>

            <form className="my-5" onSubmit={nextPage}>
              <div class="form-group">
                <label for="inputAddress">Dirección</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                  name="direccion"
                  onChange={onDataChange}
                />
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputCity">Ciudad</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputCity"
                    name="ciudad"
                    onChange={onDataChange}
                  />
                </div>
                <div class="form-group col-md-4">
                  <label for="inputState">Estado</label>
                  <select
                    id="inputState"
                    class="form-control"
                    name="estado"
                    onChange={onDataChange}
                  >
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
                    name="codigopostal"
                    onChange={onDataChange}
                  />
                </div>
              </div>

              <div className="form-group pt-5">
                <button onClick={nextPage} className="btn btn-outline-dark">
                  Terminar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Form4;
