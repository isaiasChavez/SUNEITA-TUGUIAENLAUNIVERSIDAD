import React, { useContext, useReducer } from "react";
import {
  AGREGAR_RENTA,
  ELIMINAR_RENTA,
  LIMPIAR_RENTA,
  OBTENER_RENTAS,
  RENTA_ACTUAL,
  VALIDAR_RENTA,
  OBTENER_RENTAS_TIPO,
  SELECCIONAR_RENTA,
  OBTENER_RENTAS_USUARIO,
  PAUSAR_RENTA,
  OBTENER_IMAGENES_RENTA,
} from "../../types";
import clienteAxios from "../../config/axios";
import RentasContext from "./rentasContext";
import AuthContext from "../autenticacion/authContext";
import RentasReducer from "./rentasReducer";
import AlertasContext from "../alertas/alertasContext";

const RentasState = (props) => {
  const authContext = useContext(AuthContext);
  const alertasContext = useContext(AlertasContext);
  const { usuario } = authContext;
  const { mostrarAlerta } = alertasContext;

  const initialState = {
    rentas: [],
    rentasUsuario: [],
    errorRenta: null,
    rentaSeleccionada: null,
    rentasSeleccionadas: [],
  };

  const [state, dispatch] = useReducer(RentasReducer, initialState);

  const obtenerRentas = async () => {
    try {
      const resultado = await clienteAxios.get("/api/rentas");

      dispatch({
        type: OBTENER_RENTAS,
        payload: resultado.data.rentas,
      });
    } catch (error) {
      console.log("error al obtener rentas rs", error);
      mostrarAlerta(error.response);
      console.log(error.response.request);
    }
  };
  const obtenerImagenesRenta = async (id) => {
    try {
      const resultado = await clienteAxios.get(`/api/rentas/getimages/${id}`);
      console.log("Esto debería", resultado);
      return resultado;
    } catch (error) {
      console.error(error, "ERRORR AL OBTENER IMAGENES");
    }
  };

  //////////////////////
  const obtenerRentasUsuario = async () => {
    try {
      const resultado = await clienteAxios.get(`/api/rentas/user`);

      dispatch({
        type: OBTENER_RENTAS_USUARIO,
        payload: resultado.data.rentas,
      });
    } catch (error) {
      console.log("error al obtener rentas de usuario rs", error);
    }
  };

  const obtenerRentasPorTipo = (tipo) => {
    dispatch({ type: OBTENER_RENTAS_TIPO, payload: tipo });
  };
  /////////////
  const agregarRenta = async (renta) => {
    try {
      renta.username = usuario.username;
      renta.creador = usuario._id;

      const { imagenesrentas, progreso, ...rest } = renta;

      console.log(imagenesrentas, "iMAGENES RENTAS");
      console.log(rest);

      const resultado = await clienteAxios.post("api/rentas", rest);

      let formData = new FormData();

      for (const file of imagenesrentas) {
        formData.append("imagenesrentas", file);
      }
      formData.append("renta_id", resultado.data.renta._id);
      formData.append("creador_id", usuario._id);
      formData.append("titulo", renta.titulo);

      const resultadoImagenes = await clienteAxios.post(
        "api/rentas/uploadimages",
        formData
      );

      resultado.data.renta.imagenes = resultadoImagenes.data.imagenes;

      dispatch({ type: AGREGAR_RENTA, payload: resultado.data.renta });

      console.log(resultado.data);
      mostrarAlerta(resultado.data.msg, "success");
    } catch (error) {
      console.error(error);
      // mostrarAlerta(error);
    }
  };

  const validarRentas = () => {
    dispatch({ type: VALIDAR_RENTA });
  };

  const seleccionarRenta = (renta) => {
    dispatch({ type: SELECCIONAR_RENTA, payload: renta });
  };
  const guardarRentaActual = (id) => {
    dispatch({ type: RENTA_ACTUAL, payload: id });
  };
  const eliminarRenta = async (rentaId) => {
    try {
      const response = await clienteAxios.delete(`/api/rentas/${rentaId}`);
      dispatch({
        type: ELIMINAR_RENTA,
        payload: rentaId,
      });

      mostrarAlerta(response.data.msg, "success");
    } catch (error) {
      mostrarAlerta("Ocurrio un error", "error");
      console.log(error.response);
      mostrarAlerta(error.response.data.msg, "error");
    }
  };
  const editarRenta = () => {};

  const limpiarRenta = () => {
    dispatch({ type: LIMPIAR_RENTA });
  };
  const pausarRenta = async (renta) => {
    try {
      const response = await clienteAxios.put(
        `/api/rentas/${renta._id}`,
        renta
      );
      console.log(response);
      dispatch({
        type: PAUSAR_RENTA,
        payload: response.data.renta,
      });
      mostrarAlerta(response.data.msg, "success");
    } catch (error) {
      mostrarAlerta("Ocurrio un error", "error");
      console.log(error);
      mostrarAlerta(error.data.msg, "error");
    }
    obtenerRentasUsuario();
  };

  return (
    <RentasContext.Provider
      value={{
        rentas: state.rentas,
        rentasUsuario: state.rentasUsuario,
        errorRenta: state.errorRenta,
        rentaSeleccionada: state.rentaSeleccionada,
        rentasSeleccionadas: state.rentasSeleccionadas,
        obtenerImagenesRenta,
        obtenerRentas,
        obtenerRentasPorTipo,
        obtenerRentasUsuario,
        agregarRenta,
        validarRentas,
        eliminarRenta,
        guardarRentaActual,
        seleccionarRenta,
        limpiarRenta,
        editarRenta,
        pausarRenta,
      }}
    >
      {props.children}
    </RentasContext.Provider>
  );
};

export default RentasState;
