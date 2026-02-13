'use streict';

import mongoose from "mongoose";

const proveedoresSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        required: true,
        maxlength: [100, 'El nombre no puede tener mas 100 caracteres'],
        trim: true,
    },
    apellido: {
        type: String,
        required: [true, 'El apellido es obligatorio'],
        required: true,
        maxlength: [100, 'El apellido no puede tener mas 100 caracteres'],
        trim: true,
    },
    dpi: {
        type: String,
        required: [true, 'El DPI es obligatorio'],
        required: true,
        unique: true,
        trim: true,
        minlength: [13, 'El DPI debe tener 13 dígitos'],
        maxlength: [13, 'El DPI debe tener 13 dígitos'],
    },
    telefono: {
        type: String,
        required: [true, 'El teléfono es obligatorio'],
        required: true,
        trim: true,
        minlength: [8, 'El teléfono debe tener al menos 8 caracteres'],
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        required: true,
        unique: true,
        trim: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
})

proveedoresSchema.index({ dpi: 1 }, { unique: true });
proveedoresSchema.index({ correo: 1 }, { unique: true });
proveedoresSchema.index({ isActive: 1, nombre: 1, apellido: 1 });

export default mongoose.model('Proveedores', proveedoresSchema);
