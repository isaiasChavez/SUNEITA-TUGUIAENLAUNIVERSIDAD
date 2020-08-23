import React from "react";
import img from "../img/info.jpg";
const About = ({ handleDejarConsejo }) => {
  return (
    <div class="jumbotron">
      <div class="card bg-transparent border-0">
        <img src={img} class="card-img-top img-fluid rounded-lg"  style={{ height: '20em' }} alt="..." />
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

      <hr class="my-4" />
      <p className="lead">
        Este sitio tiene la intención de ayudar a todo aquel que necesite
        información para moverse por la zona universitaria. En principio
        buscamos centralizar información de cuartos en renta para los nuevos
        compañeros que nos acomparán en este nuevo ciclo escolar y todos los
        venideros. Pero no significa que no pueda ser útil para cualquiera que
        ya lleve tiempo aquí. Quizá estas cansado de tu casero, quizá haya un
        lugar más adecuado para ti que no conoces.
        <br /> <br />
        La información mostrada aquí es recopilación de todos los que quieran
        aportar su grano de arena. Por el momento solo es información por parte
        de la experiencia de cada quien. Pero iremos solicitando información de
        manos de los propios arrendatarios de los edificios en cuanto exista la
        oportunidad. <br />
        <br />
        Adicionalmente agregamos una sección sobre{" "}
        <span className="text-info">"Donde comer"</span> ,{" "}
        <span className="text-info">"Donde divertirse"</span> y{" "}
        <span className="text-info">"Un simple consejo"</span>, estoy seguro que
        como utemita universitario te gustaría saber de los muchos lugares donde
        relajarte después de una estresante semana de examenes. <br />
        Quizá haya lugares de los cuales no sabías incluso aunque lleves aquí
        toda la carrera. Puedes aportar lo que tu sepas, quizá información de
        precios, trucos, experiencias. <br />
        Si tienes algo que aportar y no entra en las dos categorias pero crees
        que puede salvarle la vida a alguien aportalo en{" "}
        <span className="text-info">un simple consejo </span>
        Si crees que es importante pero no quieres compartir tu nombre no hay
        problema, da click en la opcion{" "}
        <span className="text-info">anonimo</span>
        <br />
        ¡Suerte a todos y esperemos este sitio sea de su utilidad!
      </p>
      <a
        class="btn btn-outline-dark btn-lg"
        data-dismiss="modal"
        onClick={handleDejarConsejo}
        href="#!"
        role="button"
      >
        Quiero dejar un consejo
      </a>
    </div>
  );
};

export default About;
