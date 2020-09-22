import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AuthState from "./State/autenticacion/authState";
import ConsejosState from "./State/consejos/consejosState";
import RentasState from "./State/rentas/rentasState";

import Root from "./Components/routes/Root";
import Inicio from "./Components/principals/principal/Inicio";
import Rentas from "./Components/principals/rentas/Rentas";
import Modal from "./Components/principals/layout/Modal";
import Registrarse from "./Components/principals/auth/Registrarse";
import Login from "./Components/principals/auth/Login";
import About from "./Components/principals/about/About";
import Navbar from "./Components/principals/layout/Navbar";
import Consejos from "./Components/principals/consejos/Consejos";
import Publicacion from "./Components/principals/rentas/Publicacion";
import FormularioNuevaPublicacion from "./Components/principals/layout/NewPost/FormularioNuevaPublicacion";
import Profile from "./Components/principals/Profile/Profile";
import Contacto from "./Components/principals/Profile/Contacto";
import Nothing from "./Components/routes/Nothing";
function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />{" "}
      <ConsejosState>
        <RentasState>
          <AuthState>
            <Root>
              <Router>
                <Navbar />
                <Modal />

                <Route exact path="/" component={Inicio} />
                <Route exact path="/about" component={About} />
                <div className="App">
                  <Route exact path="/rentas" component={Rentas} />
                  <Route exact path="/consejos" component={Consejos} />
                  <Route exact path="/profile" component={Profile} />

                  <Route exact path="/registrarse" component={Registrarse} />
                  <Route exact path="/ingresar" component={Login} />
                  <Route exact path="#" component={Nothing} />
                  <Route
                    exact
                    path="/publicacion/:idpublicacion"
                    name="publicacion"
                    component={Publicacion}
                  />
                  <Route
                    type="public"
                    path="/publicacion/:idpublicacion/contacto/:username"
                    component={Contacto}
                  />
                  <Route
                    path="/crearPublicacion"
                    type="private"
                    name="publicacion"
                    component={FormularioNuevaPublicacion}
                  />
                </div>
              </Router>
            </Root>
          </AuthState>
        </RentasState>
      </ConsejosState>
    </>
  );
}

export default App;
