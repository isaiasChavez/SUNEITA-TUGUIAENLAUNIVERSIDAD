import React, { useState } from "react";
import Renta from "./Renta";
import Zoom from 'react-reveal/Zoom';
const Rentas = () => {
  const [rentas, setRentas] = useState([
    {
      titulo: "Profesor Jesus González Acevedo",
      descripcion:
        "Cuartos a precios justos, con todo lo que necesita un estudiante",
      contacto1: "951 513 4378",
      direccion: "Nardos 103, Acatlima, Huajuapan de Leon",
      rango_precios: "900 - 1000",
      servicios: [
        "Luz",
        "Agua caliente",
        "colchon",
        "muebles",
        "Baño completo",
      ],
      mascotas:'No'
    },
    
  ]);
  //{
  //    titulo: "Complejo Amarillo",
  //    descripcion:
  //      "'Los mejores cuartos que he probado, seguros, grandes, a buen precio.'",
  //    contacto1: "951 513 4378",
  //    direccion: "Nardos 103, Acatlima, Huajuapan de Leon",
  //    rango_precios: "900 - 1000",
  //    servicios: [
  //      "Luz",
  //      "Agua caliente",
  //      "colchon",
  //      "muebles",
  //      "Baño completo",
  //    ],
  //    mascotas:'No'
  //  }

  return (
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3  ">
      {rentas.map(renta => (
        <Zoom>

        <Renta renta ={renta}/>
        </Zoom>
      ))}

     
    </div>
  );
};

export default Rentas;
