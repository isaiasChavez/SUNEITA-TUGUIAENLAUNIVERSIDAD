import React, { useState, useEffect } from "react";
import Consejo from "./Consejo";
import "./Consejos.css";
import Fade from "react-reveal/Fade";

const Consejos = ({ informacion, setInformacion,setpaginaEnPrincipal }) => {
  const [consejos, setConsejos] = useState([]);

  useEffect(() => {
    setConsejos(informacion);
  }, []);

  const handleRenta = () => {
    const nuevosDatos = informacion.filter((info) => {
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

    setConsejos(nuevosDatos);
  };

  const handleDiversion = () => {
    const nuevosDatos = informacion.filter((info) => {
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

    setConsejos(nuevosDatos);
  };

  const handleComida = () => {
    const nuevosDatos = informacion.filter((info) => {
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

    setConsejos(nuevosDatos);
  };
  const handleTodo = () => {
    setConsejos(informacion);
  };

  return (
    <div className=" container-fluid pt-5 contenerdor-principal ">
      <div className="row">
        <h2 className="lead display-5 ">Ultimos consejos</h2>
      </div>
      <div className="row ">
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
          {consejos.map((datos) => (
            <Consejo datos={datos} />
          ))}
        </div>
        <div className="row p-5">
          <button className="btn btn-outline-dark m-auto btn-lg btn-block"
            onClick={()=>{
              setpaginaEnPrincipal({
                consejos: false,
                rentas: false,
                dejarConsejo: true,
              })
            }}
           >
            {" "}
            Has un aporte
          </button>
        </div>
      </Fade>
    </div>
  );
};

export default Consejos;
