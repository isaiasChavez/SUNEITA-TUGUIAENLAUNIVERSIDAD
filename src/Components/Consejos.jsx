import React, { useState, useEffect, useContext, Fragment } from "react";
import Consejo from "./Consejo";
import "./Consejos.css";
import Fade from "react-reveal/Fade";
import consejosContext from "../State/consejosContext";

import Hero from "./Hero";

const Consejos = () => {
  const { consejos } = useContext(consejosContext);

  const [info, setInfo] = useState([]);

  const handleRenta = () => {
    const nuevosDatos = consejos.filter((info) => {
      let nuevo = {};
      if (info.tipo === "rentar") {
        const {
          nombre,
          tipo,
          semestre,
          carrera,
          instagram,
          fecha,
          consejo,
          datosRenta,
        } = info;
        nuevo = {
          nombre,
          tipo,
          semestre,
          carrera,
          instagram,
          fecha,
          consejo,
          datosRenta,
        };
        return nuevo;
      }
    });

    setInfo(nuevosDatos);
  };
  useEffect(() => {
    handleRenta();
  }, []);

  const handleDiversion = () => {
    const nuevosDatos = consejos.filter((info) => {
      let nuevo = {};
      if (info.tipo === "visitar") {
        const {
          nombre,
          tipo,
          semestre,
          carrera,
          instagram,
          fecha,
          consejo,
          datosRenta,
        } = info;
        nuevo = {
          nombre,
          tipo,
          semestre,
          carrera,
          instagram,
          fecha,
          consejo,
          datosRenta,
        };
        return nuevo;
      }
    });

    setInfo(nuevosDatos);
  };

  const handleComida = () => {
    console.log("comida");
    const nuevosDatos = consejos.filter((info) => {
      let nuevo = {};
      if (info.tipo === "comer") {
        const {
          nombre,
          tipo,
          semestre,
          carrera,
          instagram,
          fecha,
          consejo,
          datosRenta,
        } = info;
        nuevo = {
          nombre,
          tipo,
          semestre,
          carrera,
          instagram,
          fecha,
          consejo,
          datosRenta,
        };
        return nuevo;
      }
    });

    setInfo(nuevosDatos);
  };
  const handleTodo = () => {
    setInfo(consejos);
  };

  return (
    <Fragment>
      <Hero principal='Siempre hay algo que aprender'
        secondary='O quizá puedas enseñar algo que le ahorre mucha vida a alguien más'
        button='Dejar una recomendación'
        link='dejarconsejo'
      />
      <div className=" container-fluid pt-5 contenerdor-principal ">
        

        <div className="row justify-content-around py-5">
          <h2 className="lead display-5  ">
            Ultimos recomendaciones de <span>Estudiantes</span>
          </h2>
        </div>
        <div className="row pb-5 ">
          <div
            class="btn-group col-lg-4 offset-lg-4 p-4 botones-principal"
            role="group"
            aria-label="Basic example"
          >
            <button
              type="button"
              class="btn btn-outline-dark"
              onClick={handleTodo}
            >
              Todo
            </button>
            <button
              type="button"
              class="btn btn-outline-dark"
              onClick={handleComida}
            >
              Comer
            </button>
            <button
              type="button"
              class="btn btn-outline-dark"
              onClick={handleDiversion}
            >
              Divertirse
            </button>

            <button type="button" class="btn btn-dark " onClick={handleRenta}>
              Rentar
            </button>
          </div>
        </div>
        <Fade>
          <div className=" row  justify-content-around align-items">
            {info.map((datos) => (
              <Consejo datos={datos} />
            ))}
          </div>
          <div className="row p-5">
            <button className="btn btn-outline-dark w-50 m-auto btn-lg btn-block">
              Dejar una recomendación
            </button>
          </div>
        </Fade>
      </div>
    </Fragment>
  );
};

export default Consejos;
