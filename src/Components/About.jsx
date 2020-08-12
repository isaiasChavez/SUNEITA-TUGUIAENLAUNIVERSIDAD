import React from "react";

const About = ({handleDejarConsejo}) => {
  return (
    <div class="jumbotron">
      <h1 class="display-4">La información que necesita todo Utemita <span className='text-primary'>Centralizada</span></h1>
      <p class="lead">
        Ya no sufras corriendo todo el pueblo buscando numeros de caseros
      </p>
      <hr class="my-4" />
      <p>
        Este sitio tiene la intención de ayudar a todo aquel que necesite información para moverse por la zona universitaria.
        En principio buscamos centralizar información de cuartos en renta para los nuevos compañeros que nos acomparán en este 
        nuevo ciclo escolar y todos los venideros. Pero no significa que no pueda ser útil para cualquiera que ya lleve tiempo 
        aquí. 
        La información mostrada aquí es recopilación de todos los que quieran aportar su grano de arena. 
        Por el momento solo es información por parte de la experiencia de cada quien. Pero iremos solicitando información 
        de manos de los propios arrendatarios de los edificios en cuanto exista la oportunidad. 
        ¡Suerte a todos y esperemos este sitio sea de su utilidad!
      </p>
      <a class="btn btn-outline-dark btn-sm" data-dismiss="modal" onClick={handleDejarConsejo} href="#" role="button">
        Quiero dejar un consejo
      </a>
    </div>
  );
};

export default About;
