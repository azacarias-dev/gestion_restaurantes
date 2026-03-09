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
    empleado: {
        type: Schema.Types.ObjectId,
        ref: 'Empleado',
        required: false
    },
    isAvailable: { 
        type: Boolean,
        default: true
    },
    status: { 
        type: Boolean,
        default: true
    }
}, { versionKey: false, timestamps: true });

export default model('Mesa', mesaSchema);