import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";
import Form5 from "./Form5";
import Form6 from "./Form6";
import Form7 from "./Form7";

const FormularioNuevaPublicacion = () => {
  let match = useRouteMatch();

  return (
    <Router>
      <Switch>
        <Route exact path={`${match.url}/`} component={Form1} />
        <Route exact path={`${match.url}/cp-1`} component={Form2} />
        <Route exact path={`${match.url}/cp-1/cp-2`} component={Form3} />
        <Route exact path={`${match.url}/cp-1/cp-2/cp-3`} component={Form4} />
        <Route exact path={`${match.url}/cp-1/cp-2/cp-3/cp-4`} component={Form5} />
        <Route exact path={`${match.url}/cp-1/cp-2/cp-3/cp-4/cp-5`} component={Form6} />
        <Route exact path={`${match.url}/cp-1/cp-2/cp-3/cp-4/cp-5/cp-f`} component={Form7} />

        
      </Switch>
    </Router>
  );
};

export default FormularioNuevaPublicacion;
