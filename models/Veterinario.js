import { Schema, model } from 'mongoose'

const veterinarioSchema = new Schema({
    correo: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    apellido: {
        type: String,
        required: true,
        trim: true
    },
    codigo: {
        type: String,
        required: true,
        trim: true
    }
},
    {
        timestamps: true
    });

export default model('Veterinario', veterinarioSchema);