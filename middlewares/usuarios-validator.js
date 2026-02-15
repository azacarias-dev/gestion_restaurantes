import { body } from 'express-validator';
import { checkValidators } from './check-validators.js';

export const createAccountValidator = [
    body('name', 'El nombre es obligatorio')
    .notEmpty(),

    body('surname', 'El apellido es obligatorio')
    .notEmpty(),

    body('email', 'El correo no es válido')
    .isEmail(),

    body('address', 'La direccion es obligatoria')
    .notEmpty(),

    body('phone', 'El teléfono debe tener 8 dígitos')
    .isLength({ min: 8, max: 8 }),

    checkValidators
];

export const createPedidoValidator = [
    body('usuario', 'El ID de usuario no es válido')
    .isMongoId(),

    body('detalles', 'Los detalles del pedido son obligatorios')
    .notEmpty(),

    checkValidators
];