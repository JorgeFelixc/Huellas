import React from "react";

import "./ProductCard.css";
import { HOST } from "../../../Utils/Endpoints";
import { useStateUser } from "../../Hooks/HK-user";

function ProductCard(props) {
    const {nombre, descripcion, precio, fotos, recomendaciones, index, id} = props;
    const [userData, dispatch] = useStateUser();

    function AñadirCarro(){
        dispatch({
            type:'add-car',
            car: [...userData.car,  {...props}]
        })
        console.log(userData.car);

    }


    
  return (
    <div className="product-wrapper" key={index}>
      <div className="product-image">
        <img src={`${HOST}${fotos[0]}`} />
      </div>
      <div className="product-info">
        <p>{nombre}</p>
        <div className="product-des">
            <p>
                Recomendaciones
            <br />
                <p>
                    {recomendaciones}
                </p>
            </p>
            <p>
                Descripcion
                <br/>
                <p>
                    {descripcion}
                </p>
            </p>
        </div>
        <div className="product-down">
            <span className="product-price">{precio}.00$</span>
            <div className="rows space-around">
                <button onClick={AñadirCarro} className="btn-car">
                    Añadir al Carrito  
                    <img src={require("../../../img/icons/shop.svg")} alt="" />
                    </button>
                <button onClick={() => window.location.href = `/producto/${id}`} className="btn-ver">Ver mas</button>

            </div>

        </div>
      </div>
    </div>
  );
}

export default ProductCard;
