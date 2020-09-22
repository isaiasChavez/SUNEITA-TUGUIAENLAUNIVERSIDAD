import {
  ACTUALIZAR_RENTA,
  AGREGAR_RENTA,
  ELIMINAR_RENTA,
  FORMULARIO_RENTAS,
  LIMPIAR_RENTA,
  OBTENER_RENTAS,
  OBTENER_RENTAS_TIPO,
  RENTA_ACTUAL,
  VALIDAR_RENTA,
} from "../../types/index";

export default (state, action) => {
  switch (action.type) {
    case OBTENER_RENTAS:
      return {
        ...state,
        rentas: action.payload,
        rentasSeleccionadas: action.payload,
      };
    case OBTENER_RENTAS_TIPO:
      return {
        ...state,
        rentasSeleccionadas: state.rentas.filter(
          (renta) => renta.tipo === action.payload
        ),
      };
    case AGREGAR_RENTA:
      return {
        ...state,
        rentasUsuario: [...state.rentasUsuario, action.payload],
        //falta jalarlos al state de todas las rentas
        errortarea: false,
      };
    case VALIDAR_RENTA:
      return { ...state, errorRenta: true };
    case ELIMINAR_RENTA:
      return {
        ...state,
        rentasUsuario: state.rentasUsuario.filter(
          (renta) => renta._id !== action.payload
        ),
      };
    case RENTA_ACTUAL:
      return {
        ...state,
        rentaSeleccionada: state.rentas.filter((renta) => {
          console.log(typeof renta._id, renta._id);
          console.log(typeof action.payload, action.payload);

          if (parseInt(renta._id) === parseInt(action.payload)) {
            return renta;
          }
        })[0],
      };
    case LIMPIAR_RENTA:
      return { ...state, rentaSeleccionada: null };
    default:
      return state;
  }
};
