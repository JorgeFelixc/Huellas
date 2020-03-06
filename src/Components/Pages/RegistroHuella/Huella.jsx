import React, { useEffect } from 'react';


function Huella(props){ 

    useEffect(() => {
        InitHuellas();
    }, []);

    function loadDevice() { 
        //local,products emit('connectserver', { type: String('products') }); emit('register', { user: '12345678', finger: '1' });

     }
    function InitHuellas(){
        let iubi = new WebSocket('ws://127.0.0.1:2015');
        // iubi.send('connectserver', { })
        iubi.onerror = (err) => { 
            console.log("Error!!!", err);
        }
        iubi.onopen = (ev) => { 
            // console.log("open:", ev);
            let schema = {
                type: "checkin",

            }
            iubi.send(JSON.stringify(schema));
            
        }

        iubi.onmessage = (ev) => { 
            const huellaImg = document.getElementById("huella");
            let data;
            eval(ev.data);
            console.log("Los datos:", data);
            switch (data.type) {
                case "checkin":
                    huellaImg.src = `data:image/png;base64,${data.payload[0].data}`
                    break;
            
                default:
                    break;
            }
        }
        // console.log("el socket:", iubi);        
    }

    return(
        <header>
            <img id="huella" />
        </header>
    )
}
export default Huella;