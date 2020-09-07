import React,{useContext} from "react";
import img from "../../../img/fondo.jpg";
import rentasContext from "../../../State/rentasContext";


const PublicationProfile = ({data}) => {
    const { datosRentas } = useContext(rentasContext);
    
    const editarPublicacion= ()=>{
        datosRentas.editRentsByUserAndId()
    }

    const eliminarPublicacion= ()=>{
        datosRentas.deleteRentsByUserAndId()
    }
    const pausarPublicacion= ()=>{
        datosRentas.pauseRentsByUserAndId()
    }

  return (
    <div class="card">
      <img src={img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{data.titulo} | {data.status}</h5>

        <p class="card-text">
          <small class="text-muted">{data.precio}</small>
        </p>
        <div className="btn-group w-100">
          <button className="btn btn-outline-dark" onClick={editarPublicacion}>Editar</button>
          <button className="btn btn-outline-secondary" onClick={pausarPublicacion}>Pausar</button>
          <button className="btn btn-outline-danger" onClick={eliminarPublicacion}>Eliminar</button>
        </div>
      </div>
    </div>
  );
};

export default PublicationProfile;
