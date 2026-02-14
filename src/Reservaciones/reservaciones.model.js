'use strict'

import mongoose from 'mongoose';

const reservacionesSchema = new mongoose.Schema({

    id_usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },

    fecha: {
        type: Date,
        required: true
    },

    hora: {
        type: String,
        required: true
    },

    numero_personas: {
        type: Number,
        required: true
    },

    estado: {
        type: String,
        enum: ['pendiente', 'confirmada', 'cancelada'],
        default: 'pendiente'
    }

}, { timestamps: true });

export default mongoose.model('Reservaciones', reservacionesSchema);
