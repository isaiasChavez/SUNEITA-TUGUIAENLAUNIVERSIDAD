import React, { useState, useEffect, useContext, Fragment } from "react";
import Consejo from "./ProductoBazar";
import Fade from "react-reveal/Fade";
import bazarContext from "../../../State/bazar/bazarContext";

import Hero from "../layout/Hero";

const Consejos = () => {
  const { publicacionesBazar } = useContext(bazarContext);
  console.log(publicacionesBazar);
  return (
    <Fragment>
      <Hero
        principal="Vende algo que ya no ocupas"
        secondary="Quizá le sea util a alguien que aún está en el camino"
        button="Publica un anuncio"
        link="publicarenbazar"
      />

      <div className=" container-fluid pt-5  ">
        <div className="row justify-content-around py-5">
          <h2 className="lead display-5 px-5 text-center  ">
            Ultimos publicaciones de <span>Estudiantes</span>
          </h2>
        </div>
        <div className="row pb-5 ">
          <div
            class="btn-group col-lg-4 offset-lg-4 p-4 botones-principal"
            role="group"
            aria-label="Basic example"
          >
            <button type="button" class="btn btn-outline-dark">
              Todo
            </button>
            <button type="button" class="btn btn-outline-dark">
              Comer
            </button>
            <button type="button" class="btn btn-outline-dark">
              Divertirse
            </button>

            <button type="button" class="btn btn-dark ">
              Rentar
            </button>
          </div>
        </div>
        <Fade>
          <div className="row d-flex justify-content-around">
            {publicacionesBazar.map((datos) => (
              <Consejo datos={datos} />
            ))}
          </div>
          <div className="row p-5">
            <button className="btn btn-outline-dark w-50 m-auto btn-lg btn-block">
              Publica algo
            </button>
          </div>
        </Fade>
      </div>
    </Fragment>
  );
};

export default Consejos;
