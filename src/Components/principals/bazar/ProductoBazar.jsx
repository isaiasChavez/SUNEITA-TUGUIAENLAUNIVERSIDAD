import React from "react";
import img from "../../../img/muebles/mueble1.jpg";
const Consejo = ({ datos }) => {
  const { _id, titulo, username, estado, precio, descripcion, activa } = datos;

  let background = "bg-white";
  let textColor = "text-dark";
  let textColorSecondary = "text-muted";
  // switch (tipo) {
  //   case "rentar":
  //     background = "bg-dark";
  //     textColor = "text-white";
  //     textColorSecondary = "text-secondary";
  //     break;
  //   case "visitar":
  //     background = "bg-light";
  //     textColor = "text-dark";
  //     break;
  //   case "comer":
  //     background = "bg-white";
  //     textColor = "text-dark";
  //     break;
  //   case "simple":
  //     background = "bg-secondary";
  //     textColor = "text-white";
  //     textColorSecondary = "text-white";
  //     break;
  //   default:
  //     break;
  // }

  return (
    <div
      class={`card  mt-2 p-3 col-sm-6 col-md-4 col-lg-3 m-3  ${background} container shadow-lg rounded-lg`}
    >
      <div class="card-header p-3 pl-3 mt-3 rounded d-flex flex-column">
        <div className="d-flex flex-column text-left p-3">
          <cite title="" className={`${textColor} lead h4`}>
            {titulo}
          </cite>
          <div className="text-smaller  text-white h5">{precio}</div>
        </div>

        <span className="  badge-pill badge-info"> {estado}</span>
      </div>
      <div class="row">
        <div className=" img-fluid publicacionBazar-img ">
          <img src={img} className="mx-3 my-3 rounded-lg" alt="" />
        </div>
        {/* Carrusel */}
      </div>
    </div>
  );
};

export default Consejo;
