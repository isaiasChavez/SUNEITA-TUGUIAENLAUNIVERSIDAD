import React from "react";
const Nothing = (props) => {
  const irInicio = () => {
    props.history.push("/");
  };

  return (
    <div className="container min-vh-100 d-flex flex-column align-items-center justify-content-center">
      <div>Nada por aquí,ingresa una ruta valida</div>
      <button onClick={irInicio} className="btn btn-outline-dark">
        Ir al inicio
      </button>
    </div>
  );
};

export default Nothing;
