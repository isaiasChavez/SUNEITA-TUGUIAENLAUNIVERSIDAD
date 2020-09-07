import React from "react";
import { useParams} from "react-router-dom";

const Contacto = () => {

  const { username } = useParams();

  

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <div>Contacto{username}</div>

    </div>
  );
};

export default Contacto;
