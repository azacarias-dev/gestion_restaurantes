'use strict';

import mongoose from "mongoose";

const inventarioSchema = new mongoose.Schema({

    sucursal: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sucursales',
        required: true
    },

    nombre: {
        type: String,
        required: true,
        trim: true
    },

    cantidad: {
        type: Number,
        required: true,
        min: 0
    },

    stockMinimo: {
        type: Number,
        required: true,
        min: 0
    },

    estado: {
        type: String,
        enum: ['disponible', 'agotado', 'vencido'],
        default: 'disponible'
    }

}, {
    timestamps: true
});

export default mongoose.model('Inventario', inventarioSchema);