import React from "react";

const FormInputRentas = ({ datos, handleDatos }) => {
  const {
    titulo,
    resena,
    rentar,
    comer,
    divertirse,
    simple,
    direccion,
    servicios,
    precio1,
    precio2,
    contacto,
    distancia,
  } = datos;
  return (
    <div class="form-group bg-dark rounded p-4 text-white lead">
      <label for="rentar">Titulo </label>
      <input
        type="text"
        class="form-control d-inline"
        id="Titulo"
        aria-describedby="emailHelp"
        name="titulo"
        placeholder=""
        onChange={handleDatos}
        value={titulo}
      />
      <label for="rentar">Reseña </label>
      <textarea
        class="form-control"
        id="resena"
        rows="5"
        name="resena"
        placeholder="Son muy amables y me hicieron descuento en la pandemia"
        onChange={handleDatos}
        value={resena}
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
        value={direccion}
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
        value={precio1}
      />
      <input
        type="number"
        class="form-control w-50 d-inline"
        id="precio2"
        aria-describedby="emailHelp"
        name="precio2"
        onChange={handleDatos}
        value={precio2}
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
        value={servicios}
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
        value={contacto}
      />
      <label for="contacto2" className="font-weight-light ">
        Distancia a la universidad (minutos)
      </label>
      <input
        type="number"
        class="form-control"
        id="distancia"
        aria-describedby="emailHelp"
        name="distancia"
        onChange={handleDatos}
        placeholder=""
        value={distancia}
      />
      <small id="emailHelp" class="form-text text-muted">
        No olvides dejar una dirección, números de los caseros, rango de precios
        (o el tuyo) y los servicios que ofrecen. Estoy seguro que existe un
        utemita que te lo agradecerá.
      </small>
    </div>
  );
};

export default FormInputRentas;
