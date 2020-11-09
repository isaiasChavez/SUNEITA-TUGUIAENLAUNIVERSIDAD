import React from "react";
import img from "../../../img/Slider/cielo.jpg";
import img2 from "../../../img/Slider/paisaje-medium.jpg";
import Loading from "../../utilities/Loading";
import { useState } from "react";
import { useEffect } from "react";

const Carrusel = ({ arrayImagenes }) => {
  const [resolucionPantalla, setreResolucionPantalla] = useState({
    ancho: 0,
    alto: 0,
  });

  useEffect(() => {
    tamVentana();
  }, []);

  const tamVentana = () => {
    if (typeof window.innerWidth != "undefined") {
      setreResolucionPantalla({
        ancho: window.innerWidth,
        alto: window.innerHeight,
      });
    } else if (
      typeof document.documentElement != "undefined" &&
      typeof document.documentElement.clientWidth != "undefined" &&
      document.documentElement.clientWidth != 0
    ) {
      setreResolucionPantalla({
        ancho: document.documentElement.clientWidth,
        alto: document.documentElement.clientHeight,
      });
    } else {
      setreResolucionPantalla({
        ancho: document.getElementsByTagName("body")[0].clientWidth,
        alto: document.getElementsByTagName("body")[0].clientHeight,
      });
    }
  };
  window.addEventListener("resize", tamVentana);

  if (resolucionPantalla.ancho < 750) {
    return (
      <>
        <div
          id="carouselExampleInterval"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active" data-interval="10000">
              <img src={img2} class="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div
        id="carouselExampleInterval"
        class="row imagenes-publicacion-contenedor"
      >
        <div className="col col-lg-6">
          <img
            src={img}
            class="img-fluid fit imagenes-publicacion-imagenPrincipal-2"
            alt="..."
          />
        </div>

        <div className="col col-lg-6">
          <div className="row">
            {arrayImagenes ? (
              arrayImagenes.map((imagen) => (
                <div className=" col col-lg-6">
                  <div className=" imagenes-publicacion-imagen">
                    <img
                      src={imagen.imageUrl}
                      class="img-fluid fit w-100"
                      alt="..."
                    />
                  </div>
                </div>
              ))
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carrusel;
