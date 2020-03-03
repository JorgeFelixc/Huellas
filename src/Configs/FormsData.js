import { GET_SUBCATEGORIAS, CATEGORIAS, GET_ESTADOS } from "../Utils/Endpoints"

export const LoginForm = [ 
    {
        nombre: "email",
        placeholder: "Email",
        required: true,
        type: "text"
    },
    {
        nombre: "password",
        placeholder: "Password",
        required: true,
        type: "password"
    }
]


export const RegisterForm = [
    {
        nombre: "nombre",
        placeholder: "Your name",
        required: true,
        type: "text"
    },
    {
        nombre: "apellido_paterno",
        placeholder: "Apellido paterno",
        required: true,
        type: "text"
    },
    {
        nombre: "apellido_materno",
        placeholder: "Apellido materno",
        required: true,
        type: "text"
    },
    {
        nombre: "telefono",
        placeholder: "Telefono",
        required: true,
        type: "text"
    },
    {
        nombre: "email",
        placeholder: "Correo Electronico",
        required: true,
        type: "text"
    },
    {
        nombre: "password",
        placeholder: "Password",
        required: true,
        type: "password"
    }
]


export const CategoriaForm = [ 
    { 

        nombre: "nombre",
        placeholder: "Nombre",
        required: true,
        type: "Text"
    },
    {
        nombre: "subcategorias",
        placeholder: "text",
        required: true,
        type: "checklist",
        data: GET_SUBCATEGORIAS, // donde el componente obtendra el dato
        key: "id", // el nombre que se quedra guardar
        value: "nombre" // la descripcion
    },
]


export const InventarioForm = [ 
    {
        nombre: "nombre",
        placeholder: "Nombre",
        required: true,
        type: "Text"
    },
    {
        nombre: "caracteristicas",
        placeholder: "Caracteristicas",
        required: true,
        type: "Text"
    },
    {
        nombre: "recomendaciones",
        placeholder: "Recomendaciones",
        required: true,
        type: "Text"
    },
    {
        nombre: "descripcion",
        placeholder: "Descripcion",
        required: true,
        type: "Text"
    },
    {
        nombre: "precio",
        placeholder: "Precio",
        required: true,
        type: "number"
    },
    {
        nombre: "categoria",
        placeholder: "text",
        required: true,
        type: "checklist",
        data: CATEGORIAS, // donde el componente obtendra el dato
        key: "id", // el nombre que se quedra guardar
        value: "nombre" // la descripcion
    },
    {
        nombre: "puntos",
        placeholder: "Puntos",
        required: true,
        type: "number"
    },
    { 
        nombre: "fotos",
        placeholder: "Selecciona tus fotos",
        required: true,
        type: "imguploader"

    }
]

// necesito hacer que los inputs se cargen al seleccionar
// el valor de uno.
// necesito un valor parametro: 
// este va tener que apuntar al valor que se seleccione.

export const DireccionesForm = [
    {
        nombre: "nombre",
        placeholder: "Nombre",
        required: true,
        type: "Text"
    },
    {
        nombre: "telefono",
        placeholder: "Numero telefonico",
        required: true,
        type: "number"
    },
    {
        nombre: "cp",
        placeholder: "Codigo postal",
        required: true,
        type: "number"
    },
    {
        nombre: "asentamiento",
        placeholder: "Asentamiento",
        required: true,
        type: "Text"
    },
    {
        nombre: "tipo_asentamiento",
        placeholder: "Tipo de asentamiento",
        required: true,
        type: "Text"
    },
    {
        nombre: "municipio",
        placeholder: "Municipio",
        required: true,
        type: "select",
        data: GET_ESTADOS,
        parametros: {
            formPiece: "estado",
            URI: `${GET_ESTADOS}/`
         }

    },
    {
        nombre: "estado",
        placeholder: "Estado",
        required: true,
        type: "select",
        data: GET_ESTADOS
    },
    {
        nombre: "ciudad",
        placeholder: "Ciudad",
        required: true,
        type: "Text"
    },
    {
        nombre: "pais",
        placeholder: "Pais",
        required: true,
        type: "Text"
    },


]