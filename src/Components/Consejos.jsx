import React, { useState, useEffect } from "react";
import Consejo from "./Consejo";
import './Consejos.css'
import Fade from "react-reveal/Fade";

const Consejos = () => {
  const [informacion, setInformacion] = useState([
    {
      nombre: "Javier",
      semestre: "5",
      carrera: " Ingeniería en computación",
      instagram: "soyisaiaschavez",
      fecha: "11/08/2020",
      consejo: "No te lleves demasiadas cosas si te gustaría mudarte seguido",
      vivir:
        'Recomiento ampliamente los cuartos que les llaman "Las ratoneras", son cuartos pequeños. Pero son muy cómodos y como te los dan amueblados la mayoria de tus cosas caben. Los dueños son bastante amables y nunca diría que tuve problemas porque son un amor ',
        datosVivir:{
          nombre:'Profesor Jesus González Acevedo',
          contacto:'951 513 4378',
          direccion:'Nardos 103, Acatlima, Huajuapan de Leon',
          referencia:'',
          rango_precios:'900 - 1000',
          mascotas:'no'
        },
      visitar:
        "Si tienen la oportunidad de ir al rio de acatlima a las 2 de la mañana es una experiecia inolvidable ",
      comer:
        " Normalmente en la universidad siempre voy a comer a bambú, pero si no tienes tiempo en la cafetería mi amigo isidro es muy amable",
    },
    {
      nombre: "Isaías",
      semestre: "5",
      carrera: " Ingeniería en computación",
      instagram: "soyisaiaschavez",
      fecha: "11/08/2020",
      consejo: "No te lleves demasiadas cosas si te gustaría mudarte seguido",
      vivir:
        'Recomiento ampliamente los cuartos que les llaman "Las ratoneras", son cuartos pequeños. Pero son muy cómodos y como te los dan amueblados la mayoria de tus cosas caben. Los dueños son bastante amables y nunca diría que tuve problemas porque son un amor ',
      datosVivir:{
        nombre:'Profesor Jesus González Acevedo',
        contacto:'951 513 4378',
        direccion:'Nardos 103, Acatlima, Huajuapan de Leon',
        referencia:'',
        rango_precios:'900 - 1000',
        mascotas:'no'
      },
      visitar:
        "Si tienen la oportunidad de ir al rio de acatlima a las 2 de la mañana es una experiecia inolvidable ",
      comer:
        " Normalmente en la universidad siempre voy a comer a bambú, pero si no tienes tiempo en la cafetería mi amigo isidro es muy amable",
    },
    {
      nombre: "Isaías",
      semestre: "5",
      carrera: " Ingeniería en computación",
      instagram: "soyisaiaschavez",
      fecha: "11/08/2020",
      consejo: "No te lleves demasiadas cosas si te gustaría mudarte seguido",
      vivir:
        'Recomiento ampliamente los cuartos que les llaman "Las ratoneras", son cuartos pequeños. Pero son muy cómodos y como te los dan amueblados la mayoria de tus cosas caben. Los dueños son bastante amables y nunca diría que tuve problemas porque son un amor ',
      datosVivir:{
        nombre:'Profesor Jesus González Acevedo',
        contacto:'951 513 4378',
        direccion:'Nardos 103, Acatlima, Huajuapan de Leon',
        referencia:'',
        rango_precios:'900 - 1000',
        mascotas:'no'
      },
      visitar:
        "Si tienen la oportunidad de ir al rio de acatlima a las 2 de la mañana es una experiecia inolvidable ",
      comer:
        " Normalmente en la universidad siempre voy a comer a bambú, pero si no tienes tiempo en la cafetería mi amigo isidro es muy amable",
    },
    {
      nombre: "Isaías",
      semestre: "5",
      carrera: " Ingeniería en computación",
      instagram: "soyisaiaschavez",
      fecha: "11/08/2020",
      consejo: "No te lleves demasiadas cosas si te gustaría mudarte seguido",
      vivir:
        'Recomiento ampliamente los cuartos que les llaman "Las ratoneras", son cuartos pequeños. Pero son muy cómodos y como te los dan amueblados la mayoria de tus cosas caben. Los dueños son bastante amables y nunca diría que tuve problemas porque son un amor ',
      datosVivir:{
        nombre:'Profesor Jesus González Acevedo',
        contacto:'951 513 4378',
        direccion:'Nardos 103, Acatlima, Huajuapan de Leon',
        referencia:'',
        rango_precios:'900 - 1000',
        mascotas:'no'
      },
      visitar:
        "Si tienen la oportunidad de ir al rio de acatlima a las 2 de la mañana es una experiecia inolvidable ",
      comer:
        " Normalmente en la universidad siempre voy a comer a bambú, pero si no tienes tiempo en la cafetería mi amigo isidro es muy amable",
    },
    {
      nombre: "Isaías",
      semestre: "5",
      carrera: " Ingeniería en computación",
      instagram: "soyisaiaschavez",
      fecha: "11/08/2020",
      consejo: "No te lleves demasiadas cosas si te gustaría mudarte seguido",
      vivir:
        'Recomiento ampliamente los cuartos que les llaman "Las ratoneras", son cuartos pequeños. Pero son muy cómodos y como te los dan amueblados la mayoria de tus cosas caben. Los dueños son bastante amables y nunca diría que tuve problemas porque son un amor ',
      datosVivir:{
        nombre:'Profesor Jesus González Acevedo',
        contacto:'951 513 4378',
        direccion:'Nardos 103, Acatlima, Huajuapan de Leon',
        referencia:'',
        rango_precios:'900 - 1000',
        mascotas:'no'
      },
      visitar:
        "Si tienen la oportunidad de ir al rio de acatlima a las 2 de la mañana es una experiecia inolvidable ",
      comer:
        " Normalmente en la universidad siempre voy a comer a bambú, pero si no tienes tiempo en la cafetería mi amigo isidro es muy amable",
    },
  ]);
  const [consejos, setConsejos] = useState([]);

  useEffect(() => {
    const cargarDatos = () => {
      setConsejos(informacion);
    };
    cargarDatos();
  }, []);

  const handleRenta = () => {
    const nuevosDatos = informacion.map((info) => {
      const { nombre, semestre, carrera, instagram, fecha, vivir,datosVivir } = info;
      const nuevo = {
        nombre,
        semestre,
        carrera,
        instagram,
        fecha,
        vivir,
        datosVivir
      };
      return nuevo
    });

    setConsejos(nuevosDatos);
  };

  const handleDiversion = () => {
    const nuevosDatos = informacion.map((info) => {
      const { nombre, semestre, carrera, instagram, fecha, visitar } = info;
      const nuevo = {
        nombre,
        semestre,
        carrera,
        instagram,
        fecha,
        visitar,
      };
      return nuevo
    });

    

    setConsejos(nuevosDatos);
  };

  const handleComida = () => {
    const nuevosDatos = informacion.map((info) => {
      const { nombre, semestre, carrera, instagram, fecha, comer } = info;
      const nuevo = {
        nombre,
        semestre,
        carrera,
        instagram,
        fecha,
        comer,
      };
      return nuevo
    });

    

    setConsejos(nuevosDatos);
  };
  const handleTodo = () => {
    
    setConsejos(informacion);
  };



  return (
    <div className=" container-fluid pt-5 mt-3  ">
      <div className="row">
        <div
          class="btn-group col-lg-4 offset-lg-4 butons p-4"
          role="group"
          aria-label="Basic example"
        >
          <button
            type="button"
            class="btn btn-outline-light"
            onClick={handleRenta}
          >
            Renta
          </button>
          <button type="button" class="btn btn-outline-light" onClick={handleComida}>
            Comida
          </button>
          <button type="button" class="btn btn-outline-light" onClick={handleDiversion}>
            Diversión
          </button>
          <button type="button" class="btn btn-outline-info" onClick={handleTodo}>
            Todo
          </button>
        </div>
      </div>
      <Fade>
      <div className=" row  justify-content-center">
        {consejos.map((datos) => (
          
          <Consejo datos={datos} />
          
        ))}
      </div>
      </Fade>
    </div>
  );
};

export default Consejos;
