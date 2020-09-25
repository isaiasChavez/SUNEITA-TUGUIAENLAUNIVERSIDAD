import React, { useContext, useReducer } from "react";
import {
  AGREGAR_RENTA,
  ELIMINAR_RENTA,
  LIMPIAR_RENTA,
  OBTENER_RENTAS,
  RENTA_ACTUAL,
  VALIDAR_RENTA,
  OBTENER_RENTAS_TIPO,
  OBTENER_RENTAS_USUARIO,
} from "../../types";
import clienteAxios from "../../config/axios";
import RentasContext from "./rentasContext";
import AuthContext from "../autenticacion/authContext";
import RentasReducer from "./rentasReducer";
import AlertasContext from "../alertas/alertasContext";

const RentasState = (props) => {
  const authContext = useContext(AuthContext);
  const rentasContext = useContext(AlertasContext);
  const { usuario } = authContext;
  const { mostrarAlerta } = rentasContext;

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

  const agregarRenta = async (renta) => {
    try {
      console.log(renta);
      renta.creador = usuario._id;
      renta.username = usuario.username;
      const resultado = await clienteAxios.post("api/rentas", renta);
      console.log(resultado);
      dispatch({ type: AGREGAR_RENTA, payload: renta });
    } catch (error) {
      console.log("error al ingresar en restas state", error);
      console.log(error.message);
    }
  };

  const validarRentas = () => {
    dispatch({ type: VALIDAR_RENTA });
  };

  const guardarRentaActual = (id) => {
    console.log(id);
    dispatch({ type: RENTA_ACTUAL, payload: id });
  };

  const eliminarRenta = async (rentaId) => {
    try {
      const response = await clienteAxios.delete(`/api/proyectos/${rentaId}`);
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
  const pausarRenta = () => {
    dispatch({ type: LIMPIAR_RENTA });
  };

  return (
    <RentasContext.Provider
      value={{
        rentas: state.rentas,
        rentasUsuario: state.rentasUsuario,
        errorRenta: state.errorRenta,
        rentaSeleccionada: state.rentaSeleccionada,
        rentasSeleccionadas: state.rentasSeleccionadas,

        obtenerRentas,
        obtenerRentasPorTipo,
        obtenerRentasUsuario,
        agregarRenta,
        validarRentas,
        eliminarRenta,
        guardarRentaActual,
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
