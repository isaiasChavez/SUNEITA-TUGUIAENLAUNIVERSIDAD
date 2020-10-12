import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import RentasContext from "../../../State/rentas/rentasContext";
import Loading from "../../utilities/Loading";
import { format } from "timeago.js";
const Renta = ({ renta }) => {
  //Contexts
  const { obtenerImagenesRenta } = useContext(RentasContext);
  //State
  const [imagenesRenta, setImagenesRenta] = useState(null);

  //UseEfects
  useEffect(() => {
    obtenerImagenesRenta(renta._id)
      .then((data) => {
        const { images } = data.data.imagenes[0];
        setImagenesRenta(images);
      })
      .catch((error) => {
        console.log("Hubo un error al obtener la data ", error);
      });
  }, []);

  const { _id, titulo, tipoCuarto, asentamiento, precio, created_at } = renta;

  return (
    <div class="col col-12 col-md-4 col-lg-4 pb-0 my-3 shadow rounded-lg p-3 ">
      <Link to={`/publicacion/${_id}`}>
        <div className="card-header">
          <p className="text-dark">{format(created_at)}</p>
        </div>
        <div class="card  border-0">
          <div className="">
            {imagenesRenta ? (
              <img
                src={imagenesRenta[0].imageUrl}
                class="img-fluid fit  rounded"
                alt="..."
              />
            ) : (
              <Loading />
            )}
          </div>

          <div class="card-body font-weight-light h6 text-muted text-rent">
            <p class="text-rent py-3">
              <span className="text-capitalize font-weight-bolder  font-weight-bold text-primary">
                {tipoCuarto}
              </span>{" "}
              | {asentamiento}
            </p>
            <p className="text-rent">{titulo.slice(0, 50)}...</p>
            <p class="font-weight-bold text-rent my-3">{precio} al mes</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Renta;
