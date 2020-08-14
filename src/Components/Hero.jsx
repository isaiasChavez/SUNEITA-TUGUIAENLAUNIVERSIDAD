import React from "react";

const Hero = ({setpaginaEnPrincipal}) => {
  return (
    <div class="jumbotron d-md-none m-0 min-vh-100 pt-5 mt-5 bg-light rounded-0 d-flex flex-column justify-content-start align-items-center hero ">
      <div className="d-flex flex-column align-items-center hero-message">
        <h1 class="display-4 m-3 text-center text-white">
          Busca un cuarto,{" "}
          <span className="text-primary">recibe un consejo</span>
        </h1>
        <p class="lead m-3 text-center text-white">
          La información que todo utemita necesita, centralizada.
        </p>
        <hr class="my-4" />
        <button className="btn btn-outline-light rounded-0 btn-lg w-50 font-weight-light"
        onClick={()=>{
          setpaginaEnPrincipal({
            consejos: false,
            rentas: true,
            dejarConsejo: false,
          });
        }}>
          {" "}
          Busca un cuarto{" "}
        </button>
      </div>
    </div>
  );
};

export default Hero;
