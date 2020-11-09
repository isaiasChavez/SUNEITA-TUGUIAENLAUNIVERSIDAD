import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BazarContext from "../../../State/bazar/bazarContext";
import { format } from "timeago.js";
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
    created_at,
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
      class={`card  mt-2  col-sm-6 col-md-3 col-lg-3 m-3 border border-secondary  ${background} container shadow rounded-lg`}
    >
      <Link>
        <div class="card-header   mt-3 rounded d-flex flex-column  text-dark">
          <div className="d-flex flex-column text-left ">
            <span className="lead text-shadow">{titulo}</span>{" "}
            <time className="text-muted">{format(created_at)}</time>
          </div>
          <span className=" text-right text-dark text-shadow h5">{precio}</span>

          <span className="text-right  badge-dark badge-pill text-center  ">
            {estado}
          </span>
        </div>
        <div class="row">
          {imagenes[0] ? (
            <div className="  publicacionBazar-img ">
              <img
                data-target="#modalImagen"
                data-toggle="modal"
                src={imagenes[0].imageUrl}
                onClick={() => seleccionarProducto(datos)}
                className="mx-3 my-3 rounded-lg fit  w-100 "
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
      </Link>
    </div>
  );
};

export default ProductoBazar;
