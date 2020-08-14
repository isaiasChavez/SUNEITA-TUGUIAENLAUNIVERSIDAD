import React from "react";

const Consejo = ({ datos }) => {
  console.log(datos);
  const {
    nombre,
    tipo,
    semestre,
    carrera,
    instagram,
    fecha,
    titulo,
    consejo,
    datosRenta,
  } = datos;
  let background = "";
  let textColor = ''
  let textColorSecondary = 'text-muted'
  switch (tipo) {
    case "rentar":
      background = "bg-dark";
      textColor='text-white'
      textColorSecondary = 'text-secondary'
      break;
    case "visitar":
      background = "bg-light";
      textColor='text-dark'
      break;
    case "comer":
      background = "bg-white";
      textColor='text-dark'
      break;
    case "simple":
      background = "bg-secondary";
      textColor='text-white'
      textColorSecondary = 'text-white'
      break;
    default:
      break;
  }

  
  if (titulo) {
    
  }
  return (    
    <div
      class={`card  m-2 col-sm-12 col-md-5 col-lg-5  ${background}`}
    >
        
      <div class="card-header p-1 pl-3 mt-3 rounded d-flex flex-column">
      
        <cite title="Source Title" className={`${textColor}`}>{nombre}</cite>
        
        <p class="card-text " >
          <small  className={`${textColorSecondary}`}>
            {semestre}° Semestre | {carrera}
          </small>
        </p>
      </div>
      <div class={`card-body p-0 ${textColor}`}>
        <blockquote class="blockquote mb-0">
          <ul class="list-group list-group-flush ">
            {tipo == "rentar" ? (
              <li class={`list-group-item ${background} p-2`}>
                {titulo}  
                <p class="card-text font-weight-light text-consejo p-1 pt-3  ">
                  {consejo}
                </p>
                <div class="accordion" id="accordionExample">
                  <div class="card">
                    <div class="card-header p-0" id="headingTwo">
                      <h2 class="mb-0">
                        <button
                          class="btn btn-link btn-block btn-light p-2 w-100  text-center  collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target={`#${nombre}`}
                          aria-expanded="false"
                          aria-controls={`#${nombre}`}
                        >
                          Ver informacion
                        </button>
                      </h2>
                    </div>

                    <div
                      id={`${nombre}`}
                      class="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <ul class="list-group list-group-flush font-weight-light">
                        <li class="list-group-item">
                          <span className="text-info">
                            Nombre o apodo del lugar:
                          </span>
                          {datosRenta.nombre}
                        </li>
                        <li class="list-group-item ">
                          <span className="text-info">
                            Número de contacto:{" "}
                          </span>{" "}
                          {datosRenta.contacto}
                        </li>
                        <li class="list-group-item">
                          <span className="text-info">Dirección:</span>{" "}
                          {datosRenta.direccion}{" "}
                        </li>
                        <li class="list-group-item">
                          <span className="text-info"> Referencia: </span>{" "}
                          {datosRenta.referencia}{" "}
                        </li>
                        <li class="list-group-item">
                          <span className="text-info">
                            Rango de precios estimado:
                          </span>{" "}
                          {datosRenta.rango_precios}{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            ) : null}
            {tipo === "visitar" ? (
              <li class={`list-group-item ${background} p-2`}>
                {titulo}
                <p className="card-text font-weight-light text-consejo p-1 pt-3 ">
                  {consejo}
                </p>
              </li>
            ) : null}
            {tipo == "comer" ? (
              <li class={`list-group-item ${background} p-2`}>
                {titulo}
                <p className="card-text font-weight-light text-consejo p-1 pt-3">
                  {consejo}
                </p>
              </li>
            ) : null}
            {tipo == "simple" ? (
              <li class={`list-group-item ${background} p-2`}>
                {titulo}
                <p className="card-text font-weight-light text-consejo p-1 pt-3">
                  {consejo}
                </p>
              </li>
            ) : null}
          </ul>
          <footer class="blockquote-footer mb-4">
            <a class=" text-monospace text-dark">
              <a href={`https://www.instagram.com/${instagram}/`}>
                <small>Instagram </small>
              </a>
            </a>
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
