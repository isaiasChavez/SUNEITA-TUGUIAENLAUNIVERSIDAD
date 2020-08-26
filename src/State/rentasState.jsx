import React from "react";
import rentasContext from "./rentasContext";

const rentasState = (props) => {
  const rentas = [
    {
      id: 1,
      titulo: "Habitaciónes de Los mochis",
      arrendador: "Juan juarez",
      localizacion: {
        calle: "",
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
      },
      precio: 1500,
      tipo: "Departamentos los garcía",
      publicante: "Recomendado",
      descripcion: "Agradable Habitación con todos los servicios",
      contacto1: "951 513 4378",
      zona: "Centro de Acatlima",
      direccion: "Nardos 103, Acatlima, Huajuapan de Leon",
      rango_precios: "900 - 1000",
      mascotas: "No",
    },
    {
      id: 2,
      titulo: "Complejo Amarillo",
      tipo: "Casa",
      arrendador: "Marco Aurelio",
      descripcion: "Cuarto Céntrico y con todos los servicios",
      contacto1: "951 513 4378",
      zona: "Nucleo Rural",
      direccion: "Nardos 103, Acatlima, Huajuapan de Leon",
      rango_precios: "900 - 1000",
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
      },
      mascotas: "No",
      precio: 900,
    },
    {
      id: 3,
      titulo: "Habitaciónes los perez",
      tipo: "Habitacion",

      publicante: "Recomendado",
      arrendador: "John Smith",
      descripcion: "Cuarto protegido, camaras de seguridad",
      contacto1: "951 513 4378",
      zona: "Frente de la universidad",
      direccion: "Nardos 103, Acatlima, Huajuapan de Leon",
      rango_precios: "900 - 1000",
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
      },
      mascotas: "No",
      precio: 1200,
    },
    {
      id: 4,
      titulo: "Habitación numero 6",
      tipo: "Departamento",
      publicante: "Arrendatario",
      titular: "",
      descripcion: "Habitación economica",
      contacto1: "951 513 4378",
      zona: "Centro de Huajuapan",
      direccion: "Nardos 103, Acatlima, Huajuapan de Leon",
      rango_precios: "900 - 1000",
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
      },
      mascotas: "No",
      precio: 750,
    },
  ];

  const initialState = {
    rentas,
  };
  return (
    <rentasContext.Provider
      value={{
        rentas: initialState.rentas,
      }}
    >
      {props.children}
    </rentasContext.Provider>
  );
};

export default rentasState;
