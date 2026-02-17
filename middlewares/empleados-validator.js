import { body } from 'express-validator';
import { checkValidators } from './check-validators.js';

export const saveEmpleadoValidator = [
    body('name', 'El nombre es obligatorio')
    .notEmpty(),

    body('surname', 'El apellido es obligatorio')
    .notEmpty(),

    body('dpi', 'El pdi debe ser valido')
    .isLength({ min: 13, max: 13 }),

    body('sueldo', 'El sueldo debe ser un numero')
    .isNumeric(),

    checkValidators
];  

export const getEmpleadoByIdValidator = [
    body('id', 'No es un id valido')
        .isMongoId(),

    checkValidators
];