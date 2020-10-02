import {
  AGREGAR_BAZAR,
  ELIMINAR_PRODUCTO_BAZAR,
  SELECCIONAR_PRODUCTO_BAZAR,
  OBTENER_PRODUCTOS_BAZAR,
  OBTENER_PRODUCTOS_CATEGORIA,
  PRODUCTO_BAZAR_ACTUAL,
  VALIDAR_PRODUCTO,
  OBTENER_PRODUCTOS_BAZAR_USUARIO,
  LIMPIAR_PRODUCTO_BAZAR,
} from "../../types/index";

export default (state, action) => {
  switch (action.type) {
    case OBTENER_PRODUCTOS_BAZAR:
      return {
        ...state,
        productos: action.payload,
        productosSeleccionados: action.payload,
      };
    case OBTENER_PRODUCTOS_CATEGORIA:
      return {
        ...state,
        productosSeleccionados: state.productos.filter(
          (producto) => producto.categoria === action.payload
        ),
      };
    case OBTENER_PRODUCTOS_BAZAR_USUARIO:
      return {
        ...state,
        productosUsuario: action.payload,
        errorProducto: false,
      };

    case AGREGAR_BAZAR:
      return {
        ...state,
        productosUsuario: [...state.productosUsuario, action.payload],
        //falta jalarlos al state de todas las rentas
        productos: [...state.productos, action.payload],
        errorProducto: false,
      };
    case VALIDAR_PRODUCTO:
      return { ...state, errorRenta: true };
    case ELIMINAR_PRODUCTO_BAZAR:
      return {
        ...state,
        productosUsuario: state.productosUsuario.filter(
          (producto) => producto._id !== action.payload
        ),
        productos: state.productos.filter(
          (producto) => producto._id !== action.payload
        ),
        productoSeleccionado: null,
      };

    case SELECCIONAR_PRODUCTO_BAZAR:
      return {
        ...state,
        productoSeleccionado: action.payload,
      };
    case PRODUCTO_BAZAR_ACTUAL:
      const data = {
        ...state,
        productoSeleccionado: state.productos.filter((producto) => {
          console.log("hasdfasdfiojasdfpoisadfpsadfoh");
          if (producto._id === action.payload) {
            return producto;
          }
        })[0],
      };
      return data;
    // case PAUSAR_RENTA:
    //   return {
    //     ...state,
    //     rentas: state.rentas.map((renta) =>
    //       renta._id === action.payload._id ? action.payload : renta
    //     ),
    //   };

    case LIMPIAR_PRODUCTO_BAZAR:
      return { ...state, productoSeleccionado: null };
    default:
      return state;
  }
};
