import React from "react";
import { useContext } from "react";
import RentasContext from "../../State/rentas/rentasContext";
import BazarContext from "../../State/bazar/bazarContext";
import Loading from "./Loading";
const Modal = () => {
  const { rentaSeleccionada, eliminarRenta, limpiarRenta } = useContext(
    RentasContext
  );
  const {
    limpiarProducto,
    productoSeleccionado,
    eliminarProducto,
  } = useContext(BazarContext);

  if (!rentaSeleccionada && !productoSeleccionado) {
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
            <Loading />
          </div>
        </div>
      </div>
    );
  }
  let titulo = "";
  let precio = "";
  if (rentaSeleccionada) {
    titulo = rentaSeleccionada.titulo;
    precio = rentaSeleccionada.precio;
  }
  if (productoSeleccionado) {
    titulo = productoSeleccionado.titulo;
    precio = productoSeleccionado.precio;
  }

  const limpiarDatos = () => {
    limpiarProducto();
    limpiarRenta();
  };

  const eliminarDatos = () => {
    if (productoSeleccionado) {
      eliminarProducto(productoSeleccionado._id);
    }
    if (rentaSeleccionada) {
      eliminarRenta(rentaSeleccionada._id);
    }
  };

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
            <h4 className="my-3  ">{titulo}</h4>
            <h4 className="lead text-smaller text-muted">{precio}</h4>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              data-target="#exampleModal"
              data-toggle="modal"
              onClick={limpiarDatos}
            >
              Cancelar
            </button>
            <button
              data-target="#exampleModal"
              data-toggle="modal"
              type="button"
              class="btn btn-danger"
              onClick={eliminarDatos}
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
