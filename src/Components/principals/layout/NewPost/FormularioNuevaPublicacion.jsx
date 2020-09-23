import React from "react";
import { useState } from "react";
import { useHistory, Route, useRouteMatch } from "react-router-dom";
import FormTipoCuarto from "./Form1";
import FormServicios from "./FormServicios";
import FormZonas from "./FormZonas";
import FormMedidasCuarto from "./FormMedidasCuarto";
import FormDescripcion from "./FormDescripcion";
import FormBano from "./FormBano";
import FormPrecontra from "./FormPrecontra";
import FormDireccion from "./FormDireccion";

const FormularioNuevaPublicacion = () => {
  let match = useRouteMatch();
  const route = useHistory();

  const [dataFormulario, setdataFormulario] = useState({
    titulo: "",
    descripcion: "",
    activa: true,
    publicante: "",
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
    reglasedificio: {
      mascotas: false,
      fiestas: false,
    },
    soloestudiantes: null,
    mascotas: null,
    tipobano: "",
    medidascuarto: {
      largo: null,
      ancho: null,
    },
    seguridad: {
      camaras: false,
    },
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
  });

  const onDataChange = (e) => {
    setdataFormulario({ ...dataFormulario, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Route exact path={`${match.url}/`}>
        <FormTipoCuarto
          onDataChange={onDataChange}
          dataFormulario={dataFormulario}
          route={route}
        />
      </Route>

      <Route exact path={`${match.url}/servicios`}>
        <FormServicios
          onDataChange={onDataChange}
          dataFormulario={dataFormulario}
          route={route}
        />
      </Route>
      <Route exact path={`${match.url}/servicios/zonas`}>
        <FormZonas
          onDataChange={onDataChange}
          dataFormulario={dataFormulario}
          route={route}
        />
      </Route>

      <Route exact path={`${match.url}/servicios/zonas/medidas`}>
        <FormMedidasCuarto
          onDataChange={onDataChange}
          dataFormulario={dataFormulario}
          route={route}
        />
      </Route>

      <Route exact path={`${match.url}/servicios/zonas/medidas/bano`}>
        <FormBano
          onDataChange={onDataChange}
          dataFormulario={dataFormulario}
          route={route}
        />
      </Route>
      <Route exact path={`${match.url}/servicios/zonas/medidas/bano/precontra`}>
        <FormPrecontra
          onDataChange={onDataChange}
          dataFormulario={dataFormulario}
          route={route}
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
        />
      </Route>
    </>
  );
};

export default FormularioNuevaPublicacion;
