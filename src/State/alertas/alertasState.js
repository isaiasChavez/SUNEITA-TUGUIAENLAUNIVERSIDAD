import React, { useReducer } from "react";
import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../../types/index";
import alertaReducer from "./alertasReducer";
import alertaContext from "./alertasContext";

const AlertaState = (props) => {
  const initialState = {
    alerta: null,
  };

  const [state, dispath] = useReducer(alertaReducer, initialState);

  //Functions

  const mostrarAlerta = (msg, categoria) => {
    dispath({
      type: MOSTRAR_ALERTA,
      payload: {
        msg,
        categoria,
      },
    });
    setTimeout(() => {
      dispath({
        type: OCULTAR_ALERTA,
      });
    }, 5000);
  };

  return (
    <alertaContext.Provider
      value={{
        alerta: state.alerta,
        mostrarAlerta,
      }}
    >
      {props.children}
    </alertaContext.Provider>
  );
};

export default AlertaState;
