'use strict';

import mongoose, { mongo } from "mongoose";

const ventaSchema = new mongoose.Schema({
    pedido: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pedido',
        required: true
    },
    total: {
        type: Number,
        required: true,
        min: 0
    },
    metodoPago: {
        type: String,
        enum: ['EFECTIVO', 'TARJETA', 'TRANSFERENCIA'],
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

export default mongoose.model('Venta', ventaSchema);