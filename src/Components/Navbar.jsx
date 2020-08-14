import React from "react";
import About from './About'
const Navbar = ({ setpaginaEnPrincipal }) => {
  const handleInicio = () => {
    setpaginaEnPrincipal({
      consejos: true,
      rentas: false,
      dejarConsejo: false,
    });
  };

  const handleRentas = () => {
    setpaginaEnPrincipal({
      consejos: false,
      rentas: true,
      dejarConsejo: false,
    });
  };

  const handleDejarConsejo = () => {
    setpaginaEnPrincipal({
      consejos: false,
      rentas: false,
      dejarConsejo: true,
    });
  };

  return (
    <>
      <div
        class="modal fade min-vw-100"
        id="staticBackdrop"
        data-backdrop="static"
        data-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Sobre este sitio
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body  ">
            <About
            handleDejarConsejo={handleDejarConsejo}/>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary btn-block"
                data-dismiss="modal"
                

              >
                Entiendo
              </button>
              
            </div>
          </div>
        </div>
      </div>

      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
        <a class="navbar-brand" href="#">
          <p className="display-5" onClick={handleInicio}>
            UTEMITA
          </p>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse offset-lg-7 border-bottom " id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link pb-3" href="#" onClick={handleInicio}>
                Inicio <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link  pb-3" href="#" onClick={handleRentas}>
                Renta un cuarto
              </a>
            </li>
            
            <li class="nav-item ">
              <a class="nav-link  pb-3" data-toggle="modal" data-target="#staticBackdrop" href="#" >
                Acerca de
              </a>
            </li>

            <li class="nav-item">
              <a
                href="#"
                class="btn btn-dark w-100 mb-2"
                onClick={handleDejarConsejo}
              >
                Deja un consejo
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
