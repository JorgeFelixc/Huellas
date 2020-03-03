import React, { useRef, useState, useEffect } from 'react';

import './Sidebar.css';
import { useStateUser } from '../../Hooks/HK-user';
function Sidebar(props){ 
    const [userData, disptach] = useStateUser();
    const [close, setClose] = useState(false);
    const [text, setText] = useState("categorias")
    const Sidebar = useRef(null),
        wrapper = useRef(null);
    
    useEffect(() => {
        CloseSidebar();
    }, [ ]);
    function CloseSidebar(){ 
        if(!close){
            Sidebar.current.style.width = "0%";
            Sidebar.current.style.opacity = "0";
            setTimeout(() =>{ 
                Sidebar.current.style.display = "none";
            },400);
            wrapper.current.style.width = "5vh";

            // wrapper.current.innerHTML = ">"
            setText("→");

            setClose(true);
        }else{ 
            setTimeout(() => { 
                Sidebar.current.style.display = "block";
                setTimeout(() => { 
                    Sidebar.current.style.width = "250px";
                    Sidebar.current.style.opacity = "1";
                },50);
            },100)
            wrapper.current.style.width = "250px";
            // wrapper.current.innerHTML = "Menu"
            setText("Categoria");

            setClose(false);

        }
    }
    function MapThree(object,key){
        let subThree = undefined;
        if(object.hasOwnProperty("subcategoria")){
            const it = object.subcategoria.map((item) => {
                return MapThree(item)
            })
            subThree = <ul>
                { it.map((i) => i)}
            </ul>
        }
        return( 
            <li key={key} className="sub-close"  >
                 <span  onClick={(el) => ToggleThree(el)}> { object["nombre"]} </span>
                { subThree }
            </li>
        )
    }

    function ToggleThree(element){
        const liPadre = element.target.parentElement;

        if(liPadre.classList.contains("sub-close")){ 
            liPadre.classList.remove("sub-close");
            // setText("Categoria");
        }else{
            liPadre.classList.add("sub-close");
            // setText(">");

        }
    }
    return(
        <div  ref={wrapper} className={`sidebar-wrapper ${close ? 'side-close' : ' '}`}>
        <span onClick={CloseSidebar} className="sidebar-close">{ text }</span>
            <ul ref={Sidebar} className="side-list">
                { ls.map((item,key) => {
                    return MapThree(item,key);
                }) }

            </ul>

        </div>
    )
}



const ls = [ 
    {nombre: "Primero"},
    {nombre: "Segundo", subcategoria: [
        {nombre:"Segundo-1"},
        {nombre:"Segundo-2"},
        {nombre:"Segundo-3", subcategoria: [ 
            {nombre: "Segundo-3A"},
        ]},

    ]},
    {nombre: "tercero"}
]
export default Sidebar;