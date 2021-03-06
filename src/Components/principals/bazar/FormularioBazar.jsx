import React, { useState, useContext } from "react";
import img from "../../../img/great-idea.svg";
import { NUEVO, SEMINUEVO, BUEN_ESTADO, ACEPTABLE } from "../../../types";
import {
  MUEBLES,
  ELECTRODOMESTICOS,
  ELECTRONICA,
  HOGAR,
  MATERIAL_ESCOLAR,
} from "../../../types";
import AlertasContext from "../../../State/alertas/alertasContext";
import BazarContext from "../../../State/bazar/bazarContext";

const FormularioBazar = () => {
  const { mostrarAlerta } = useContext(AlertasContext);
  const { obtenerProductos, agregarProducto } = useContext(BazarContext);
  const initiaState = {
    titulo: "",
    precio: "",
    descripcion: "",
    estado: "",
    categoria: "",
    activa: true,
    imagenes: null,
  };

  const [stateFormBazar, setStateFormBazar] = useState(initiaState);

  const onInputFormChange = (e) => {
    if (e.target.name === "imagenes") {
      setStateFormBazar({
        ...stateFormBazar,
        [e.target.name]: e.target.files,
      });

      return;
    }
    setStateFormBazar({ ...stateFormBazar, [e.target.name]: e.target.value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (
      (stateFormBazar.titulo === "" ||
        stateFormBazar.precio === "" ||
        stateFormBazar.precio === null ||
        stateFormBazar.descripcion === "" ||
        stateFormBazar.estado === "",
      stateFormBazar.categoria === "")
    ) {
      mostrarAlerta("Hay campos no validos", "warning");
    }
    if (stateFormBazar.imagenes.length > 3) {
      mostrarAlerta("No se pueden subir más de 3 imagenes");
    }
    if (stateFormBazar.imagenes.length <= 0) {
      mostrarAlerta("Debes seleccionar al menos una imagen");
    }
    agregarProducto(stateFormBazar);
    setStateFormBazar(initiaState);
  };

  return (
    <div className="container min-vh-100  d-flex flex-column justify-content-center w-100 mt-4 mb-5 pt-5">
      <div className="row  my-5 mx-1">
        <div className="col-lg-7 ">
          <div className="row w-100 my-4">
            <h2>Hola, vamos a crear el anuncio</h2>
          </div>

          <form action="" onSubmit={onSubmitForm} encType="multipart/form-data">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">
                  Titulo
                </span>
              </div>
              <input
                type="text"
                name="titulo"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                onChange={onInputFormChange}
                value={stateFormBazar.titulo}
              />
            </div>

            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">Precio</span>
                <span class="input-group-text">$</span>
              </div>
              <input
                name="precio"
                type="number"
                class="form-control"
                value={stateFormBazar.precio}
                aria-label="Dollar amount (with dot and two decimal places)"
                onChange={onInputFormChange}
              />
            </div>

            <div class="form-group">
              <label for="exampleFormControlTextarea1">Descripcion</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="descripcion"
                value={stateFormBazar.descripcion}
                onChange={onInputFormChange}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="estado">Estado</label>
              <select
                class="form-control"
                id="estado"
                name="estado"
                value={stateFormBazar.estado}
                onChange={onInputFormChange}
              >
                <option selected>Selecciona</option>
                <option value={NUEVO}>Nuevo</option>
                <option value={SEMINUEVO}>Usado - Como Nuevo</option>
                <option value={BUEN_ESTADO}>Buen estado</option>
                <option value={ACEPTABLE}>Aceptable</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="categoria">Categoria</label>
              <select
                value={stateFormBazar.categoria}
                onChange={onInputFormChange}
                name="categoria"
                className="form-control"
                id="categoria"
              >
                <option value="" selected>
                  Selecciona
                </option>
                <option value={MUEBLES}>Muebles</option>
                <option value={ELECTRONICA}>Electronica e informatica</option>
                <option value={ELECTRODOMESTICOS}>Electrodomesticos</option>
                <option value={HOGAR}>Hogar</option>
                <option value={MATERIAL_ESCOLAR}>Material escolar</option>
              </select>
            </div>

            {/* Seleccionar el archivo */}
            <div class="input-group my-5 ">
              <div class="custom-file">
                <input
                  type="file"
                  accept="image/gif, image/png, image/jpeg"
                  class="custom-file-input"
                  id="inputGroupFile01"
                  aria-describedby="inputGroupFileAddon01"
                  name="imagenes"
                  onChange={onInputFormChange}
                  multiple
                />
                <label class="custom-file-label" for="inputGroupFile01">
                  {stateFormBazar.imagenes ? (
                    <div className="">
                      {stateFormBazar.imagenes.length > 3 ? (
                        <p className="text-danger">
                          No puedes seleccionar mas de 3 imagenes
                        </p>
                      ) : (
                        <p>
                          {stateFormBazar.imagenes.length} de 3 imagenes
                          seleccionadas
                        </p>
                      )}
                    </div>
                  ) : (
                    "seleccione 3 imagenes"
                  )}
                </label>
              </div>
            </div>

            <div className="form-group pt-5">
              <button type="submit" className="btn btn-outline-dark btn-block">
                Publicar
              </button>
            </div>
          </form>
        </div>
        <div className="col-lg-5 my-5">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FormularioBazar;
