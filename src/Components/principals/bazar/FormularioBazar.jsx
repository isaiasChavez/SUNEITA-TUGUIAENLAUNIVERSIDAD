import React, { useState } from "react";
import img from "../../../img/great-idea.svg";
import { NUEVO, SEMINUEVO, BUEN_ESTADO, ACEPTABLE } from "../../../types";
import { MUEBLES, ELECTRODOMESTICOS, ELECTRONICA, HOGAR } from "../../../types";
import AlertasContext from "../../../State/alertas/alertasContext";

const FormularioBazar = () => {
  const { mostrarAlerta } = AlertasContext;
  const initiaState = {
    titulo: "",
    precio: "",
    descripcion: "",
    estadobazar: "",
    categoriabazar: "",
    imagenportadabazar: null,
  };

  const [stateFormBazar, setStateFormBazar] = useState(initiaState);

  const onInputFormChange = (e) => {
    setStateFormBazar({ ...stateFormBazar, [e.target.name]: e.target.value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (
      (stateFormBazar.titulo === "" ||
        stateFormBazar.precio === "" ||
        stateFormBazar.precio === null ||
        stateFormBazar.descripcion === "" ||
        stateFormBazar.estadobazar === "",
      stateFormBazar.categoriabazar === "")
    ) {
      mostrarAlerta("Hay campos no validos");
    }

    setStateFormBazar(initiaState);
  };

  return (
    <div className="container min-vh-100  d-flex flex-column justify-content-center w-100 mt-5 pt-5">
      <div className="row  my-5">
        <div className="col-lg-7 ">
          <div className="row w-100 my-4">
            <h2>Hola, vamos a crear el anuncio</h2>
          </div>

          <form action="" onSubmit={onSubmitForm}>
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
              <label htmlFor="estadobazar">Estado</label>
              <select
                class="form-control"
                id="estadobazar"
                name="estadobazar"
                value={stateFormBazar.estadobazar}
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
              <label htmlFor="categoriabazar">Categoria</label>
              <select
                value={stateFormBazar.categoriabazar}
                onChange={onInputFormChange}
                name="categoriabazar"
                className="form-control"
                id="categoriabazar"
              >
                <option value="" selected>
                  Selecciona
                </option>
                <option value={MUEBLES}>Muebles</option>
                <option value={ELECTRONICA}>Electronica e informatica</option>
                <option value={ELECTRODOMESTICOS}>Electrodomesticos</option>
                <option value={HOGAR}>Hogar</option>
              </select>
            </div>

            {/* Seleccionar el archivo */}
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupFileAddon01">
                  Selecciona la imagen de portada
                </span>
              </div>
              <div class="custom-file">
                <input
                  type="file"
                  class="custom-file-input"
                  id="inputGroupFile01"
                  onChange={onInputFormChange}
                  value={stateFormBazar.imagenportada}
                  aria-describedby="inputGroupFileAddon01"
                  name="imagenportadabazar"
                />
                <label class="custom-file-label" for="inputGroupFile01">
                  Seleccionar
                </label>
              </div>
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupFileAddon01">
                  Selecciona una imagen
                </span>
              </div>
              <div class="custom-file">
                <input
                  type="file"
                  class="custom-file-input"
                  id="inputGroupFile01"
                  aria-describedby="inputGroupFileAddon01"
                />
                <label class="custom-file-label" for="inputGroupFile01">
                  Seleccionar
                </label>
              </div>
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupFileAddon01">
                  Selecciona una imagen
                </span>
              </div>
              <div class="custom-file">
                <input
                  type="file"
                  class="custom-file-input"
                  id="inputGroupFile01"
                  aria-describedby="inputGroupFileAddon01"
                />
                <label class="custom-file-label" for="inputGroupFile01">
                  Seleccionar
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
        <div className="col-lg-5">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FormularioBazar;
