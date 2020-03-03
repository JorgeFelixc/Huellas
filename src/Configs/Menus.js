// CONFIGURACION DEL NAVEGADOR/MENU. 
//Este script guarda los menus y para que usuarios es accesible los menus:
// nombre: es el identificador para el codigo.
// componente: es lo que renderizara el menu.
// descripcion: es lo que se mostrara en el menu
// tipoUsuario: son los accesos de tipo usuario. 
// --> 0: cualquier usuario
// --> 20: escuelas
// --> 30: administracion.

import React from 'react';


import Inicio from '../Components/Pages/Inicio/Inicio';
// import Galeria from '../Components/Pages/Galeria';
// import AcercaDe from '../Components/Pages/AcercaDe';
// import Autor from '../Components/Pages/Autor';

var Menus = [
    { nombre: 'Login', component: { '/': <Inicio/> }  ,descripcion: 'Catalogo', tipoUsuario: ['0']},
    { nombre: 'Galeria', component: <Inicio/> ,descripcion: 'Galeria', tipoUsuario: ['10','20','30']},
    { nombre: 'Autor', component: <Inicio/> ,descripcion: 'Autores', tipoUsuario: ['30'] },
    { nombre: 'AcercaDe', component: <Inicio/> ,descripcion: 'Nosotros', tipoUsuario: ['20','0','30'] },

];
export default Menus;
