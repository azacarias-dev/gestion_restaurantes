'user strict';

import { Schema, model } from 'mongoose';

const reservacionSchema = Schema({
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    personas: {
        type: Number,
        required: true
    }
}, { timestamps: true });

export default model('Reservacion', reservacionSchema);