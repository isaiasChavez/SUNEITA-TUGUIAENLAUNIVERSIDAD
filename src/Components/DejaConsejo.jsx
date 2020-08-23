import React, { useState } from "react";
import FormInputRentas from "./secondary/FormInputRentas";
import FormInputDivertirse from "./secondary/FormInputDivertirse";
import FormInputComer from "./secondary/FormInputComer";
import FormInputSimple from "./secondary/FormInputSimple";
import { db } from "../Firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const DejaConsejo = () => {
  const initialValue = {
    renta: false,
    simple: false,
    comer: false,
    divertirse: false,
  };

  const [tipoConsejo, setTipoConsejo] = useState({
    renta: true,
    simple: false,
    comer: false,
    divertirse: false,
  });
  const [switchAlert, setSwitchAlert] = useState(false);

  const initialState = {
    nombre: "",
    carrera: "",
    email: "",
    instagram: "",
    titulo: "",
    resena: "",
    rentar: false,
    comer: false,
    divertirse: false,
    simple: false,
    direccion: "",
    servicios: "",
    precio1: 0,
    precio2: 0,
    contacto: "",
    distancia: "",
  };

  const [datos, setDatos] = useState(initialState);

  const { nombre, carrera, email, instagram } = datos;

  const handleDatos = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmitConsejos = async (e) => {
    e.preventDefault();

    if (tipoConsejo.comer) datos.comer = true;
    else if (tipoConsejo.divertirse) datos.divertirse = true;
    else if (tipoConsejo.renta) datos.rentar = true;
    else datos.simple = true;

    try {
      const data = await db.collection("consejosRentas").doc().set(datos);
      getLinks();
      toast("Listo, Recomendación agregada!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setDatos(initialState);
    } catch (error) {
      toast.error("Ha ocurrido un error interno! Por favor intenta de nuevo", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const getLinks = () => {
    db.collection("consejosRentas").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
        console.log(docs);
      });
    });
  };

  const handleButtonsForms = (e) => {
    setTipoConsejo({ ...initialValue, [e.target.name]: true });
  };

  return (
    <>
      <div className="row d-flex justify-content-center pt-4">
        <div class="jumbotron col-lg-12 m-0  bg-white rounded-0 d-flex flex-column justify-content-start align-items-center ">
          <div className="d-flex flex-column align-items-center hero-message">
            <h3 class="h1 font-weight-light m-3 text-center">
              Tu aportación podría salvarle le vida a un utemita
            </h3>
          </div>
        </div>

        <form
          className="col-lg-8  mb-5 bg-light p-4 pt-5  rounded"
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmitConsejos}
        >
          <input type="hidden" name="form-name" value="contact" />
          <div class="form-group">
            <label for="nombre">Nombre</label>
            <input
              type="text"
              class="form-control"
              id="nombre"
              aria-describedby="emailHelp"
              name="nombre"
              onChange={handleDatos}
              value={nombre}
            />
            <div class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="anonimo"
                name="anonimo"
              />
              <label class="form-check-label" for="avisoprivacidad">
                <small class="form-text text-muted">Anonimo</small>
              </label>
            </div>
          </div>
          <div class="form-group">
            <label for="carrera" className="d-block">
              Carrera
            </label>
            <input
              type="text"
              class="form-control w-50 d-inline"
              id="carrera"
              aria-describedby="emailHelp"
              name="carrera"
              onChange={handleDatos}
              value={carrera}
              required
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              name="email"
              onChange={handleDatos}
              required
              value={email}
            />
            <small id="emailHelp" class="form-text text-muted">
              Nunca compartiremos tu email con nadie
            </small>
          </div>
          <div class="form-group">
            <label for="instagram">Instagram (opcional)</label>
            <input
              type="text"
              class="form-control"
              id="instagram"
              aria-describedby="emailHelp"
              placeholder="@"
              name="instagram"
              onChange={handleDatos}
              value={instagram}
            />
          </div>

          <div className="btn-group d-flex ">
            <button
              className="btn btn-outline-dark  mt-4 mb-4"
              name="divertirse"
              onClick={handleButtonsForms}
            >
              Donde divertirte
            </button>
            <button
              className="btn btn-outline-dark border-left-0  mt-4 mb-4"
              name="comer"
              onClick={handleButtonsForms}
            >
              Donde comer
            </button>
            <button
              className="btn btn-outline-dark border-left-0  mt-4 mb-4 "
              name="simple"
              onClick={handleButtonsForms}
            >
              Un simple consejo
            </button>
            <button
              className="btn btn-outline-dark border-left-0  mt-4 mb-4"
              name="renta"
              onClick={handleButtonsForms}
            >
              Rentas
            </button>
          </div>
          {tipoConsejo.renta ? (
            <FormInputRentas datos={datos} handleDatos={handleDatos} />
          ) : null}

          {tipoConsejo.divertirse ? <FormInputDivertirse /> : null}

          {tipoConsejo.comer ? <FormInputComer /> : null}

          {tipoConsejo.simple ? <FormInputSimple /> : null}

          <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="avisoprivacidad"
              name="avisoprivacidad"
            />
            <label class="form-check-label" for="avisoprivacidad">
              Estoy de acuerdo en compartir esto con otros utemitas
            </label>
          </div>

          <button
            type="submit"
            class="btn btn-outline-info btn-block p-3 m-auto"
          >
            <span className="h3 font-weight-light">Aportar</span>
          </button>
        </form>
      </div>
    </>
  );
};

export default DejaConsejo;
