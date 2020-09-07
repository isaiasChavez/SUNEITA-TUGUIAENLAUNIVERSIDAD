import React from 'react';
import {Redirect} from 'react-router-dom'
const Nothing = () => {

    return (
        <div className="container min-vh-100 d-flex flex-column align-items-center justify-content-center">

            <div>Nada por aquí,ingresa una ruta valida</div>
                <Redirect to='/'/>
        </div> 
     );
}
 
export default Nothing;