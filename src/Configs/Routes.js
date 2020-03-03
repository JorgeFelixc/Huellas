import React from "react";
import Inicio from "../Components/Pages/Inicio/Inicio";
import Login from "../Components/Pages/Login/Login";



const Routes =  {
    "/": () =>  <Login/>,
    "/inicio": () => <Inicio/>,
}

export default Routes;