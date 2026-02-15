'user strict';

import { Schema, model } from 'mongoose';

const empleadoSchema = Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    surname: {
        type: String,
        required: [true, 'El apellido es obligatorio']
    },
    dpi: {
        type: String,
        required: [true, 'El DPI es obligatorio'],
        unique: true
    },
    puesto: {
        type: String,
        enum: ['MESERO', 'CHEF', 'COMENSAL', 'SERVICIO DE LIMPIEZA'],
        default: 'MESERO'
    },
    sueldo: {
        type: Number,
        required: [true, 'El sueldo es obligatorio']
    },
    status: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Empleado', empleadoSchema);