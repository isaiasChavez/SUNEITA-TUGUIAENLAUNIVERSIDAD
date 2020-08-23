import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import "./App.css";
import Inicio from "./Components/Inicio";
import Rentas from "./Components/Rentas";
import ConsejosState from "./State/consejosState";
import Modal from "./Components/Modal";
import Login from "./Components/principals/auth/Login";
import Navbar from "./Components/Navbar";
import DejaConsejo from "./Components/DejaConsejo";
import Consejos from "./Components/Consejos";

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
        <Router>
          <Navbar />
          <Modal />

          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Inicio} />
          <div className="App">
            <Route exact path="/rentas" component={Rentas} />
            <Route exact path="/consejos" component={Consejos} />
            <Route exact path="/dejarconsejo" component={DejaConsejo} />
          </div>
        </Router>
      </ConsejosState>
    </>
  );
}

export default App;
