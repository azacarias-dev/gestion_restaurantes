'user strict';

import { Schema, model } from 'mongoose';

const usuarioSchema = Schema({
    name: {
        type: String,
        required: [true, 'El nombre es requerido']
    },
    surname: {
        type: String,
        required: [true, 'El apellido es requerido']
    },
    email: {
        type: String,
        required: [true, 'El correo es requerido'],
        unique: true
    },
    address: {
        type: String,
        required: [true, 'La dirección es requerida']
    },
    phone: {
        type: String,
        required: [true, 'El teléfono es requerido'],
        minLength: 8,
        maxLength: 8
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Usuario', usuarioSchema);