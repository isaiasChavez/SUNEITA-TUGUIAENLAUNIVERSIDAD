import React, { useReducer } from "react";
import BazarContext from "./bazarContext";
import BazarReducer from "./bazarReducer";
import mueble1 from "../../img/muebles/mueble1.jpg";
import mueble2 from "../../img/muebles/mueble2.jpg";
import mueble3 from "../../img/muebles/mueble3.jpg";
import mueble4 from "../../img/muebles/mueble4.jpg";
const BazarState = (props) => {
  const publicacionesBazar = [
    {
      _id: 1,
      titulo: "Comoda de chocolate",
      estado: "rentar",
      condicion: "nueva",
      direccion: "",
      precio: "88",
      username: "username1",
      descripcion:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corrupti veniam nesciunt consequuntur ex natus unde saepe, delectus molestias officiis!",
      imagenes: [mueble1],
    },
    {
      _id: 2,
      username: "username2",
      titulo: "Colchón para una persona",
      estado: "rentar",
      condicion: "nueva",
      direccion: "",
      precio: "299",
      descripcion:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corrupti veniam nesciunt consequuntur ex natus unde saepe, delectus molestias officiis!",
      imagenes: [mueble2],
    },
    {
      _id: 3,
      username: "username3",
      titulo: "Mueble para libros",
      estado: "rentar",
      condicion: "nueva",
      direccion: "",
      precio: "300",
      descripcion:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corrupti veniam nesciunt consequuntur ex natus unde saepe, delectus molestias officiis!",
      imagenes: [mueble3],
    },
    {
      _id: 4,
      titulo: "Mueble de cocina",
      username: "username4",
      estado: "rentar",
      condicion: "nueva",
      direccion: "",
      precio: "99",
      descripcion:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corrupti veniam nesciunt consequuntur ex natus unde saepe, delectus molestias officiis!",
      imagenes: [mueble4],
    },
  ];

  const initialState = {
    publicacionesBazar,
  };
  const [state, dispatch] = useReducer(BazarReducer, initialState);

  return (
    <BazarContext.Provider
      value={{
        publicacionesBazar: state.publicacionesBazar,
      }}
    >
      {props.children}
    </BazarContext.Provider>
  );
};

export default BazarState;
