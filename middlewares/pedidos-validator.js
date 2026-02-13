import { body } from 'express-validator';
import { checkValidators } from './check-validators.js';

export const createPedidoValidator = [
    body('usuario', 'ID de usuario no válido')
    .isMongoId(),

    body('detalles', 'Los detalles son obligatorios')
    .notEmpty(),

    checkValidators
];