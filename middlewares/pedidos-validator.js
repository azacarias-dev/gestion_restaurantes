import { body, param } from 'express-validator';
import { checkValidators } from './check-validators.js';

export const createPedidoValidator = [
    body('usuario')
        .notEmpty()
        .withMessage('El usuario es requerido')
        .isMongoId()
        .withMessage('Debe ser un ObjectId válido'),

    body('detalles')
        .trim()
        .notEmpty()
        .withMessage('Los detalles son requeridos')
        .isLength({ min: 5 })
        .withMessage('Los detalles deben tener al menos 5 caracteres'),

    checkValidators
];

export const getPedidoByIdValidator = [
    param('id')
        .isMongoId()
        .withMessage('ID debe ser un ObjectId válido'),

    checkValidators
];

export const cancelPedidoValidator = [
    param('id')
        .isMongoId()
        .withMessage('ID debe ser un ObjectId válido'),

    checkValidators
];
