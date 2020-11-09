import React from "react";
import img from "../../../img/fondo2.svg";
const About = ({ handleDejarConsejo }) => {
  return (
    <div class="jumbotron">
      <div className="container">
        <div class="card bg-transparent border-0">
          <img
            src={img}
            class="card-img-top img-fluid rounded-lg"
            style={{ height: "20em" }}
            alt="..."
          />
          <div class="card-body">
            <h1 class="display-4">
              La información <span className="text-primary">Centralizada</span>{" "}
              que todo Utemita necesita.{" "}
            </h1>
            <p class="lead">
              Ya no sufras corriendo todo el pueblo buscando numeros de caseros
            </p>
          </div>
        </div>
        <div className=" p-4 my-5">
          <hr class="my-4" />
          <p className="lead">
            Este sitio tiene la intención de ayudar a todo aquel que necesite
            información para moverse por la zona universitaria. En principio
            buscamos centralizar información de cuartos en renta para los nuevos
            compañeros que nos acomparán en este nuevo ciclo escolar y todos los
            venideros. Pero no significa que no pueda ser útil para cualquiera
            que ya lleve tiempo aquí. Quizá estas cansado de tu casero, quizá
            haya un lugar más adecuado para ti que no conoces.
            <br /> <br />
            Aquí encontrarás información de los diversos sitios para poder
            rentar cerca de la universidad. Adicionalmente agregamos una sección
            sobre <span className="text-info">"Bazar"</span>
            <hr />
            Estoy seguro que como utemita universitario tienes{" "}
            <span className="text-info">objetos</span> que utilizaste durante
            tus años de carrera y que por algún motivo ya no utilizarás. Ya sea
            porque has terminado tus años de estudio, quizá te mudarás a otro
            sitio y deseas renovar o, en el caso que nadie desea, quizá tengas
            que partir. Publica aquí tus productos, recuerda que puedes darle
            información no solo de venta en el momento y esto es lo interesante.
            Si crees que tu producto estará disponible no en el momento, pero en
            un futuro si (quizá porque terminarás tu tesis en un futuro) puedes
            publicarlo como{" "}
            <span>Disponible en 1 semana | 2 semanas | 1 mes</span>
            <br />
            ¡Suerte a todos y esperemos este sitio sea de su utilidad!
          </p>
        </div>

        <div className="btn-group d-flex justify-content-between">
          <a
            class="btn btn-outline-dark btn-lg"
            data-dismiss="modal"
            onClick={handleDejarConsejo}
            href="#!"
            role="button"
          >
            Quiero publicar en el bazar
          </a>
          <a
            class="btn btn-outline-dark btn-lg"
            data-dismiss="modal"
            onClick={handleDejarConsejo}
            href="#!"
            role="button"
          >
            Quiero publicar una renta
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
