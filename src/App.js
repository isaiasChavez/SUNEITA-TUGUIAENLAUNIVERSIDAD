import "./App.css";

import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ConsejosState from "./State/consejosState";
import RentasState from "./State/rentasState";

import Inicio from "./Components/Inicio";
import Rentas from "./Components/Rentas";
import Modal from "./Components/Modal";
import Login from "./Components/principals/auth/Login";
import Navbar from "./Components/Navbar";
import DejaConsejo from "./Components/DejaConsejo";
import Consejos from "./Components/Consejos";
import Publicacion from "./Components/principals/layout/Publicacion";
import Form from "./Components/principals/NewPost/Form6";
import Profile from './Components/principals/Profile/Profile'
import GuardRoute from './Components/routes/guardRoute'
function App() {
  const [login, setlogin] = useState(false);

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
          <Router>
            <Navbar />
            <Modal />

            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Inicio} />
            <div className="App">
              <Route exact path="/rentas" component={Rentas} />
              <Route exact path="/consejos" component={Consejos} />

              {login ? (
                <Route exact path="/dejarconsejo" component={DejaConsejo} />
              ) : (
                <Route exact path="/dejarconsejo" component={Login} />
              )}

              <Route
                path="/publicacion/:idpublicacion"
                component={Publicacion}
              />
              <Route path="/form" component={Form} />
              
              <Route
                path="/profile"
                component={Profile}
              />
            </div>
          </Router>
        </RentasState>
      </ConsejosState>
    </>
  );
}

export default App;
