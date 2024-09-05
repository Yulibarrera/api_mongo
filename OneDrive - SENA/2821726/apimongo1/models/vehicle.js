import { model, Schema } from 'mongoose';

const vehicleSchema =  new Schema({
    plate: {
        type:String, //tipo dato
        unique: true, //unico
        required :[true, 'The plate is required'], // requerido
        maxlength:[6, 'Max 6 characters'], //tamaño maximo
        minlength:[5, 'Min 5 characters'] // tamaño 5 characterts
    },
    color: {
        type:String, //tipo dato
        required :[true, 'The color is required'], // requerido
        minlength:[3, 'Min 3 characters'] // tamaño 5 characterts
    },
    model: {
        type: Number, //tipo dato
        required :[true, 'The model is required'], // requerido

    }
})

export default model("Vehicle", vehicleSchema, "vehicle") // crear la coleccion  si no existe y 