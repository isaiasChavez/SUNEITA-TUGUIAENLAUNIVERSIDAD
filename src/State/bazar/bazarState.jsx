import React, { useReducer } from "react";
import clienteAxios from "../../config/axios";
// BAZAR | PRODUCTOS
import AuthContext from "../autenticacion/authContext";
import BazarContext from "./bazarContext";
import BazarReducer from "./bazarReducer";
import AlertasContext from "../alertas/alertasContext";

import mueble1 from "../../img/muebles/mueble1.jpg";
import mueble2 from "../../img/muebles/mueble2.jpg";
import mueble3 from "../../img/muebles/mueble3.jpg";
import mueble4 from "../../img/muebles/mueble4.jpg";

import {
  AGREGAR_BAZAR,
  ELIMINAR_PRODUCTO_BAZAR,
  LIMPIAR_PRODUCTO_BAZAR,
  OBTENER_PRODUCTOS_BAZAR,
  OBTENER_PRODUCTOS_BAZAR_USUARIO,
  OBTENER_PRODUCTOS_CATEGORIA,
  PRODUCTO_BAZAR_ACTUAL,
  SELECCIONAR_PRODUCTO_BAZAR,
  PAUSAR_PRODUCTO,
} from "../../types";
import { useContext } from "react";

const BazarState = (props) => {
  const { usuario } = useContext(AuthContext);
  const { mostrarAlerta } = useContext(AlertasContext);

  const initialState = {
    productos: [],
    productosUsuario: [],
    errorProducto: null,
    productoSeleccionado: null,
    productosSeleccionados: [],
  };
  const [state, dispatch] = useReducer(BazarReducer, initialState);
  //OBTENER LAS PUBLICACIONES DE PRODUCTOS DEL BAZAR
  const obtenerProductos = async () => {
    try {
      const resultado = await clienteAxios.get("/api/bazar");
      dispatch({
        type: OBTENER_PRODUCTOS_BAZAR,
        payload: resultado.data.productos,
      });
    } catch (error) {
      console.log("error al obtener productos delbazar rs", error);
      mostrarAlerta(error.response);
      console.log(error.response.request);
    }
  };

  const obtenerProductosUsuario = async () => {
    try {
      const resultado = await clienteAxios.get(`/api/bazar/user`);
      dispatch({
        type: OBTENER_PRODUCTOS_BAZAR_USUARIO,
        payload: resultado.data.productos,
      });
      console.log(resultado);
    } catch (error) {
      console.log("error al obtener los productos de usuario rs", error);
    }
  };

  const obtenerProductosPorCategoria = (categoria) => {
    dispatch({ type: OBTENER_PRODUCTOS_CATEGORIA, payload: categoria });
  };

  const agregarProducto = async (producto) => {
    try {
      console.log(producto);
      producto.creador = usuario._id;
      producto.username = usuario.username;
      const resultado = await clienteAxios.post("api/bazar", producto);
      dispatch({ type: AGREGAR_BAZAR, payload: producto });
      console.log(resultado.data);
      mostrarAlerta(resultado.data.msg, "success");
    } catch (error) {
      console.log(error);
      // mostrarAlerta(error.data.msg, "error");
    }
  };

  const seleccionarProducto = (producto) => {
    dispatch({ type: SELECCIONAR_PRODUCTO_BAZAR, payload: producto });
  };

  const guardarProductoActual = (id) => {
    console.log(id);
    dispatch({ type: PRODUCTO_BAZAR_ACTUAL, payload: id });
  };

  const eliminarProducto = async (productoId) => {
    try {
      const response = await clienteAxios.delete(`/api/bazar/${productoId}`);
      dispatch({
        type: ELIMINAR_PRODUCTO_BAZAR,
        payload: productoId,
      });
      mostrarAlerta(response.data.msg, "success");
    } catch (error) {
      mostrarAlerta("Ocurrio un error", "error");
      console.log(error.response);
      mostrarAlerta(error.response.data.msg, "error");
    }
  };

  const actualizarProducto = async (producto) => {
    try {
      const response = await clienteAxios.put(
        `/api/bazar/${producto._id}`,
        producto
      );
      console.log(response);
      dispatch({
        type: PAUSAR_PRODUCTO,
        payload: response.data.producto,
      });
      mostrarAlerta(response.data.msg, "success");
    } catch (error) {
      mostrarAlerta("Ocurrio un error", "error");
      console.log(error);
      mostrarAlerta(error.data.msg, "error");
    }
    obtenerProductosUsuario();
  };
  const limpiarProducto = () => {
    dispatch({ type: LIMPIAR_PRODUCTO_BAZAR });
  };

  return (
    <BazarContext.Provider
      value={{
        productos: state.productos,
        productosUsuario: state.productosUsuario,
        productoSeleccionado: state.productoSeleccionado,
        obtenerProductos,
        obtenerProductosUsuario,
        obtenerProductosPorCategoria,
        agregarProducto,
        seleccionarProducto,
        guardarProductoActual,
        eliminarProducto,
        actualizarProducto,
        limpiarProducto,
      }}
    >
      {props.children}
    </BazarContext.Provider>
  );
};

export default BazarState;