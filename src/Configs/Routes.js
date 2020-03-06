import React from "react";
import Inicio from "../Components/Pages/Inicio/Inicio";
import Login from "../Components/Pages/Login/Login";
import Huella from "../Components/Pages/RegistroHuella/Huella";



const Routes =  {
    "/": () =>  <Login/>,
    "/alumnos": () => <Inicio/>,
    "/registrar_huellas": () => <Huella/>
}

export default Routes;