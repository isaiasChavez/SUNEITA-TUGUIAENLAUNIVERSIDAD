import React from "react";
const Modal = () => {
  return (
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
            <About />
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
  );
};

export default Modal;
