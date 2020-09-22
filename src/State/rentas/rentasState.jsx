import React, { useReducer, useState } from "react";
import {
  AGREGAR_RENTA,
  ELIMINAR_RENTA,
  LIMPIAR_RENTA,
  OBTENER_RENTAS,
  RENTA_ACTUAL,
  VALIDAR_RENTA,
  OBTENER_RENTAS_TIPO,
} from "../../types";
import RentasContext from "./rentasContext";
import RentasReducer from "./rentasReducer";

const RentasState = (props) => {
  const rentas = [
    {
      _id: 1,
      username: "juan",
      tipo: "departamento",
      status: "active",
      titulo: "Habitaciónes de Los mochis",
      arrendador: "Juan juarez",
      descripcion: "Agradable Habitación con todos los servicios",
      contacto: "951 513 4378",
      zona: "Centro de Acatlima",
      mascotas: "No",
      precio: 1500,

      localizacion: {
        calle: "Quiechapa",
        numero: "",
        cp: "",
        estado: "",
        ciudad: "",
      },
      servicios: {
        wifi: true,
        banopro: true,
        ganchos: true,
        cocina: true,
        muebles: true,
        colchon: true,
      },
      datos: {
        banopro: true,
        medidas: {
          ancho: 15,
          largo: 15,
        },
        soloestudiantes: true,
        camaras: true,
        luzincluida: true,
        cocina: true,
        tipo: "Departamento",
      },
    },
    {
      _id: 2,
      status: "active",
      tipo: "habitación",
      username: "gabriel",
      titulo: "Cuarto centrico y seguro",
      arrendador: "Gabriel Perez",
      descripcion: "Cuarto centrico junto a los servicios",
      contacto: "951 513 4378",
      zona: "Nucleo Rural",
      mascotas: "Si",
      precio: 1200,

      localizacion: {
        calle: "Nardos",
        numero: "13",
        cp: "71250",
        estado: "Oaxaca",
        ciudad: "Huajuapan",
      },
      servicios: {
        wifi: true,
        banopro: true,
        ganchos: false,
        cocina: false,
        muebles: false,
        colchon: true,
      },
      datos: {
        banopro: true,
        medidas: {
          ancho: 20,
          largo: 25,
        },
        soloestudiantes: true,
        camaras: false,
        luzincluida: true,
        cocina: false,
        tipo: "Habitación",
      },
    },
    {
      _id: 3,
      status: "active",
      tipo: "departamento",

      username: "gabriel",
      titulo: "Habitaciónes al frente de la universidad",
      arrendador: "Gabriel Perez",
      descripcion: "Agradable Habitación justo al cruzar la universidad",
      contacto: "951 513 4378",
      zona: "Frente de la universidad",
      mascotas: "Si",
      precio: 2200,

      localizacion: {
        calle: "Nogales",
        numero: "12",
        cp: "71728",
        estado: "Oaxaca",
        ciudad: "Huajuapan",
      },
      servicios: {
        wifi: true,
        banopro: true,
        ganchos: true,
        cocina: true,
        muebles: true,
        colchon: true,
      },
      datos: {
        banopro: true,
        medidas: {
          ancho: 20,
          largo: 20,
        },
        soloestudiantes: true,
        camaras: true,
        luzincluida: true,
        cocina: true,
        tipo: "departamento",
      },
    },
    {
      _id: 4,
      username: "juarez",
      tipo: "casa",
      status: "active",
      titulo: "Casa para 3 estudiantes",
      arrendador: "Juan Juarez",
      descripcion: "Casa en zona centrica para estudiantes",
      contacto: "951 513 4378",
      zona: "Frente de la universidad",
      mascotas: "Si",
      precio: 3500,

      localizacion: {
        calle: "Almendros",
        numero: "20",
        cp: "71728",
        estado: "Oaxaca",
        ciudad: "Huajuapan",
      },
      servicios: {
        wifi: true,
        banopro: true,
        ganchos: true,
        cocina: true,
        muebles: true,
        colchon: true,
      },
      datos: {
        banopro: true,
        medidas: {
          ancho: 20,
          largo: 20,
        },
        soloestudiantes: true,
        camaras: false,
        luzincluida: true,
        cocina: true,
        tipo: "casa",
      },
    },
    {
      id: 5,
      username: "juarez",
      status: "active",
      titulo: "Casa para 3 estudiantes",
      arrendador: "Juan Juarez",
      descripcion: "Casa en zona centrica para estudiantes",
      contacto: "951 513 4378",
      zona: "Frente de la universidad",
      mascotas: "Si",
      tipo: "casa",

      precio: 3500,

      localizacion: {
        calle: "Almendros",
        numero: "20",
        cp: "71728",
        estado: "Oaxaca",
        ciudad: "Huajuapan",
      },
      servicios: {
        wifi: true,
        banopro: true,
        ganchos: true,
        cocina: true,
        muebles: true,
        colchon: true,
      },
      datos: {
        banopro: true,
        medidas: {
          ancho: 20,
          largo: 20,
        },
        soloestudiantes: true,
        camaras: false,
        luzincluida: true,
        cocina: true,
        tipo: "Casa",
      },
    },
    {
      _id: 6,
      username: "juarez",
      status: "active",
      titulo: "Casa para 3 estudiantes",
      tipo: "casa",

      arrendador: "Juan Juarez",
      descripcion: "Casa en zona centrica para estudiantes",
      contacto: "951 513 4378",
      zona: "Frente de la universidad",
      mascotas: "Si",
      precio: 3500,

      localizacion: {
        calle: "Almendros",
        numero: "20",
        cp: "71728",
        estado: "Oaxaca",
        ciudad: "Huajuapan",
      },
      servicios: {
        wifi: true,
        banopro: true,
        ganchos: true,
        cocina: true,
        muebles: true,
        colchon: true,
      },
      datos: {
        banopro: true,
        medidas: {
          ancho: 20,
          largo: 20,
        },
        soloestudiantes: true,
        camaras: false,
        luzincluida: true,
        cocina: true,
        tipo: "Casa",
      },
    },
    {
      _id: 7,
      username: "juarez",
      tipo: "casa",

      status: "inactive",
      titulo: "Casa para 3 estudiantes",
      arrendador: "Juan Juarez",
      descripcion: "Casa en zona centrica para estudiantes",
      contacto: "951 513 4378",
      zona: "Frente de la universidad",
      mascotas: "Si",
      precio: 3500,

      localizacion: {
        calle: "Almendros",
        numero: "20",
        cp: "71728",
        estado: "Oaxaca",
        ciudad: "Huajuapan",
      },
      servicios: {
        wifi: true,
        banopro: true,
        ganchos: true,
        cocina: true,
        muebles: true,
        colchon: true,
      },
      datos: {
        banopro: true,
        medidas: {
          ancho: 20,
          largo: 20,
        },
        soloestudiantes: true,
        camaras: false,
        luzincluida: true,
        cocina: true,
        tipo: "Casa",
      },
    },
    {
      _id: 8,
      username: "juarez",
      status: "inactive",
      tipo: "casa",
      titulo: "Casa para 3 estudiantes",
      arrendador: "Juan Juarez",
      descripcion: "Casa en zona centrica para estudiantes",
      contacto: "951 513 4378",
      zona: "Frente de la universidad",
      mascotas: "Si",
      precio: 3500,

      localizacion: {
        calle: "Almendros",
        numero: "20",
        cp: "71728",
        estado: "Oaxaca",
        ciudad: "Huajuapan",
      },
      servicios: {
        wifi: true,
        banopro: true,
        ganchos: true,
        cocina: true,
        muebles: true,
        colchon: true,
      },
      datos: {
        banopro: true,
        medidas: {
          ancho: 20,
          largo: 20,
        },
        soloestudiantes: true,
        camaras: false,
        luzincluida: true,
        cocina: true,
        tipo: "Casa",
      },
    },
    {
      _id: 9,
      username: "juarez",
      status: "inactive",

      titulo: "Casa para 3 estudiantes",
      arrendador: "Juan Juarez",
      descripcion: "Casa en zona centrica para estudiantes",
      tipo: "habitacion",
      contacto: "951 513 4378",
      zona: "Frente de la universidad",
      mascotas: "Si",
      precio: 3500,

      localizacion: {
        calle: "Almendros",
        numero: "20",
        cp: "71728",
        estado: "Oaxaca",
        ciudad: "Huajuapan",
      },
      servicios: {
        wifi: true,
        banopro: true,
        ganchos: true,
        cocina: true,
        muebles: true,
        colchon: true,
      },
      datos: {
        banopro: true,
        medidas: {
          ancho: 20,
          largo: 20,
        },
        soloestudiantes: true,
        camaras: false,
        luzincluida: true,
        cocina: true,
        tipo: "habitacion",
      },
    },
  ];

  const initialState = {
    rentas,
    rentasUsuario: [],
    errorRenta: null,
    rentaSeleccionada: null,
    rentasSeleccionadas: [],
  };

  const [state, dispatch] = useReducer(RentasReducer, initialState);

  const obtenerRentas = () => {
    dispatch({
      type: OBTENER_RENTAS,
      payload: rentas,
    });
  };
  const obtenerRentasPorTipo = (tipo) => {
    dispatch({ type: OBTENER_RENTAS_TIPO, payload: tipo });
  };
  const agregarRenta = (renta) => {
    dispatch({ type: AGREGAR_RENTA, payload: renta });
  };

  const validarRentas = () => {
    dispatch({ type: VALIDAR_RENTA });
  };
  const eliminarRenta = (id) => {
    dispatch({
      type: ELIMINAR_RENTA,
      payload: id,
    });
  };
  const guardarRentaActual = (id) => {
    dispatch({ type: RENTA_ACTUAL, payload: id });
  };

  const limpiarRenta = () => {
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
        agregarRenta,
        validarRentas,
        eliminarRenta,
        guardarRentaActual,
        limpiarRenta,
      }}
    >
      {props.children}
    </RentasContext.Provider>
  );
};

export default RentasState;
