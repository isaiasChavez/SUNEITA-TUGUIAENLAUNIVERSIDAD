import React, { useState, Fragment } from "react";
import Renta from "./Renta";
import Footer from "./Footer";
import Hero from "./Hero";
import { Link } from "react-router-dom";

const Rentas = () => {
  const [rentas, setRentas] = useState([
    {
      titulo: "Habitación",
      tipo: "Departamento",
      publicante: "Recomendado",
      descripcion: "Agradable Habitación con todos los servicios",
      contacto1: "951 513 4378",
      zona: "Centro de Acatlima",
      direccion: "Nardos 103, Acatlima, Huajuapan de Leon",
      rango_precios: "900 - 1000",
      servicios: [
        "Luz",
        "Agua caliente",
        "colchon",
        "muebles",
        "Baño completo",
      ],
      mascotas: "No",
    },
    {
      titulo: "Departamento",
      tipo: "Casa",
      publicante: "Arrendatario",
      descripcion: "Cuarto Céntrico y con todos los servicios",
      contacto1: "951 513 4378",
      zona: "Nucleo Rural",
      direccion: "Nardos 103, Acatlima, Huajuapan de Leon",
      rango_precios: "900 - 1000",
      servicios: [
        "Luz",
        "Agua caliente",
        "colchon",
        "muebles",
        "Baño completo",
      ],
      mascotas: "No",
    },
    {
      titulo: "Habitación",
      tipo: "Habitacion",

      publicante: "Recomendado",
      descripcion: "Cuarto protegido, camaras de seguridad",
      contacto1: "951 513 4378",
      zona: "Frente de la universidad",
      direccion: "Nardos 103, Acatlima, Huajuapan de Leon",
      rango_precios: "900 - 1000",
      servicios: [
        "Luz",
        "Agua caliente",
        "colchon",
        "muebles",
        "Baño completo",
      ],
      mascotas: "No",
    },
    {
      titulo: "Habitación",
      tipo: "Departamento",
      publicante: "Arrendatario",
      titular: "",
      descripcion: "Habitación economica",
      contacto1: "951 513 4378",
      zona: "Centro de Huajuapan",
      direccion: "Nardos 103, Acatlima, Huajuapan de Leon",
      rango_precios: "900 - 1000",
      servicios: [
        "Luz",
        "Agua caliente",
        "colchon",
        "muebles",
        "Baño completo",
      ],
      mascotas: "No",
    },
  ]);

  return (
    <Fragment>
      <Hero
        principal="Escoje lo que se adapte a ti"
        secondary=" Busca el cuarto que se adapte a tus necesidades, estarás aquí un buen tiempo."
        class={""}
        textButton="¿No estás seguro?"
        textButton2="Lee los recomendaciones publicadas"
        button="Ir a recomendaciones"
        link='consejos'
      />

      <div className="infoInicio row d-flex justify-content-around text-center p-4 m-5">
        <button className=" lead col-lg-3 m-4 shadow p-3 mb-5 bg-white rounded-lg">
          
            <span class="material-icons  text-dark icon">house</span>
            <p className=" text-dark">Casas completas</p>
         
        </button>
        <button className=" lead col-lg-3 m-4 shadow p-3 mb-5 bg-white rounded-lg">
          <span class="material-icons icon">domain</span>
          <p>Departamentos</p>
        </button>
        <button className=" lead col-lg-3 m-4 shadow p-3 mb-5 bg-white rounded-lg">
          <span class="material-icons icon">check_box_outline_blank</span>
          <p>Habitaciones</p>
        </button>
      </div>
      <div className="container">
        <div className="h3 lead py-5 justify-content-around">
          {" "}
          Ultimos lugares publicados
        </div>
        <div class=" row d-flex">
          {rentas.map((renta) => (
            <Renta renta={renta} />
          ))}
        </div>
      </div>
      <div className=" lead text-center py-5">
        <p>
          Recuerda que estos son aportes de Utemitas, las condiciones pueden
          variar cuando contactes al locatario.
        </p>
        <p className="">En un futuro tendremos información de primera mano</p>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Rentas;
