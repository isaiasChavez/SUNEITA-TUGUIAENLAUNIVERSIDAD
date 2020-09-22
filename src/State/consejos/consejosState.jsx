import React from "react";
import consejosContext from "./consejosContext";

const consejosState = (props) => {
  const consejos = [
    {
      nombre: "Javier",
      tipo: "rentar",
      semestre: "5",
      carrera: " Ingeniería en computación",
      instagram: "soyisaiaschavez",
      fecha: "11/08/2020",
      titulo: "Lorem ipsum dolor,",
      consejo:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, fugit",
      datosRenta: {
        nombre: "Profesor Jesus González Acevedo",
        contacto: "951 513 4378",
        direccion: "Nardos 103, Acatlima, Huajuapan de Leon",
        referencia: "",
        rango_precios: "900 - 1000",
        mascotas: "no",
      },
    },
    {
      nombre: "Norberto",
      tipo: "rentar",
      semestre: "4",
      carrera: " Ingeniería en computación",
      instagram: "lorena",
      fecha: "11/08/2020",
      titulo: "Lorem ipsum dolor,",
      consejo:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, fugit",
      datosRenta: {
        nombre: "Profesor Jesus González Acevedo",
        contacto: "951 513 4378",
        direccion: "Nardos 103, Acatlima, Huajuapan de Leon",
        referencia: "",
        rango_precios: "900 - 1000",
        mascotas: "no",
      },
    },
    {
      nombre: "Lupe",
      tipo: "rentar",
      semestre: "4",
      carrera: " Ingeniería en computación",
      instagram: "lorena",
      fecha: "11/08/2020",
      titulo: "Lorem ipsum dolor,",
      consejo:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, fugit",
      datosRenta: {
        nombre: "Profesor Jesus González Acevedo",
        contacto: "951 513 4378",
        direccion: "Nardos 103, Acatlima, Huajuapan de Leon",
        referencia: "",
        rango_precios: "900 - 1000",
        mascotas: "no",
      },
    }, {
      nombre: "Teresa",
      tipo: "rentar",
      semestre: "4",
      carrera: " Ingeniería en computación",
      instagram: "lorena",
      fecha: "11/08/2020",
      titulo: "Lorem ipsum dolor,",
      consejo:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, fugit",
      datosRenta: {
        nombre: "Profesor Jesus González Acevedo",
        contacto: "951 513 4378",
        direccion: "Nardos 103, Acatlima, Huajuapan de Leon",
        referencia: "",
        rango_precios: "900 - 1000",
        mascotas: "no",
      },
    },
    {
      nombre: "Isaías",
      tipo: "visitar",
      semestre: "5",
      carrera: " Ingeniería en computación",
      instagram: "soyisaiaschavez",
      fecha: "11/08/2020",
      titulo: "Consejo de visita,",
      consejo:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, fugit",
    },
    {
      nombre: "Isaías",
      tipo: "comer",
      semestre: "5",
      carrera: " Ingeniería en computación",
      instagram: "soyisaiaschavez",
      fecha: "11/08/2020",
      titulo: "Consejo de lugar para comer,",
      consejo:
        " Normalmente en la universidad siempre voy a comer a bambú, pero si no tienes tiempo en la cafetería mi amigo isidro es muy amable",
    },
    {
      nombre: "Isaías",
      tipo: "simple",
      semestre: "5",
      carrera: " Ingeniería en computación",
      instagram: "soyisaiaschavez",
      fecha: "11/08/2020",
      titulo: "Un simple consejo",
      consejo: "No te lleves demasiadas cosas si te gustaría mudarte seguido",
    },
    {
      nombre: "Lorena",
      tipo: "simple",
      semestre: "7",
      carrera: "Ingeniería en alimentos",
      instagram: "Lorena",
      fecha: "16/08/2020",
      titulo: "No vayas al pastel",
      consejo: "El pastel es de los peores lugares para vivir",
    },
    {
      nombre: "Javier",
      tipo: "comer",
      semestre: "7",
      carrera: "Ingeniería en diseño",
      instagram: "abigail",
      fecha: "16/08/2020",
      titulo: "haste amigo de los cocineros",
      consejo:
        "Si te haces amigo de los cocineros a veces te descuentan en las comidas, llevo  2 años pagando 25 pesos porque me hice amigo de uno jaajajajaja",
    },
  ];

  const initialState = {
    consejos,
  };
  return (
    <consejosContext.Provider
      value={{
        consejos: initialState.consejos,
      }}
    >
      {props.children}
    </consejosContext.Provider>
  );
};

export default consejosState;
