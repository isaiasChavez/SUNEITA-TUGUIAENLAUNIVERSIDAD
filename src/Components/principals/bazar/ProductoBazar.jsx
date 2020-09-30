import React from "react";

const Consejo = ({ datos }) => {
  const {
    _id,
    titulo,
    username,
    estado,
    condicion,
    direccion,
    precio,
    descripcion,
    imagenes,
    fecha,
  } = datos;

  let background = "bg-secondary";
  let textColor = "text-white";
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
      class={`card  mt-2 p-3 col-sm-12 col-md-5 col-lg-5 m-3  ${background}`}
    >
      <div class="card-header p-3 pl-3 mt-3 rounded d-flex flex-column">
        <div className="d-flex justify-content-between">
          <cite title="" className={`${textColor} lead`}>
            {titulo}
          </cite>
          <div className="lead mx-4 text-white">{precio}</div>
        </div>

        <p class="card-text ">
          <small className=" text-white ">{condicion} </small>
        </p>
        <p class="card-text ">
          <small className="text-white lead">{direccion} </small>
        </p>
      </div>
      <div
        class={`card-body p-0 ${textColor} justify-content-center d-flex flex-column flex-md-row`}
      >
        <div className="publicacionBazar-img col-md-6">
          <img src={imagenes[0]} className="mx-3 my-3" alt="" />
        </div>
        {/* Carrusel */}

        <blockquote class="blockquote mb-0 text-right col-md-6">
          <ul class="list-group list-group-flush ">
            <li class={`list-group-item ${background} p-2`}>
              <p className="card-text font-weight-light text-consejo p-1 pt-3">
                {descripcion}
              </p>
            </li>
          </ul>

          <footer class="blockquote-footer mb-4">
            <p class=" text-monospace text-dark">
              <a
                href={`https://www.instagram.com/`}
                className="btn btn-sm btn-outline-light mb-2 ml-3"
              >
                <small>Contactar por Instagram </small>
              </a>
              <a
                href={`https://www.instagram.com/`}
                className="btn btn-sm btn-outline-light mb-2 ml-3"
              >
                <small>Contactar por Facebook</small>
              </a>
            </p>
            <p class="card-text">
              <small class="text-muted">{fecha} </small>
            </p>
          </footer>
        </blockquote>
      </div>
    </div>
  );
};

export default Consejo;
