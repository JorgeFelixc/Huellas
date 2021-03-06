import React, { useState, useEffect } from "react";

import "./Nav.css";

function Nav(props) {

  return (
    <nav>
      <p className="nav-title">
      <i class="material-icons">
        fingerprint
      </i>
           Administrador 
      </p>
      <ul className="menu-wrapper">
        <ListaMenu page="/alumnos" icon="face" description="Alumnos" />
        <ListaMenu page="/tutores" icon="record_voice_over" description="Tutores" />
        <ListaMenu page="/registrar_huellas" icon="fingerprint" description="Huellas Ejemplo" />
      </ul>
    </nav>
  );
}


const ListaMenu = ({icon, description, page}) => {


  return(
    <li onClick={() => window.location.href = page}>
      <i class="material-icons">{icon}</i>
      <span>
        { description }
      </span>
    </li>
  )
}
export default Nav;


