import React from "react";

const ModalBazar = ({ data }) => {
  return (
    <div
      class="modal fade "
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div className="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              ¿Seguro que quieres eliminarlo?
            </h5>
          </div>
          <div class="modal-body">
            <div
              id={`id${data.username}`}
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src={data.imagenes[0]}
                    class="d-block w-100 publicacionBazar-img  "
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src={data.imagenes[0]}
                    class="d-block w-100 publicacionBazar-img "
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src={data.imagenes[0]}
                    class="d-block w-100 publicacionBazar-img "
                    alt="..."
                  />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href={`#id${data.username}`}
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
                href={`#id${data.username}`}
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
