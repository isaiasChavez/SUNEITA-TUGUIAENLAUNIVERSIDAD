import React, { useContext } from "react";
import { Route,Redirect } from "react-router-dom";
import AuthContext from "../../State/authContext";

import Nothing from "./Nothing";
const GuardRoute = ({ type, name, ...rest }) => {
  const { authData } = useContext(AuthContext);
  const data = { ...rest, component: Nothing };
  if (type === "private") {
    
    return authData.isLogged ? <Route {...rest} /> : <Route {...data} />;
  } else if (type === "public") {
    if (authData.isLogged) {
      return (name == "login" || name == "registrarse") ? <Redirect exact to="/" /> : <Route {...data} />;
    } else {
      return <Route {...rest} />;
    }
  }
};

export default GuardRoute;
