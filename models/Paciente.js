import { Schema, model } from "mongoose";

const pacienteSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    propietario: {
        type: String,
        required: true,
        trim: true
    },
    telefono: {
        type: String,
        required: true,
        trim: true
    },
    sintomas: {
        type: String,
        required: true,
        trim: true
    },
    veterinario: {
        type: Schema.Types.ObjectId,
        ref: 'Veterinario'
    }
});

export default model('Paciente', pacienteSchema);