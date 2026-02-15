import { body, param } from "express-validator";
import { checkValidators } from "./check-validators.js";

export const createVentaValidator = [
    body('pedidoId')
        .notEmpty()
        .withMessage('El ID del pedido es requerido')
        .isMongoId()
        .withMessage('Debe ser un ObjectId válido'),
    body('metodoPago')
        .notEmpty()
        .withMessage('El método de pago es requerido')
        .isIn(['EFECTIVO', 'TARJETA', 'TRANSFERENCIA'])
        .withMessage('El método de pago debe ser EFECTIVO, TARJETA o TRANSFERENCIA'),
    checkValidators
];

export const getVentaByIdValidator = [
    param('id')
        .isMongoId()
        .withMessage('ID debe ser un ObjectId válido'),
    checkValidators
];
