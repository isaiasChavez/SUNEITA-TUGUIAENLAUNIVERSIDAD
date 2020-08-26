import React, { useState, Fragment, useContext } from "react";
import Renta from "./Renta";
import Footer from "./Footer";
import Hero from "./Hero";
import rentasContext from "../State/rentasContext";

import { Link } from "react-router-dom";

const Rentas = () => {
  
  const { rentas } = useContext(rentasContext);

  return (
    <Fragment>
      <Hero
        principal="Escoje lo que se adapte a ti"
        secondary=" Busca el cuarto que se adapte a tus necesidades, estarás aquí un buen tiempo."
        class={""}
        textButton="¿No estás seguro?"
        textButton2="Lee los recomendaciones publicadas"
        button="Ir a recomendaciones"
        link="consejos"
      />

      <div className="infoInicio row d-flex justify-content-around text-center p-4 m-5">
        <button className=" lead col-lg-3 m-4 shadow p-3 mb-5 bg-white rounded-lg">
          <span class="material-icons  text-dark icon">house</span>
          <p className=" text-dark">Casas completas</p>
        </button>
        <button className=" lead col-lg-3 m-4 shadow p-3 mb-5 bg-white rounded-lg">
          <span class="material-icons icon">domain</span>
          <p>Departamentos</p>
        </button>
        <button className=" lead col-lg-3 m-4 shadow p-3 mb-5 bg-white rounded-lg">
          <span class="material-icons icon">check_box_outline_blank</span>
          <p>Habitaciones</p>
        </button>
      </div>
      <div className="container">
        <div className="h3 lead py-5 justify-content-around">
          {" "}
          Ultimos lugares publicados
        </div>
        <div class=" row d-flex">
          {rentas.map((renta) => (
            <Renta renta={renta} />
          ))}
        </div>
      </div>
      <div className=" lead text-center py-5">
        <p>
          Recuerda que estos son aportes de Utemitas, las condiciones pueden
          variar cuando contactes al locatario.
        </p>
        <p className="">En un futuro tendremos información de primera mano</p>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Rentas;
