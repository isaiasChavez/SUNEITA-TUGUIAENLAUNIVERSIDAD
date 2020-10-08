import { data } from "jquery";
import React, { useContext } from "react";
import BazarContext from "../../../State/bazar/bazarContext";

import Loading from "../../utilities/Loading";
const ProductoBazar = ({ datos }) => {
  const { seleccionarProducto } = useContext(BazarContext);

  const {
    _id,
    titulo,
    username,
    estado,
    precio,
    descripcion,
    activa,
    imagenes,
  } = datos;
  console.log(imagenes);

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
      class={`card  mt-2  col-sm-6 col-md-4 col-lg-3 m-3 border border-secondary  ${background} container shadow rounded-lg`}
    >
      <div class="card-header   mt-3 rounded d-flex flex-column  text-dark">
        <div className="d-flex flex-column text-left p-3">
          <cite title="" className={`text-dark h4`}>
            {titulo}
          </cite>
          <div className=" text-right text-dark h5">{precio}</div>
        </div>

        <span className="text-right  "> {estado}</span>
      </div>
      <div class="row">
        {imagenes[0] ? (
          <div className="  publicacionBazar-img ">
            <img
              data-target="#modalImagen"
              data-toggle="modal"
              src={imagenes[0].imageUrl}
              onClick={() => seleccionarProducto(datos)}
              className="mx-3 my-3 rounded-lg "
              alt=""
            />
          </div>
        ) : (
          <div className="container d-flex justify-content-center align-items-center w-100 ">
            <Loading />
          </div>
        )}
      </div>
      {/* Carrusel */}
    </div>
  );
};

export default ProductoBazar;
