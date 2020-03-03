//Archivo de configuración para llamar las cosas
//Al servidor.
// let HOST;
// if(!process.env.NODE_ENV || process.env.NODE_ENV === 'development'){
//     HOST = "http://localhost:3500"
// }
// else{ 
//     HOST = ""
// }
export const HOST = "http://localhost:3500";
// export default HOST;

export const AUTH = `${HOST}/auth`;


export const LOGIN = `${HOST}/users/auth`;
export const REGISTER = `${HOST}/users/save`;

export const CATEGORIAS =  `${HOST}/categorias`;
export const GET_CATEGORIAS = `${HOST}/categorias`;

export const GET_SUBCATEGORIAS = `${HOST}/categorias/subcategorias`;
export const SAVE_SUBCATEGORIAS = `${HOST}/categorias/subcategorias`;


export const PRODUCTOS = `${HOST}/productos`;
export const EDIT_PRODUCTOS = `${HOST}/productos/edit`;
export const DELETE_IMAGE_PRODUCTO = `${HOST}/productos/deleteImage`;
export const GET_PRODUCTO_BYID = `${HOST}/productos/getById`
export const GET_PRODUCTO_RANDOM = `${HOST}/productos/getRandom`


export const DIRECCIONES = `${HOST}/direcciones`;
// https://api-sepomex.hckdrk.mx/query/info_cp/09810
export const GET_INFOBYCP = `https://api-sepomex.hckdrk.mx/query/info_cp/`;

export const GET_ESTADOS = `https://api-sepomex.hckdrk.mx/query/get_estados`;

export const GET_MUNICIPIOS = `https://api-sepomex.hckdrk.mx/query/get_municipio_por_estado/Aguascalientes`;

