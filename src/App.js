import "./App.css";

import React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import tokenAuth from "./config/token";

import AuthState from "./State/autenticacion/authState";
import ConsejosState from "./State/consejos/consejosState";
import RentasState from "./State/rentas/rentasState";
import AlertasState from "./State/alertas/alertasState";
import "react-toastify/dist/ReactToastify.css";

import Root from "./Components/routes/Root";
import NotFound from "./Components/routes/NotFound";
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
import Contacto from "./Components/principals/rentas/Contacto";
import RutaPrivada from "./Components/routes/RutaPrivada";
function App() {
  const token = localStorage.getItem("token");

  if (token) {
    tokenAuth(token);
  }
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />{" "}
      <AlertasState>
        <AuthState>
          <ConsejosState>
            <RentasState>
              <Root>
                <Router>
                  <Navbar />
                  <Modal />

                  <Route exact path="/NotFound" component={NotFound} />
                  <Route exact path="/" component={Inicio} />
                  <Route exact path="/about" component={About} />
                  <div className="App">
                    <Route exact path="/rentas" component={Rentas} />
                    <Route exact path="/consejos" component={Consejos} />
                    <RutaPrivada exact path="/profile" component={Profile} />

                    <Route exact path="/registrarse" component={Registrarse} />
                    <Route exact path="/ingresar" component={Login} />

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
                    <RutaPrivada
                      path="/crearPublicacion"
                      type="private"
                      name="publicacion"
                      component={FormularioNuevaPublicacion}
                    />
                    <Route path="*">
                      <Redirect to="/" />
                    </Route>
                  </div>
                </Router>
              </Root>
            </RentasState>
          </ConsejosState>
        </AuthState>
      </AlertasState>
    </>
  );
}

export default App;
