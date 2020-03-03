import React, {useState, useEffect, useRef } from "react";

import "./List.css";
import { GetData, PostData, DeleteData } from "../../../Utils/PostAuth";
import { useStateUser } from "../../Hooks/HK-user";

function List({ save, del, get }) {
    const [listdata, setListdata] = useState();
    const SubText = useRef(null);
    const [ userData, disptach] = useStateUser();

    async function GetDataServer(){ 
        if(!get){ 
            console.error("No existe  el endpoint Get.");
            return;
        }

        const dataService = await GetData(get);
        console.log("algo", dataService);
        if(dataService){ 
            setListdata(dataService);
        }
    }

    async function SaveDataServer(){ 
        if(!save){ 
            console.error("No existe  el endpoint Save.");
            return;
        }
        const currentText =  SubText.current.value;
        const saveService = await PostData({nombre: currentText }, save);
        console.log("guardar",saveService);
        if(saveService){ 
            // GetDataServer();
            if(saveService["error"]){ 
                disptach({
                    type:"ntf",
                    newNotifications: { currentNtf: [
                        ...userData.notifications.currentNtf,
                        {titulo: "Error", descripcion:"Hubo un problema al guardarse"}
                    ]}
                });
                return;
            }

            setListdata(old => [...listdata, {nombre:currentText}]);
            SubText.current.value = "";
        }
    }

    async function DeleteDataServer(id){ 
        console.log("id-<", id, "- el end->",del);
        const deleteService = await DeleteData({id:id}, del);
        if(deleteService){ 
            if(deleteService["error"]){
                disptach({
                    type:"ntf",
                    newNotifications: { currentNtf: [
                        ...userData.notifications.currentNtf,
                        {titulo: "Error", descripcion:deleteService["error"]}
                    ]}
                });
                return;
            }
            GetDataServer();

        }
    }

    useEffect(() => { 
        GetDataServer();
    }, [])

  return (
    <div className="subcategorias-wrapper">
      <div>
        <p className="sub-titles">Subcategorias</p>
        <input ref={SubText} type="text" className="textbox-list" />
        <button onClick={SaveDataServer} className="btn-add list-btn">Añadir</button>
      </div>
      <div className="subcat-list">
        <label> Lista de subcategorias </label>
        { 
            listdata &&
            listdata.map((item) =>{ 
                return <p> {item["nombre"] } 
                <span onClick={() => DeleteDataServer(item["id"])}>x</span> </p>
            })
        }
      </div>
    </div>
  );
}

export default List;

{/* <p>
Algo bien aki
<span>x</span>    
</p>
<p>
Algo bien aki
<span>x</span>    
</p>
<p>
Algo bien aki
<span>x</span>    
</p>
<p>
Algo bien aki
<span>x</span>    
</p> */}