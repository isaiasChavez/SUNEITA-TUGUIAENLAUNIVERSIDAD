import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Consejos from "./Components/Consejos";
import Footer from "./Components/Footer";
import Rentas from "./Components/Rentas";
import Slider from "./Components/Slider";
import DejaConsejo from "./Components/DejaConsejo";

import Hero from "./Components/Hero";

function App() {
  const [paginaEnPrincipal, setpaginaEnPrincipal] = useState({
    consejos: true,
    rentas: false,
    dejarConsejo: false,
  });
  

  const [informacion, setInformacion] = useState([
    {
      nombre: "Javier",
      tipo:'rentar',
      semestre: "5",
      carrera: " Ingeniería en computación",
      instagram: "soyisaiaschavez",
      fecha: "11/08/2020",
      titulo:"Lorem ipsum dolor,",
      consejo:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, fugit",
      datosRenta: {
        nombre: "Profesor Jesus González Acevedo",
        contacto: "951 513 4378",
        direccion: "Nardos 103, Acatlima, Huajuapan de Leon",
        referencia: "",
        rango_precios: "900 - 1000",
        mascotas: "no",
      },
    
    },
    {
      nombre: "Isaías",
      tipo: "visitar",
      semestre: "5",
      carrera: " Ingeniería en computación",
      instagram: "soyisaiaschavez",
      fecha: "11/08/2020",
      titulo:"Consejo de visita,",
      consejo:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, fugit",
    },
    {
      nombre: "Isaías",
      tipo:'comer',
      semestre: "5",
      carrera: " Ingeniería en computación",
      instagram: "soyisaiaschavez",
      fecha: "11/08/2020",  
      titulo:"Consejo de lugar para comer,",  
      consejo:
        " Normalmente en la universidad siempre voy a comer a bambú, pero si no tienes tiempo en la cafetería mi amigo isidro es muy amable",
    },
    {
      nombre: "Isaías",
      tipo:'simple',
      semestre: "5",
      carrera: " Ingeniería en computación",
      instagram: "soyisaiaschavez",
      fecha: "11/08/2020",
      titulo:"Un simple consejo",
      consejo: "No te lleves demasiadas cosas si te gustaría mudarte seguido",
    },
  ]);

  return (
    <>
      <Navbar setpaginaEnPrincipal={setpaginaEnPrincipal} />

      {paginaEnPrincipal.consejos === true ? (
        <Slider informacion={informacion} setpaginaEnPrincipal={setpaginaEnPrincipal} />
      ) : null}
      {paginaEnPrincipal.consejos === true ? <Hero setpaginaEnPrincipal={setpaginaEnPrincipal} /> : null}

      <div className="App container-fluid min-vh-100 pt-5">
        {paginaEnPrincipal.consejos === true ? (
          <Consejos informacion={informacion} setInformacion={setInformacion} setpaginaEnPrincipal={setpaginaEnPrincipal} />
        ) : null}

        {paginaEnPrincipal.rentas === true ? <Rentas /> : null}
        {paginaEnPrincipal.dejarConsejo === true ? <DejaConsejo /> : null}
        <Footer />
      </div>
    </>
  );
}

export default App;
