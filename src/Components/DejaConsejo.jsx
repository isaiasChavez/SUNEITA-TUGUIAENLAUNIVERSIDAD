import React, { useState } from "react";
import Consejo from "./Consejo";
const DejaConsejo = () => {
  const [tipoConsejo, setTipoConsejo] = useState({
    renta: true,
    simple: false,
    comer: false,
    divertirse: false,
  });


  const [datos, setDatos] = useState({
    nombre:'',
    carrera:'',
    email:'',
    instagram:'',
    titulo : '',
    rentar:'',
    comer:'',
    divertirse:'',
    simple:'',
    direccion:'',
    distancia:'',
    precio1: 0,
    precio2:0,
    servicios:'',
    numero1:'',
    numero2:''
  })
  const handleDatos = (e)=>{
    
    setDatos({
      ...datos,
      [e.target.name]:e.target.value
    })

  }
  const handleSubmitConsejos = (e)=>{
      e.preventDefault()
  }



  const handleDivertirse = () => {
    setTipoConsejo({
      renta: false,
      simple: false,
      comer: false,
      divertirse: true,
    });
  };

  const handleComer = () => {
    setTipoConsejo({
      renta: false,
      simple: false,
      comer: true,
      divertirse: false,
    });
  };

  const handleSimple = () => {
    setTipoConsejo({
      renta: false,
      simple: true,
      comer: false,
      divertirse: false,
    });
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
              name="name"
              onChange={handleDatos}
            />
            <div class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="avisoprivacidad"
                name="avisoprivacidad"
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
            />
          </div>

          <div className="btn-group d-flex ">
            <button
              className="btn btn-outline-dark  mt-4 mb-4"
              onClick={handleDivertirse}
            >
              Donde divertirte
            </button>
            <button
              className="btn btn-outline-dark border-left-0  mt-4 mb-4"
              onClick={handleComer}
            >
              Donde comer
            </button>
            <button
              className="btn btn-outline-dark border-left-0  mt-4 mb-4"
              onClick={handleSimple}
            >
              Un simple consejo
            </button>
          </div>
          {tipoConsejo.renta ? (
            <div class="form-group bg-dark rounded p-4 text-white lead">
              <label for="rentar">Titulo </label>
              <input
                type="text"
                class="form-control d-inline"
                id="Titulo"
                aria-describedby="emailHelp"
                name="Titulo"
                placeholder=""
                onChange={handleDatos}
                
              />
              <label for="rentar">Reseña </label>
              <textarea
                class="form-control"
                
                id="rentar"
                rows="5"
                name="rentar"
                placeholder="Son muy amables y me hicieron descuento en la pandemia"
                onChange={handleDatos}
              ></textarea>
              <label for="direccion" className="font-weight-light d-block">
                Dirección
              </label>
              <input
                type="text"
                class="form-control d-inline"
                id="direccion"
                aria-describedby="emailHelp"
                name="direccion"
                onChange={handleDatos}
              />
              <label for="rango_precios" className="font-weight-light d-block">
                Rango de precios
              </label>
              <input
                type="number"
                class="form-control w-50 d-inline"
                id="precio1"
                aria-describedby="emailHelp"
                name="precio1"
                onChange={handleDatos}
              />
              <input
                type="number"
                class="form-control w-50 d-inline"
                id="precio2"
                aria-describedby="emailHelp"
                name="precio2"
                onChange={handleDatos}
              />
              <label for="servicios" className="font-weight-light ">
                Servicios que he visto
              </label>
              <input
                type="text"
                class="form-control"
                id="servicios"
                aria-describedby="emailHelp"
                name="servicios"
                onChange={handleDatos}
              />
              <label for="contacto" className="font-weight-light ">
                Número de contacto
              </label>
              <input
                type="number"
                class="form-control"
                id="numero1"
                aria-describedby="emailHelp"
                name="contacto"
                onChange={handleDatos}
              />
              <label for="contacto2" className="font-weight-light ">
                Número de contacto 2 (opcional)
              </label>
              <input
                type="number"
                class="form-control"
                id="numero2"
                aria-describedby="emailHelp"
                name="contacto2"
                onChange={handleDatos}
              />
              <small id="emailHelp" class="form-text text-muted">
                No olvides dejar una dirección, números de los caseros, rango de
                precios (o el tuyo) y los servicios que ofrecen. Estoy seguro
                que existe un utemita que te lo agradecerá.
              </small>
            </div>
          ) : null}

          {tipoConsejo.divertirse ? (
            <div class="form-group bg-info rounded p-4 text-white lead">
              <label for="rentar">Titulo </label>
              <input
                type="text"
                class="form-control d-inline"
                id="Titulo"
                aria-describedby="emailHelp"
                name="Titulo"
                placeholder=""
              />
              <label for="rentar">Consejo </label>
              <textarea
                class="form-control"
                id="divertirse"
                rows="3"
                name="divertirse"
                
              ></textarea>
              
            </div>
          ) : null}

          {tipoConsejo.comer ? (
            <div class="form-group bg-danger rounded p-4 text-white lead">
              <label for="rentar">Titulo </label>
              <input
                type="text"
                class="form-control d-inline"
                id="titulo"
                aria-describedby="emailHelp"
                name="titulo"
                placeholder=""
              />
              <label for="comer">Consejo </label>
              <textarea
                class="form-control"
                id="comer"
                rows="3"
                name="comer"
               
              ></textarea>
          
            </div>
          ) : null}

          {tipoConsejo.simple ? (
            <div class="form-group bg-secondary rounded p-4 text-white lead">
              <label for="rentar">Titulo </label>
              <input
                type="text"
                class="form-control d-inline"
                id="titulo"
                aria-describedby="emailHelp"
                name="titulo"
                placeholder=""
              />
              <label for="rentar">Consejo </label>
              <textarea
                class="form-control"
                id="simple"
                rows="3"
                name="simple"
              ></textarea>
            </div>
          ) : null}

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

          <a type="submit" class="btn btn-outline-info btn-block p-3 m-auto  ">
            <span className="h3 font-weight-light">Aportar</span>
          </a>
        </form>
      </div>
    </>
  );
};

export default DejaConsejo;
