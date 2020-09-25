import React from "react";
import { useContext } from "react";
import RentasContext from "../../State/rentas/rentasContext";

const Modal = () => {
  const rentasContext = useContext(RentasContext);
  console.log(rentasContext);
  const { rentaSeleccionada, eliminarRenta } = rentasContext;

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
          <div class="modal-body">
            <h5 class="modal-title" id="exampleModalLabel">
              ¿Seguro que quieres eliminarlo?
            </h5>
            {}
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Cancelar
            </button>
            <button
              type="button"
              class="btn btn-danger"
              onClick={() => eliminarRenta(rentaSeleccionada._id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
