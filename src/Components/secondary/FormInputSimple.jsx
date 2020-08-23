import React from "react";

const FormInputSimple = () => {
  return (
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
  );
};

export default FormInputSimple;
