import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Consejos from "./Components/Consejos";
import Footer from "./Components/Footer";
import Rentas from "./Components/Rentas";

import DejaConsejo from "./Components/DejaConsejo";
function App() {
  const [paginaEnPrincipal, setpaginaEnPrincipal] = useState({
    consejos: true,
    rentas: false,
    dejarConsejo: false,
  });

  return (
    <>
       

      <Navbar setpaginaEnPrincipal={setpaginaEnPrincipal} />
      <div className="App container-fluid min-vh-100 pt-5">
        {paginaEnPrincipal.consejos === true ? <Consejos /> : null}
        {paginaEnPrincipal.rentas === true ? <Rentas /> : null}
        {paginaEnPrincipal.dejarConsejo === true ? <DejaConsejo /> : null}
        <Footer />
      </div>
      
     

    </>
  );
}

export default App;
