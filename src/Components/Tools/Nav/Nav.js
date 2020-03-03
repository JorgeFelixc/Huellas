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
        <ListaMenu icon="face" description="Alumnos" />
        <ListaMenu icon="record_voice_over" description="Tutores" />
      </ul>
    </nav>
  );
}


const ListaMenu = ({icon, description}) => {
  return(
    <li>
      <i class="material-icons">{icon}</i>
      <span>
        { description }
      </span>
    </li>
  )
}
export default Nav;


