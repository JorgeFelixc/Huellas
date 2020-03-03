import React, { useEffect } from 'react';
import { useRoutes } from 'hookrouter';
import { useStateUser } from './Components/Hooks/HK-user';
import Routes from './Configs/Routes';
import NotFound from './Components/Pages/NotFound/NotFound';
import Notificaciones from './Components/Tools/Notificaciones/Notificaciones';

function Page(props){ 
    const [ userData, disptach ] = useStateUser();
    const routeResult = useRoutes(Routes);

    // useEffect(() => { 
        // console.log(routeResult.type.name);
        // window.location.href
    // });

    return (
        <div className="page-wrapper">
            <div className="page-header">
                <p>
                    {routeResult && 
                        routeResult.type.name
                    }                
                </p>
                <div className="user-wrapper">
                    <i class="material-icons">
                    keyboard_arrow_down
                    </i>
                    Acosta Luna Kevin
                    <img src={require('./img/user-icon.jpg')} />
                </div>

            </div>

            { routeResult || <NotFound/> }
            {
                userData.notifications.currentNtf.length > 0 &&
                <Notificaciones ntf={userData.notifications.currentNtf}/>
                
            }
        </div>
    );
}
export default Page;