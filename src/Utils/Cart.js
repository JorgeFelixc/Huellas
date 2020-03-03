

export function SaveCart(userId, data){
    if(userId){
        let uid = GenerateUniqueId(userId,data);
        localStorage.setItem(uid, JSON.stringify({datos: data, userid: userId}));
    }
    else{ 
        let uid = GenerateUniqueId("none",data);
        localStorage.setItem(uid, JSON.stringify({datos: data, userid: null}));
    }
}

export function GetCart(userId){ 
    let CarItems = [];
    for(var i=0;i<localStorage.length;i++){
        let itemName = localStorage.key(i);
        let item = localStorage.getItem(itemName);
        if(IsJson(item)){

            item = JSON.parse(item);
            if(item.hasOwnProperty("userid")){
                
                if(item.userid === userId){
                    if(item.hasOwnProperty("datos")){ 
                        CarItems.push(item.datos);
                    }
                }

            }
        }

    }
    return CarItems;

}

export function DeleteCartItem(userId, itemId){
    for(var i=0;i<localStorage.length;i++){
        let item = localStorage.getItem(localStorage.key(i));
        if(IsJson(item)){
            item = JSON.parse(item);
            if(item.hasOwnProperty("userid")){

                if(item.userid == userId){ 
                    if(item.hasOwnProperty("datos")){
                        if(item.datos.id === itemId){
                            localStorage.removeItem(localStorage.key(i));
                            break;
                        }
                    }
                }

            }

        }
    }
}   

function  IsJson(str){
    try{
        JSON.parse(str);
        return true;
    }
    catch(ex){
        return false;
    }
}

function GenerateUniqueId(userId, item){ 
    let counter = 0;
    let str = `${userId}-${item.id}-${item.nombre}-${counter}`;
    while(localStorage.getItem(str) !== null){
        counter++;
        str = `${userId}-${item.id}-${item.nombre}-${counter}`;
    }
    return str;
}