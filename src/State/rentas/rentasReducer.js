import {
  AGREGAR_RENTA,
  ELIMINAR_RENTA,
  SELECCIONAR_RENTA,
  LIMPIAR_RENTA,
  OBTENER_RENTAS,
  OBTENER_RENTAS_TIPO,
  RENTA_ACTUAL,
  VALIDAR_RENTA,
  OBTENER_RENTAS_USUARIO,
  PAUSAR_RENTA,
  OBTENER_IMAGENES_RENTA,
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
    case OBTENER_IMAGENES_RENTA:
      let rentaS = [];
      if (state.rentaSeleccionada) {
        if (state.rentaSeleccionada._id === action.payload[0].renta_id) {
          rentaS = state.rentaSeleccionada;
          rentaS.imagenes = action.payload[0];
        }
      }

      return {
        ...state,
        rentas: state.rentas.map((renta) => {
          console.log(renta._id, action.payload, "ESTO QUIERO VER");
          if (renta._id === action.payload[0].renta_id) {
            renta.imagenes = action.payload[0];
            console.log(renta, "La que se supone");
            return renta;
          }
          return renta;
        }),
        rentasSeleccionadas: state.rentasSeleccionadas.map((renta) => {
          if (renta._id === action.payload[0].renta_id) {
            renta.imagenes = action.payload[0];
            console.log(renta, "La que se supone");
            return renta;
          }
          return renta;
        }),
        rentaSeleccionada: rentaS,
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
