import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Inicio from "./Components/Inicio";
import Footer from "./Components/Footer";
import Rentas from "./Components/Rentas";
import DejaConsejo from "./Components/DejaConsejo";
import ConsejosState from "./State/consejosState";
function App() {
  return (
    <>
      <ConsejosState>
        <Router>
          <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
            <a class="navbar-brand" href="#">
              <Link to={"/"} className="nav-link  pb-3">
                <p className="display-5 text-dark">UTEMITA</p>
              </Link>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse offset-lg-7 border-bottom "
              id="navbarNav"
            >
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <Link to={"/"} className="nav-link pb-3">
                    Inicio
                  </Link>
                </li>
                <li class="nav-item ">
                  <Link to={"/rentas"} className="nav-link  pb-3">
                    Renta un cuarto
                  </Link>
                </li>

                <li class="nav-item ">
                  <a
                    class="nav-link  pb-3"
                    data-toggle="modal"
                    data-target="#staticBackdrop"
                    href="#"
                  >
                    Acerca de
                  </a>
                </li>

                <li class="nav-item">
                  <Link
                    to={"/dejar-consejo"}
                    className="btn btn-dark w-100 mb-2"
                  >
                    Deja un consejo
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Switch>
            <Route exact path="/" component={Inicio} />
            <div className="App container-fluid ">
              <Route exact path="/rentas" component={Rentas} />
              <Route exact path="/dejar-consejo" component={DejaConsejo} />
            </div>
          </Switch>
        </Router>
      </ConsejosState>
    </>
  );
}

export default App;
