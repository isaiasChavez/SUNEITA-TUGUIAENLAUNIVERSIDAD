import React, { Fragment, useContext, useEffect, useState } from "react";
import AlertasContext from "../../../../State/alertas/alertasContext";
import ScrollToTopOnMount from "../../../routes/ScrollToTopOnMount";
import Mapa from "../../../utilities/Maps/Mapa";

import { useRouteMatch } from "react-router-dom";
import img from "../../../../img/city.svg";
import axios from "axios";
const Form4 = ({ onDataChange, dataFormulario, route, setProgreso }) => {
  useEffect(() => {
    setProgreso(70);
  }, []);

  let match = useRouteMatch();
  const alertasContext = useContext(AlertasContext);

  const { mostrarAlerta } = alertasContext;

  const [ubicacion, setUbicacion] = useState({
    lng: -97.809416,
    lat: 17.827829,
  });

  const [address, setAddress] = useState("");
  const [resultadosBusqueda, setResultadosBusqueda] = useState(null);
  const [confirmarPosicion, setConfirmarPosicion] = useState(false);

  const nextPage = (e) => {
    e.preventDefault();
    //Se evalua cuantas zonas fueron marcadas para no dejar vacio el campo
    //Se da la oportunidad de dejar sola la publicación
    if (
      dataFormulario.direccion === "" ||
      dataFormulario.ciudad === "" ||
      dataFormulario.estado === "" ||
      dataFormulario.codigopostal === "" ||
      dataFormulario.numeroexterior === "" ||
      dataFormulario.numeroexterior === null
    ) {
      mostrarAlerta("Faltan datos", "warning");
      return;
    }
    route.push(`${match.url}/descripcion`);
  };

  const handleMovement = async (e) => {
    console.log(e.target._latlng);

    setUbicacion({
      lng: e.target._latlng.lng,
      lat: e.target._latlng.lat,
    });
    const dataa = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${
        e.target._latlng.lat
      },${
        e.target._latlng.lng
      }&key=${"AIzaSyDirw9kMal3-8B22jSurVO3rh54BnlMNlw"}`
    );
    const respuesta = await dataa.json();

    console.log(respuesta.results[0], "DATAA22");
    setAddress(respuesta.results[0].formatted_address);

    setConfirmarPosicion(true);
    const nuevosDatos = {
      target: {
        name: "coordenadas",
        value: {
          lng: e.target._latlng.lng,
          lat: e.target._latlng.lat,
        },
      },
    };
    onDataChange(nuevosDatos);
  };

  const obtenerUbicacionActual = () => {
    navigator.geolocation.getCurrentPosition(
      async (objPosition) => {
        console.log(objPosition);
        setUbicacion({
          lng: objPosition.coords.longitude,
          lat: objPosition.coords.latitude,
        });

        const dataa = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${
            objPosition.coords.latitude
          },${
            objPosition.coords.longitude
          }&key=${"AIzaSyDirw9kMal3-8B22jSurVO3rh54BnlMNlw"}`
        );
        const respuesta = await dataa.json();

        console.log(respuesta.results[0], "DATAA");
        setAddress(respuesta.results[0].formatted_address);
        setConfirmarPosicion(true);

        const nuevosDatos = {
          target: {
            name: "coordenadas",
            value: {
              lng: objPosition.coords.longitude,
              lat: objPosition.coords.latitude,
            },
          },
        };
        onDataChange(nuevosDatos);
      },
      (objPositionError) => {
        let errormessage = "";
        switch (objPositionError.code) {
          case objPositionError.PERMISSION_DENIED:
            errormessage =
              "No se ha permitido el acceso a la posición del usuario.";
            break;
          case objPositionError.POSITION_UNAVAILABLE:
            errormessage =
              "No se ha podido acceder a la información de su posición.";
            break;
          case objPositionError.TIMEOUT:
            errormessage =
              "El servicio ha tardado demasiado tiempo en responder.";
            break;
          default:
            errormessage = "Error desconocido.";
        }
      },
      {
        maximumAge: 75000,
        timeout: 15000,
      }
    );
  };
  // `https://maps.googleapis.com/maps/api/geocode/json?address=${e.target.value}&key=AIzaSyDirw9kMal3-8B22jSurVO3rh54BnlMNlw`;
  // `https://maps.googleapis.com/maps/api/place/autocomplete/xml?input=${e.target.value}&types=establishment&location=37.76999,-122.44696&radius=500&key=YOUR_API_KEY`
  const handleAdress = async (e) => {
    console.log(e.target.value);
    setAddress(e.target.value);
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${e.target.value}&components=country:MX&key=AIzaSyDirw9kMal3-8B22jSurVO3rh54BnlMNlw`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setResultadosBusqueda(data.results);
      });
  };

  const actualizarConDireccion = (data) => {
    setUbicacion(data.geometry.location);
    setResultadosBusqueda(null);
    setAddress(data.formatted_address);
  };

  return (
    <Fragment>
      <div className="container min-vh-100  d-flex flex-column justify-content-center w-100 pt-5 mt-5 mt-md-2 ">
        <ScrollToTopOnMount />
        <div className="row mt-5 pt-5 ">
          <div className="col-lg-10  pr-5 mx-4 mb-4 ">
            <div className="row w-100">
              <h2>¿Dónde está ubicado?</h2>
            </div>

            <form className="my-5" onSubmit={nextPage}>
              <div class="form-group">
                <label for="inputAddress">Dirección</label>
                <input
                  selected
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  value={address}
                  placeholder="Ejemplo: Calle nardos esquina pensamientos"
                  name="direccion"
                  onChange={handleAdress}
                />
                <p className="text-muted py-2">
                  Si no encuentras tu dirección prueba con otras palabras sin
                  números o mueve el puntero azul al sitio correcto
                </p>
                {resultadosBusqueda ? (
                  <ul className="list-group">
                    {resultadosBusqueda.map((data) => (
                      <li
                        className="list-group-item"
                        onClick={() => {
                          actualizarConDireccion(data);
                        }}
                      >
                        <div className="btn">{data.formatted_address}</div>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <div className="form-group">
                <h3 className="my-5"></h3>

                <div className="mapa-contenedor d-flex justify-content-center">
                  <Mapa ubicacion={ubicacion} handleMovement={handleMovement} />
                </div>
                <div className="my-5">
                  <button
                    className="btn btn-large btn-outline-dark"
                    onClick={obtenerUbicacionActual}
                  >
                    Usar mi ubicación actual
                  </button>
                </div>
              </div>

              <div className="form-group pt-5">
                <button
                  type="submit"
                  onClick={nextPage}
                  className="btn btn-outline-dark"
                >
                  Continuar
                </button>
              </div>
            </form>
          </div>

          <div className="col-lg-4 py-5 text-center pl-5">
            <img src={img} alt="" className="img-fluid " />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Form4;
