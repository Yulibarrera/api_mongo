import { model, Schema } from 'mongoose';

const ownerSchema = new Schema ({
    id: {
        type: String,
        unique: true,
        required :[true, 'The id is required'], // requerido
        maxlength:[10, 'Max 6 characters'], //tamaño maximo
        minlength:[6, 'Min 5 characters'] // tamaño 5 characterts
    },
    name: {
        type:String, //tipo dato
        required :[true, 'The name is required'], // requerido
        minlength:[3, 'Min 3 characters'], // tamaño 3 characterts
        maxlength:[15, 'max 15 characters']
    },
    email: {
        type: String, //tipo dato
        required :[true, 'The email is required'], // requerido
    }
});

export default model("Owner", ownerSchema, "owner") // crear la coleccion  si no existe y 