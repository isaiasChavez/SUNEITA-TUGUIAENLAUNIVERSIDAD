import React, { Fragment, useContext, useEffect } from "react";
import ScrollToTopOnMount from "../../routes/ScrollToTopOnMount";
import { CASA, DEPARTAMENTO, HABITACION } from "../../../types";
import Renta from "./Renta";
import Hero from "../layout/Hero";
import rentasContext from "../../../State/rentas/rentasContext";
import note_taking from "../../../img/note_taking.svg";
import { Link } from "react-router-dom";
const Rentas = () => {
  useEffect(() => {
    obtenerRentas();
  }, []);

  const {
    rentasSeleccionadas,
    obtenerRentasPorTipo,
    obtenerRentas,
  } = useContext(rentasContext);

  const getCasas = () => {
    obtenerRentasPorTipo(CASA);
  };
  const getDepartamentos = () => {
    obtenerRentasPorTipo(DEPARTAMENTO);
  };
  const getHabitaciones = () => {
    obtenerRentasPorTipo(HABITACION);
  };

  return (
    <Fragment>
      <ScrollToTopOnMount />
      <Hero
        principal="Escoje lo que se adapte a ti"
        secondary=" Busca el cuarto que se adapte a tus necesidades, estarás aquí un buen tiempo."
        class={""}
        textButton="¿Buscas muebles?"
        button="Ir al bazar"
        link="consejos"
      />

      <div className="infoInicio row d-flex justify-content-around text-center  mx-4 mt-5">
        <button
          className=" lead col-5 col-lg-2 m-md-4 shadow p-3 mb-2 mb-md-5 bg-white rounded-lg"
          onClick={getCasas}
        >
          <span class="material-icons  text-dark icon">house</span>
          <p className=" text-dark text-smaller">Casas</p>
        </button>

        <button
          className=" lead col-5 col-lg-2 m-md-4 shadow p-3 mb-2 mb-md-5 bg-white rounded-lg"
          onClick={getDepartamentos}
        >
          <span class="material-icons icon">domain</span>
          <p className="text-smaller text-center">Depas</p>
        </button>
        <button
          className=" lead col-5 col-lg-2 m-md-4 shadow p-3 mb-2 mb-md-5 bg-white rounded-lg"
          onClick={getHabitaciones}
        >
          <span class="material-icons icon">check_box_outline_blank</span>
          <p className="text-smaller text-center">Habitaciones</p>
        </button>
        <button
          className=" lead col-5 col-lg-2 m-md-4 shadow p-3 mb-2 mb-md-5 bg-white rounded-lg"
          onClick={obtenerRentas}
        >
          <span class="material-icons   text-dark icon">house</span>
          <p className=" text-dark text-smaller ">Todas</p>
        </button>
      </div>
      <div className="container">
        {rentasSeleccionadas.length > 0 ? (
          <div className="h3 lead py-5 justify-content-around">
            {" "}
            Ultimos lugares publicados
          </div>
        ) : null}

        {/* LISTA DE RENTAS */}
        <div class=" row d-flex flex-wrap mb-5 pb-5">
          {rentasSeleccionadas.map((renta) => (
            <>
              <Renta renta={renta} />
            </>
          ))}
          {rentasSeleccionadas.length === 0 ? (
            <div className=" min-vh-100 w-100 justify-content-center align-items-center d-flex flex-column">
              <p className="text-center lead">
                Parece que no hay rentas publicadas
                <img src={note_taking} alt="" />
              </p>
              <Link
                to="/crearPublicacion"
                className="btn btn-outline-dark w-50 btn-block my-5 py-2"
              >
                Publicar
              </Link>
            </div>
          ) : null}
        </div>
      </div>
      {/* <div className=" lead text-center py-5">
        <p>
          Recuerda que estos son aportes de Utemitas, las condiciones pueden
          variar cuando contactes al locatario.
        </p>
        <p className="">En un futuro tendremos información de primera mano</p>
      </div> */}
    </Fragment>
  );
};

export default Rentas;
