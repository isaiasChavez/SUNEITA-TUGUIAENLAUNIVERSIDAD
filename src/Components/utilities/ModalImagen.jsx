import React from "react";
import { useContext } from "react";
import BazarContext from "../../State/bazar/bazarContext";
import Loading from "./Loading";

const ModalBazar = () => {
  const { productoSeleccionado } = useContext(BazarContext);

  if (!productoSeleccionado) {
    return (
      <div
        class="modal fade "
        id="modalImagen"
        tabindex="-1"
        aria-labelledby="modalImagenLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <Loading />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      class="modal fade "
      id="modalImagen"
      tabindex="-1"
      aria-labelledby="modalImagenLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div className="modal-header">
            <h5 class="modal-title" id="modalImagenLabel">
              {productoSeleccionado.titulo}
            </h5>
          </div>
          <div class="modal-body">
            <div
              id={`id${productoSeleccionado.username}`}
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src={productoSeleccionado.imagenes[0].imageUrl}
                    class="d-block w-100 publicacionBazar-img  "
                    alt="..."
                  />
                </div>

                {productoSeleccionado.imagenes.map((imagen, index) => {
                  if (index == 0) {
                    return;
                  }
                  return (
                    <div class="carousel-item overflow-hidden">
                      <img
                        src={imagen.imageUrl}
                        class="d-block w-100 publicacionBazar-img  "
                        alt="..."
                      />
                    </div>
                  );
                })}
              </div>
              <a
                class="carousel-control-prev"
                href={`#id${productoSeleccionado.username}`}
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href={`#id${productoSeleccionado.username}`}
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBazar;
