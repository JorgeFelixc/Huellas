import React, { } from 'react';

import './Inicio.css';
import { useStateUser } from '../../Hooks/HK-user';
import Table from '../../Tools/Table/Table';

function Inicio(props){
    const [userData, disptach] = useStateUser();

    function NOT(){
        disptach({
            type:"ntf",
            newNotifications: { currentNtf: [
                ...userData.notifications.currentNtf,
                {titulo: "Exito", descripcion:"Se agrego una opcion lorem itspu si alskdj alks dalks dlaks dlsa "}
            ]}
        });
    }
    return(
        <header>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis cum, libero, tempora cumque dolor rerum vel modi et sunt nulla ea voluptates molestiae labore ducimus inventore! Sequi unde quo eaque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, laudantium. Tempore vel, iure doloremque expedita saepe, maxime nisi voluptatum totam, accusantium magnam aliquam quis nihil quos? Ratione rem delectus optio!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, odit nulla eius necessitatibus laudantium asperiores nesciunt quis mollitia fugit soluta adipisci et natus eos! Nulla ea odit similique dicta iure.
            </p>
            <Table data={Datos} actions={[
                {actionName: "Editar", method: () => {alert("ola")}},
                {actionName: "Eliminar", method: () => {}},
            ]}/>
        </header>
    )
}

export default Inicio;

const Datos = [
    {
        nombre: "Algun nombre",
        apellido: "algun apellido",
        edad: 19,
        grado: "2do",
    },
    {
        nombre: "Algun nombre",
        apellido: "algun apellido",
        edad: 19,
        grado: "2do",
    },
    {
        nombre: "Algun nombre",
        apellido: "algun apellido",
        edad: 19,
        grado: "2do",
    },
    {
        nombre: "Algun nombre",
        apellido: "algun apellido",
        edad: 19,
        grado: "2do",
    },
    {
        nombre: "Algun nombre",
        apellido: "algun apellido",
        edad: 19,
        grado: "2do",
    },
    {
        nombre: "Algun nombre",
        apellido: "algun apellido",
        edad: 19,
        grado: "2do",
    },
    {
        nombre: "Algun nombre",
        apellido: "algun apellido",
        edad: 19,
        grado: "2do",
    },
    {
        nombre: "Algun nombre",
        apellido: "algun apellido",
        edad: 19,
        grado: "2do",
    },
    {
        nombre: "Algun nombre",
        apellido: "algun apellido",
        edad: 19,
        grado: "2do",
    },
    {
        nombre: "Algun nombre",
        apellido: "algun apellido",
        edad: 19,
        grado: "2do",
    },
    {
        nombre: "Algun nombre",
        apellido: "algun apellido",
        edad: 19,
        grado: "2do",
    },
    {
        nombre: "Algun nombre",
        apellido: "algun apellido",
        edad: 19,
        grado: "2do",
    },
]