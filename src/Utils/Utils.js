// import React, {useEffect} from 'react';
// import { useStateUser } from '../Components/Hooks/HK-user';

// function callNotificacion({titulo, mensaje}){
//     const [userData, disptach] = useStateUser();

//     useEffect(() => {
//         disptach({
//             type:"ntf",
//             newNotifications: { currentNtf: [
//                 ...userData.notifications.currentNtf,
//                 {titulo: titulo, descripcion:mensaje}
//             ]}
//         });
//     },[]);

//     return <p>ola</p>;
// }

// export default callNotificacion;