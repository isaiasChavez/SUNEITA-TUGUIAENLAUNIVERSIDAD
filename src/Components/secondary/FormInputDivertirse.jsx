import React from "react";

const formInputDivertirse = () => {
  return (
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
  );
};

export default formInputDivertirse;
