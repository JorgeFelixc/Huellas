import React from 'react';
import { } from 'react-dom';
import './App.css';


import { UserProvider } from './Components/Hooks/HK-user';
import Inicio from './Components/Pages/Inicio/Inicio';
import  Page from './Page';
import Nav from './Components/Tools/Nav/Nav';
import Sidebar from './Components/Tools/Sidebar/Sidebar';
import Footer from './Components/Tools/Footer/Footer';
import { GetCart, SaveCart} from './Utils/Cart';

function App() {
    const UserInitialState = {
        user: {
            name: 'no-user',
            theme: 'default',
            tipoUsuario: '0',
            email: '',
            idUsuario: null,
        },
        menu: {
            selectedMenu: <Inicio />
        },
        notifications: {
            currentNtf: [],
        },
        car:[]
        
    };

    const userReducer = (state, action) => {
        switch (action.type) {
            case 'LOGIN':
            if(action.action.token){
                sessionStorage.setItem("auth", action.action.token);
            }
            return {
                    ...state,
                    user:action.action
                };
            case 'menu':
                return {
                    ...state,
                    menu: action.newMenu
                };
            case 'ntf':
                return{
                    ...state,
                    notifications: action.newNotifications
               };
            case 'add-car': 
               SaveCart(state.user.idUsuario, action.car[action.car.length-1]);
               return {
                   ...state,
                   ...action
               }
            case 'get-car':
                let car = GetCart(state.user.idUsuario);
                // console.log("carge->", car, "use-", state.user.idUsuario);
                return  { 
                    ...state,
                    car: car,
                }
            default:
                return state;
        }
    };


    return (
        <UserProvider initialState={UserInitialState} reducer={userReducer} >
            <main>
                <Nav />
                <div className="content-wrapper">
                    <Page/>
                </div>
            </main>
        </UserProvider>
    );

}


export default App;
