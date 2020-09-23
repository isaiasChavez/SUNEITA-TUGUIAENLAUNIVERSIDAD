import React, { useReducer } from "react";
import clienteAxios from "../../config/axios";
import TokenAuth from "../../config/token";

import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION,
} from "../../types/index";

const AuthState = (props) => {
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
      console.log(respuesta.data);
      dispatch({ type: REGISTRO_EXITOSO, payload: respuesta.data });
      return true;
    } catch (error) {
      console.log(error.response.data.msg, "mensaje");
      alert(error.response.data.msg);
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
      console.log(respuesta);
      dispatch({
        type: OBTENER_USUARIO,
        payload: respuesta.data.usuario,
      });
      console.log(state);
    } catch (error) {
      console.log(error);
    }
  };

  const iniciarSesion = async (datos) => {
    try {
      console.log(datos);
      const respuesta = await clienteAxios.post("/api/auth", datos);
      console.log("Respuesta aut", respuesta);
      dispatch({ type: LOGIN_EXITOSO, payload: respuesta.data });
      usuarioAutenticado();
    } catch (error) {}
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
