import React, { useEffect } from 'react';

import Notificacion from './Notificacion';

import { useStateUser } from '../../Hooks/HK-user';

function Notificaciones(props){
    const [userData, dispatch] = useStateUser();
    var element = document.getElementsByClassName("ntf-wrapper");

    function closeNotification(){
        var copyData = userData.notifications.currentNtf.slice();
        copyData.splice(0,9);

        dispatch({
            type:"ntf",
            newNotifications:  {currentNtf: copyData}
        });

    }
    
    function ClearNTFGlobal(){ 
        if(element.length === 0){ 
            dispatch({
                type:"ntf",
                newNotifications:  {currentNtf: []}
            });
    
            return true;
        }
        return false;
    }

 
    return(
        <div className="allntf-wrapper">
            {
                props.ntf.map((i,k) => {
                return <Notificacion key={k} titulo={i.titulo} descripcion={i.descripcion} close={ClearNTFGlobal} index={k}/>
            })}
        </div>
    )

}

export default  Notificaciones;



