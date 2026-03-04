'use strict';

import mongoose, {mongo} from "mongoose";

const pedidoSchema = new mongoose.Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    sucursal: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sucursal',
        required: true
    },
    detalles: [{
        platillo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Platillo',
            required: true
        },
        cantidad: {
            type: Number,
            required: true,
            min: 1
        },
        subtotal: {
            type: Number,
            required: true,
            min: 0
        }
    }],
    total: {
        type: Number,
        required: true,
        min: 0
    },
    status: {
        type: String,
        enum: ['PENDIENTE', 'COMPLETADO', 'CANCELADO'],
        default: 'PENDIENTE'
    }
}, { timestamps: true });

export default mongoose.model('Pedido', pedidoSchema);
