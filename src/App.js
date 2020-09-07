import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AuthState from "./State/authState";
import ConsejosState from "./State/consejosState";
import RentasState from "./State/rentasState";

import Root from "./Components/routes/Root";
import Inicio from "./Components/Inicio";
import Rentas from "./Components/Rentas";
import Modal from "./Components/Modal";
import Registrarse from "./Components/principals/auth/Registrarse";
import Login from "./Components/principals/auth/Login";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Consejos from "./Components/Consejos";
import Publicacion from "./Components/principals/layout/Publicacion";
import FormularioNuevaPublicacion from "./Components/principals/NewPost/FormularioNuevaPublicacion";
import Profile from "./Components/principals/Profile/Profile";
import Contacto from './Components/principals/Profile/Contacto'
import GuardRoute from "./Components/routes/GuardRoute";
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

                <Route exact name="inicio" path="/" component={Inicio} />
                <Route exact name="about" path="/about" component={About} />
                <div className="App">
                  <Route exact path="/rentas" component={Rentas} />
                  <Route exact path="/consejos" component={Consejos} />

                  <GuardRoute
                    type="private"
                    exact
                    path="/profile"
                    component={Profile}
                  />

                  <GuardRoute
                    type="public"
                    name="registrarse"
                    exact
                    path="/registrarse"
                    component={Registrarse}
                  />
                  <GuardRoute
                    type="public"
                    name="ingresar"
                    exact
                    path="/ingresar"
                    component={Login}
                  />
                <Route
                    exact path="#"
                    component={Nothing}
                  />
                  <Route
                    exact path="/publicacion/:idpublicacion"
                    name="publicacion"
                    component={Publicacion}
                  />
                  <GuardRoute
                    type='public'
                    path="/publicacion/:idpublicacion/contacto/:username"
                    component={Contacto}
                  />
                  <GuardRoute
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
