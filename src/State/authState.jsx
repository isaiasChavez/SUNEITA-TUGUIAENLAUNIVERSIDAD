import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import authContext from "./authContext";
import { au, db } from "../Firebase";

const AuthState = (props) => {
  const configNotification = {
    position: "top-right",
    autoClose: 3500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  };

  const [isLogged, setisLogged] = useState(false);
  const [dataUser, setDataUser] = useState({
    nombre: "Javier",
    apellido: "Chavez",
    username: "juarez",
  });

  au.onAuthStateChanged((user) => {
    user ? setisLogged(true) : setisLogged(false);
    // if (user) {
    //   au.currentUser
    // }
  });

  const crearUsuarioEIngresar = async (correo, contrasena, datos) => {
    try {
      await au.createUserWithEmailAndPassword(correo, contrasena);
      var user = au.currentUser;

      //Actualizando datos del nuevo registro
      let usera = au.currentUser;

      usera
        .updateProfile({
          displayName: datos.usuario,
        })
        .then(function () {
          toast("Usuario actualizado", configNotification);
        });

      //Ingresar
      await au.signInWithEmailAndPassword(correo, contrasena);

      var datoss = au.currentUser;
      var name, email, photoUrl, uid, emailVerified;
      
      if (datoss != null) {
        name = datoss.displayName;
        email = datoss.email;
        photoUrl = datoss.photoURL;
        emailVerified = datoss.emailVerified;
        uid = datoss.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                         // this value to authenticate with your backend server, if
             // you have one. Use User.getToken() instead.
      }
      console.log(name,email)
      



      toast("Usuario creado correctamente", configNotification);
    } catch (error) {
      toast.error(`Ha ocurrido un error! ${error.message}`, configNotification);
    }

    db.collection("usuarios").doc().set(datos);
  };

  const cerrarSesion = () => {
    if (au.currentUser) {
      au.signOut();
      toast("Listo, sesión cerrada!", configNotification);
    } else {
      toast.error("No puedes hacer eso!", configNotification);
    }
  };

  const ingresarConCorreo = async (correo, contrasena) => {
    try {
      const credentials = await au.signInWithEmailAndPassword(
        correo,
        contrasena
      );
      toast("Listo, sesión iniciada!", configNotification);
    } catch (error) {
      toast.error(error.message, configNotification);
    }
  };

  const authData = {
    isLogged,
    dataUser,
    crearUsuarioEIngresar,
    ingresarConCorreo,
    cerrarSesion,
  };

  return (
    <authContext.Provider value={{ authData }}>
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
