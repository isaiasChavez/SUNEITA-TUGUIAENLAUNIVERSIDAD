import "./App.css";

import React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import tokenAuth from "./config/token";

import AuthState from "./State/autenticacion/authState";
import BazarState from "./State/bazar/bazarState";
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
import ProductosBazar from "./Components/principals/bazar/ProductosBazar";
import FormularioBazar from "./Components/principals/bazar/FormularioBazar";

import Publicacion from "./Components/principals/rentas/Publicacion";
import FormularioNuevaPublicacion from "./Components/principals/layout/NewPost/FormularioNuevaPublicacion";
import Profile from "./Components/principals/Profile/Profile";
import Contacto from "./Components/principals/rentas/Contacto";
import RutaPrivada from "./Components/routes/RutaPrivada";
import Footer from "./Components/principals/layout/Footer";
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
          <BazarState>
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
                    <Route exact path="/consejos" component={ProductosBazar} />
                    <RutaPrivada
                      exact
                      path="/publicarenbazar"
                      component={FormularioBazar}
                    />

                    <RutaPrivada exact path="/profile" component={Profile} />

                    <Route exact path="/registrarse" component={Registrarse} />
                    <Route exact path="/ingresar" component={Login} />

                    <Route
                      exact
                      path="/publicacion/:idpublicacion"
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
                    {/* <Route path="*">
                      <Redirect to="/" />
                    </Route> */}
                  </div>
                  <Footer />
                </Router>
              </Root>
            </RentasState>
          </BazarState>
        </AuthState>
      </AlertasState>
    </>
  );
}

export default App;
