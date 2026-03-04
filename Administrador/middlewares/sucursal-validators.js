import { body, param } from 'express-validator';
import { checkValidators } from './check-validators.js';

// Validaciones para crear sucursal
export const validateCreateSucursal = [
  body('nombre')
    .trim()
    .notEmpty()
    .withMessage('El nombre de la sucursal es requerido')
    .isLength({ min: 2, max: 100 })
    .withMessage('El nombre debe tener entre 2 y 100 caracteres'),

  body('direccion')
    .trim()
    .notEmpty()
    .withMessage('La dirección es requerida')
    .isLength({ min: 5, max: 200 })
    .withMessage('La dirección debe tener entre 5 y 200 caracteres'),

  body('telefono')
    .trim()
    .notEmpty()
    .withMessage('El teléfono es requerido')
    .isLength({ min: 8, max: 20 })
    .withMessage('El teléfono debe tener entre 8 y 20 caracteres'),

  body('horario.apertura')
    .notEmpty()
    .withMessage('La hora de apertura es requerida')
    .matches(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .withMessage('La hora de apertura debe tener formato HH:MM'),

  body('horario.cierre')
    .notEmpty()
    .withMessage('La hora de cierre es requerida')
    .matches(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .withMessage('La hora de cierre debe tener formato HH:MM'),

  checkValidators
];

// Validaciones para actualizar sucursal
export const validateUpdateSucursalRequest = [
  param('id')
    .isMongoId()
    .withMessage('ID debe ser un ObjectId válido de MongoDB'),

  body('nombre')
    .optional()
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('El nombre debe tener entre 2 y 100 caracteres'),

  body('direccion')
    .optional()
    .trim()
    .isLength({ min: 5, max: 200 })
    .withMessage('La dirección debe tener entre 5 y 200 caracteres'),

  body('telefono')
    .optional()
    .trim()
    .isLength({ min: 8, max: 20 })
    .withMessage('El teléfono debe tener entre 8 y 20 caracteres'),

  body('horario.apertura')
    .optional()
    .matches(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .withMessage('La hora de apertura debe tener formato HH:MM'),

  body('horario.cierre')
    .optional()
    .matches(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .withMessage('La hora de cierre debe tener formato HH:MM'),

  checkValidators
];

// Validación para activar/desactivar sucursal
export const validateSucursalStatusChange = [
  param('id')
    .isMongoId()
    .withMessage('ID debe ser un ObjectId válido de MongoDB'),

  checkValidators
];

// Validación para obtener sucursal por ID
export const validateGetSucursalById = [
  param('id')
    .isMongoId()
    .withMessage('ID debe ser un ObjectId válido de MongoDB'),

  checkValidators
];