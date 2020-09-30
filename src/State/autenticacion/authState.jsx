import React, { useContext, useReducer } from "react";
import clienteAxios from "../../config/axios";
import TokenAuth from "../../config/token";

import AuthContext from "./authContext";
import AuthReducer from "./authReducer";

import AlertasContext from "../alertas/alertasContext";

import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION,
} from "../../types/index";

const AuthState = (props) => {
  const { mostrarAlerta } = useContext(AlertasContext);
  const initialState = {
    autenticado: false,
    mensaje: "",
    cargando: true,
    usuario: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const registrarUsuario = async (datos) => {
    try {
      const respuesta = await clienteAxios.post("/api/users", datos);

      dispatch({ type: REGISTRO_EXITOSO, payload: respuesta.data });
      return true;
    } catch (error) {
      mostrarAlerta(error.response.data.msg, "error");
      return false;
    }
  };

  const cerrarSesion = () => {
    dispatch({ type: CERRAR_SESION });
  };

  const usuarioAutenticado = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      //TODO: funcion para enviar el token por headers
      TokenAuth(token);
    }

    try {
      const respuesta = await clienteAxios.get("/api/auth");
      dispatch({
        type: OBTENER_USUARIO,
        payload: respuesta.data.usuario,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: LOGIN_ERROR,
      });
      return false;
    }
  };

  const iniciarSesion = async (datos) => {
    try {
      const respuesta = await clienteAxios.post("/api/auth", datos);
      console.log("Respuesta aut", respuesta);
      dispatch({ type: LOGIN_EXITOSO, payload: respuesta.data });
      usuarioAutenticado();
    } catch (error) {
      mostrarAlerta(error.response.data.msg, "error");
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        autenticado: state.autenticado,
        mensaje: state.mensaje,
        cargando: state.cargando,
        usuario: state.usuario,
        registrarUsuario,
        iniciarSesion,
        usuarioAutenticado,
        cerrarSesion,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
