'user strict';

import { Schema, model } from 'mongoose';

const pedidoSchema = Schema({
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    detalles: {
        type: String, 
        required: true
    },
    status: {
        type: String,
        enum: ['PENDIENTE', 'COMPLETADO', 'CANCELADO'],
        default: 'PENDIENTE'
    }
}, { timestamps: true });

export default model('Pedido', pedidoSchema);