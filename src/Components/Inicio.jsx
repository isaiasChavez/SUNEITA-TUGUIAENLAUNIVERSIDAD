import React, { Fragment, useContext } from "react";
import Hero from "./Hero";
import Slider from "./Slider";
import Consejos from "./Consejos";
import Footer from "./Footer";
import ConsejosContext from '../State/consejosContext'
const Inicio = () => {

    const msg = useContext(ConsejosContext)

  return (
    <Fragment>
      <div className=" min-vh-100">
        <Slider />
        <Hero />
        <Consejos />
        <Footer />
        
      </div>
    </Fragment>
  );
};

export default Inicio;
