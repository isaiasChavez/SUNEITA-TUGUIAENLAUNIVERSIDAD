import React, { useContext, useEffect, Fragment } from "react";
import ProductoBazar from "./ProductoBazar";
import ModalImagen from "../../utilities/ModalImagen";
import Fade from "react-reveal/Fade";
import bazarContext from "../../../State/bazar/bazarContext";
import Hero from "../layout/Hero";

import {
  MUEBLES,
  ELECTRODOMESTICOS,
  ELECTRONICA,
  HOGAR,
  MATERIAL_ESCOLAR,
} from "../../../types";
import { Link } from "react-router-dom";

const ProductosBazar = () => {
  const {
    obtenerProductos,
    productosSeleccionados,
    obtenerProductosPorCategoria,
  } = useContext(bazarContext);

  useEffect(() => {
    obtenerProductos();
  }, []);

  const onClickCategoria = (e) => {
    if (e.target.name === "TODO") {
      obtenerProductos();
      return;
    }

    obtenerProductosPorCategoria(e.target.name);
  };

  return (
    <Fragment>
      <ModalImagen />
      <Hero
        principal="Vende algo que ya no ocupas"
        secondary="Quizá le sea util a alguien que aún está en el camino"
        button="Publica un anuncio"
        link="publicarenbazar"
      />

      <div className=" container-fluid pt-5  ">
        <div className="row justify-content-around py-5">
          <h2 className="lead display-5 px-5 text-center  ">
            Ultimos publicaciones de <span>Estudiantes</span>
          </h2>
        </div>
        <div className="row pb-5 ">
          <div
            class="btn-group d-flex flex-wrap col-lg-4 offset-lg-4 pt-4 botones-principal"
            role="group"
            aria-label="Basic example"
          >
            <button
              name={ELECTRONICA}
              type="button"
              class="btn btn-outline-dark m-1"
              onClick={onClickCategoria}
            >
              Electronica
            </button>
            <button
              name={ELECTRODOMESTICOS}
              type="button"
              class="btn btn-outline-dark m-1"
              onClick={onClickCategoria}
            >
              Electrodomesticos
            </button>

            <button name={HOGAR} type="button" class="btn btn-outline-dark m-1">
              Hogar
            </button>
            <button
              name={MUEBLES}
              type="button"
              class="btn btn-outline-dark m-1"
              onClick={onClickCategoria}
            >
              Muebles
            </button>
          </div>
          <div
            class="btn-group d-flex flex-wrap col-lg-4 offset-lg-4  botones-principal"
            role="group"
            aria-label="Basic example"
          >
            <button
              name={MATERIAL_ESCOLAR}
              type="button"
              class="btn btn-outline-dark m-1"
              onClick={onClickCategoria}
            >
              Material escolar
            </button>
            <button
              name="TODO"
              type="button"
              class="btn btn-outline-dark m-1"
              onClick={onClickCategoria}
            >
              Todo
            </button>
          </div>
        </div>
        <Fade>
          <div className="row d-flex justify-content-around">
            {productosSeleccionados.map((datos) => (
              <ProductoBazar datos={datos} key={datos._id} />
            ))}
            {productosSeleccionados.length === 0 ? (
              <h4>Parece que no hay ningún producto relacionado</h4>
            ) : null}
          </div>
          <div className="row p-5 my-5">
            <div className="col justify-content-center ">
              <Link
                to="/publicarenbazar"
                className="btn btn-outline-dark  m-auto btn-lg btn-block"
              >
                Publica algo
              </Link>
            </div>
          </div>
        </Fade>
      </div>
    </Fragment>
  );
};

export default ProductosBazar;
