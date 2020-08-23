import React from "react";

const FormInputComer = () => {
  return (
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
  );
};

export default FormInputComer;
