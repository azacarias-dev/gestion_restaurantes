import { Schema, model } from 'mongoose';

const mesaSchema = Schema({
    numero: { 
        type: Number, 
        required: [true, 'El número de mesa es obligatorio'],
        unique: true 
    },
    capacidad: { 
        type: Number, 
        required: [true, 'La capacidad es obligatoria'],
        min: [1, 'La capacidad mínima es de 1 persona']
    },
    sucursal: { 
        type: Schema.Types.ObjectId, 
        ref: 'Sucursales', 
        required: [true, 'La sucursal es obligatoria']
    },
    isAvailable: { // Disponibilidad para reservar (tiempo real)
        type: Boolean,
        default: true
    },
    status: { // Estado administrativo (activo/inactivo)
        type: Boolean,
        default: true
    }
}, { versionKey: false, timestamps: true });

export default model('Mesa', mesaSchema);