import React from 'react';
import Modal from '../Modal/Modal';

import './DeleteModal.css';
import { DeleteData } from '../../../Utils/PostAuth';

function DeleteModal({endpoint, titulo, descripcion, close, item, campo }){
    
    async function DeleteDataService(){
        console.log("algo?", item);
        const deleteService = await DeleteData({...item, ...campo}, endpoint);
        console.log(deleteService);
        if(deleteService){
            const { error } = deleteService;
            if(!error){
                close();
            }
        }
    }
    
    return (
        <div>
            <Modal buttons 
                titulo={titulo}
                close={close} done={DeleteDataService} >
                { descripcion }
            </Modal>
        </div>
    )
}

export default DeleteModal;