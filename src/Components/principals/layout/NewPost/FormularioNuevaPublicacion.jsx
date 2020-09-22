import React from "react";
import { useState } from "react";
import { useHistory, Route, useRouteMatch } from "react-router-dom";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";
import Form5 from "./Form5";
import Form6 from "./Form6";

const FormularioNuevaPublicacion = () => {
  let match = useRouteMatch();
  const route = useHistory();

  const [dataFormulario, setdataFormulario] = useState({
    tipoCuarto: "",
    servicios: {
      aguaCRef: false,
      wfRef: false,
      pilCRef: false,
      ganCRef: false,
      escCRef: false,
      colCRef: false,
    },
    zonasDelCuarto: {
      zlrRef: false,
      zltRef: false,
      zcRef: false,
      ztRef: false,
      cochRef: false,
    },
    tipobano: "",
    precio: 0,
    tipocontrato: "",
    direccion: "",
    ciudad: "",
    estado: "",
    codigopostal: "",
  });

  const onDataChange = (e) => {
    setdataFormulario({ ...dataFormulario, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Route exact path={`${match.url}/`}>
        <Form1
          onDataChange={onDataChange}
          dataFormulario={dataFormulario}
          route={route}
        />
      </Route>

      <Route exact path={`${match.url}/cp-1`}>
        <Form2
          onDataChange={onDataChange}
          dataFormulario={dataFormulario}
          route={route}
        />
      </Route>
      <Route exact path={`${match.url}/cp-1/cp-2`}>
        <Form3
          onDataChange={onDataChange}
          dataFormulario={dataFormulario}
          route={route}
        />
      </Route>
      <Route exact path={`${match.url}/cp-1/cp-2/cp-3`}>
        <Form4
          onDataChange={onDataChange}
          dataFormulario={dataFormulario}
          route={route}
        />
      </Route>
      <Route exact path={`${match.url}/cp-1/cp-2/cp-3/cp-4`}>
        <Form5
          onDataChange={onDataChange}
          dataFormulario={dataFormulario}
          route={route}
        />
      </Route>
      <Route exact path={`${match.url}/cp-1/cp-2/cp-3/cp-4/cp-5`}>
        <Form6
          onDataChange={onDataChange}
          dataFormulario={dataFormulario}
          route={route}
        />
      </Route>
    </>
  );
};

export default FormularioNuevaPublicacion;
