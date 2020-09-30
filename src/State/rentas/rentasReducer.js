import {
  ACTUALIZAR_RENTA,
  AGREGAR_RENTA,
  ELIMINAR_RENTA,
  FORMULARIO_RENTAS,
  SELECCIONAR_RENTA,
  LIMPIAR_RENTA,
  OBTENER_RENTAS,
  OBTENER_RENTAS_TIPO,
  RENTA_ACTUAL,
  VALIDAR_RENTA,
  OBTENER_RENTAS_USUARIO,
  PAUSAR_RENTA,
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
          (renta) => renta.tipoCuarto === action.payload
        ),
      };
    case OBTENER_RENTAS_USUARIO:
      return {
        ...state,
        rentasUsuario: action.payload,
        errortarea: false,
      };

    case AGREGAR_RENTA:
      return {
        ...state,
        rentasUsuario: [...state.rentasUsuario, action.payload],
        //falta jalarlos al state de todas las rentas
        rentas: [...state.rentas, action.payload],
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
        rentaSeleccionada: null,
      };

    case SELECCIONAR_RENTA:
      return {
        ...state,
        rentaSeleccionada: action.payload,
      };
    case RENTA_ACTUAL:
      const data = {
        ...state,
        rentaSeleccionada: state.rentas.filter((renta) => {
          console.log("hasdfasdfiojasdfpoisadfpsadfoh");
          if (renta._id === action.payload) {
            return renta;
          }
        })[0],
      };
      return data;
    case PAUSAR_RENTA:
      return {
        ...state,
        rentas: state.rentas.map((renta) =>
          renta._id === action.payload._id ? action.payload : renta
        ),
      };

    case LIMPIAR_RENTA:
      return { ...state, rentaSeleccionada: null };
    default:
      return state;
  }
};
