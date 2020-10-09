import React, { useState, useContext } from "react";
import RentasContext from "../../../../State/rentas/rentasContext";
import AlertasContext from "../../../../State/alertas/alertasContext";

import { useHistory, Route, useRouteMatch, Switch } from "react-router-dom";
import Progress from "../../../utilities/Progress";
import FormTipoCuarto from "./Form1";
import FormServicios from "./FormServicios";
import FormZonas from "./FormZonas";
import FormMedidasCuarto from "./FormMedidasCuarto";
import FormDescripcion from "./FormDescripcion";
import FormBano from "./FormBano";
import FormPrecontra from "./FormPrecontra";
import FormDireccion from "./FormDireccion";

import FormImagenes from "./FormImagenes";
import FormConfirm from "./FormConfirm";

const FormularioNuevaPublicacion = (props) => {
  let match = useRouteMatch();
  const route = useHistory();

  const rentasContext = useContext(RentasContext);
  const alertasContext = useContext(AlertasContext);

  const { mostrarAlerta } = alertasContext;

  const { agregarRenta } = rentasContext;

  const [dataFormulario, setdataFormulario] = useState({
    progreso: 0,
    titulo: "",
    descripcion: "",
    activa: true,
    creador: "",
    username: "",
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
      cocinaRef: false,
      balconRef: false,
    },

    medidascuarto: {
      largo: "",
      ancho: "",
    },

    mascotas: null,
    soloestudiantes: null,
    tipobano: "",
    luzincluida: null,
    precio: null,
    deposito: null,
    tipocontrato: "",
    direccion: "",
    asentamiento: "",
    numerointerior: null,
    numeroexterior: null,
    ciudad: "",
    estado: "",
    referencias: "",
    contacto: "",
    codigopostal: "",
    imagenes: null,
  });

  const setProgreso = (porcentaje) => {
    setdataFormulario({ ...dataFormulario, progreso: porcentaje });
  };
  const onDataChange = (e) => {
    //Convierte los valores falsos en string a falsos en boolean
    if (e.target.value == "false") {
      setdataFormulario({ ...dataFormulario, [e.target.name]: false });
      return;
    } else if (e.target.value == "true") {
      setdataFormulario({ ...dataFormulario, [e.target.name]: true });
      return;
    }
    if (e.target.type === "number") {
      setdataFormulario({
        ...dataFormulario,
        [e.target.name]: parseInt(e.target.value),
      });
      return;
    }

    setdataFormulario({ ...dataFormulario, [e.target.name]: e.target.value });
  };
  const publicar = async () => {
    try {
      await agregarRenta(dataFormulario);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Progress porcentaje={dataFormulario.progreso} />
      <Route exact path={`${match.url}/confirm`}>
        <FormConfirm
          publicar={publicar}
          dataFormulario={dataFormulario}
          route={props.history}
          setProgreso={setProgreso}
        />
      </Route>
      <Route exact path={`${match.url}/`}>
        <FormTipoCuarto
          onDataChange={onDataChange}
          dataFormulario={dataFormulario}
          route={route}
          setProgreso={setProgreso}
        />
      </Route>

      <Route exact path={`${match.url}/servicios`}>
        <FormServicios
          onDataChange={onDataChange}
          dataFormulario={dataFormulario}
          route={route}
          setProgreso={setProgreso}
        />
      </Route>
      <Route exact path={`${match.url}/servicios/zonas`}>
        <FormZonas
          onDataChange={onDataChange}
          dataFormulario={dataFormulario}
          route={route}
          setProgreso={setProgreso}
        />
      </Route>

      <Route exact path={`${match.url}/servicios/zonas/medidas`}>
        <FormMedidasCuarto
          onDataChange={onDataChange}
          dataFormulario={dataFormulario}
          route={route}
          setProgreso={setProgreso}
        />
      </Route>

      <Route exact path={`${match.url}/servicios/zonas/medidas/bano`}>
        <FormBano
          onDataChange={onDataChange}
          dataFormulario={dataFormulario}
          route={route}
          setProgreso={setProgreso}
        />
      </Route>
      <Route exact path={`${match.url}/servicios/zonas/medidas/bano/precontra`}>
        <FormPrecontra
          onDataChange={onDataChange}
          dataFormulario={dataFormulario}
          route={route}
          setProgreso={setProgreso}
        />
      </Route>
      <Route
        exact
        path={`${match.url}/servicios/zonas/medidas/bano/precontra/direccion`}
      >
        <FormDireccion
          setdataFormulario={setdataFormulario}
          onDataChange={onDataChange}
          dataFormulario={dataFormulario}
          route={route}
          setProgreso={setProgreso}
        />
      </Route>
      <Route
        exact
        path={`${match.url}/servicios/zonas/medidas/bano/precontra/direccion/descripcion`}
      >
        <FormDescripcion
          onDataChange={onDataChange}
          dataFormulario={dataFormulario}
          route={route}
          setProgreso={setProgreso}
        />
      </Route>
      <Route
        exact
        path={`${match.url}/servicios/zonas/medidas/bano/precontra/direccion/descripcion/imagenes`}
      >
        <FormImagenes
          onDataChange={onDataChange}
          dataFormulario={dataFormulario}
          route={route}
          setProgreso={setProgreso}
        />
      </Route>
    </>
  );
};

export default FormularioNuevaPublicacion;
