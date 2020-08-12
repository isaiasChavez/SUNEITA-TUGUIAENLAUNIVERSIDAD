import React from "react";

const Consejo = ({ datos }) => {
  const {
    nombre,
    semestre,
    carrera,
    instagram,
    fecha,
    consejo,
    vivir,
    visitar,
    comer,
    datosVivir,
  } = datos;

  return (
    <div class="card mb-5 m-2 col-md-5 col-lg-5">
      <div class="card-header p-3 mt-3"> Me hubiera gustado saber...</div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          {consejo ? 
          <div>
          <p class="card-text font-weight-light font-italic">"{consejo}"</p>
          
          </div>
          :null}
          <ul class="list-group list-group-flush ">
            {vivir ? (
              <li class="list-group-item bg-light">
                Lugares donde recomiendo vivir:
                <p class="card-text font-weight-light">{vivir}</p>
                <div class="accordion" id="accordionExample">
                  <div class="card">
                    <div class="card-header" id="headingTwo">
                      <h2 class="mb-0">
                        <button
                          class="btn btn-link btn-block text-left  collapsed"
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
                          </span>{datosVivir.nombre}
                        </li>
                        <li class="list-group-item ">
                          <span className="text-info">
                            Número de contacto:{" "}
                          </span>{" "}
                          {datosVivir.contacto}
                        </li>
                        <li class="list-group-item">
                          <span className="text-info">Dirección:</span>{" "}
                          {datosVivir.direccion}{" "}
                        </li>
                        <li class="list-group-item">
                          <span className="text-info"> Referencia: </span>{" "}
                          {datosVivir.referencia}{" "}
                        </li>
                        <li class="list-group-item">
                          <span className="text-info">
                            Rango de precios estimado:
                          </span>{" "}
                          {datosVivir.rango_precios}{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            ) : null}
            {visitar ? (
              <li class="list-group-item">
                Lugares que recomiendo visitar:
                <p className="card-text font-weight-light">{visitar}</p>
              </li>
            ) : null}
            {comer ? (
              <li class="list-group-item">
                Lugares donde recomiendo ir a comer:
                <p className="card-text font-weight-light">{comer}</p>
              </li>
            ) : null}
          </ul>
          <footer class="blockquote-footer mb-4">
            <cite title="Source Title">{nombre}</cite>
            <p class="card-text">
              <small class="text-muted">
                {semestre}° Semestre | {carrera}
              </small>
            </p>
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
