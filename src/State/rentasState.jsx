import React from "react";
import rentasContext from "./rentasContext";

const rentasState = (props) => {
  const rentas = [
    {
      id: 1,
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
      id: 2,
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
      id: 2,
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
      id: 3,
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
      id: 3,
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
      id: 3,
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
      id: 3,
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
      id: 3,
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
      id: 3,
      username: "juarez",
      status: "inactive",

      titulo: "Casa para 3 estudiantes",
      arrendador: "Juan Juarez",
      descripcion: "Casa en zona centrica para estudiantes",
      tipo:'habitacion',
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
        tipo:'habitacion'
      },
    },
  ];

  const getRentasByUser = (user) => {
    const rentasDeUsuario = rentas.filter((renta) => {
      if (renta.username === user) {
        return renta;
      }
    });
    return rentasDeUsuario;
  };
  const getRentasByType = (type) => {
    const rentasDeUsuario = rentas.filter((renta) => {
      if (renta.tipo === type) {
        return renta;
      }
    });
    return rentasDeUsuario;
  };

  const deleteRentsByUserAndId = (user, id) => {
      console.log('Voy a eliminar algo')
  };
  const pauseRentsByUserAndId = (user, id) => {
    console.log('Voy pausar')
  };
  const editRentsByUserAndId = (user, id,newData) => {
    console.log('Voy editar algo')
  };

  const initialState = {
    rentas,
    getRentasByUser,
    getRentasByType,
    deleteRentsByUserAndId,
    pauseRentsByUserAndId,
    editRentsByUserAndId
  };
  return (
    <rentasContext.Provider
      value={{
        datosRentas: initialState,
      }}
    >
      {props.children}
    </rentasContext.Provider>
  );
};

export default rentasState;
