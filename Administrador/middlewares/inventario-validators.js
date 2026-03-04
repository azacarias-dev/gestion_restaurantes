import { body, param } from 'express-validator';
import { checkValidators } from './check-validators.js';

// Validaciones para crear inventario
export const validateCreateInventario = [
  body('nombre')
    .trim()
    .notEmpty()
    .withMessage('El nombre es requerido')
    .isLength({ min: 2, max: 100 })
    .withMessage('El nombre debe tener entre 2 y 100 caracteres'),

  body('cantidad')
    .notEmpty()
    .withMessage('La cantidad es requerida')
    .isNumeric()
    .withMessage('La cantidad debe ser un número'),

  body('stockMinimo')
    .notEmpty()
    .withMessage('El stock mínimo es requerido')
    .isNumeric()
    .withMessage('El stock mínimo debe ser un número'),

  body('estado')
    .optional()
    .isIn(['disponible', 'agotado', 'vencido'])
    .withMessage('Estado inválido'),

  checkValidators,
];

// Validaciones para actualizar inventario
export const validateUpdateInventarioRequest = [
  param('id')
    .isMongoId()
    .withMessage('ID debe ser un ObjectId válido de MongoDB'),

  body('nombre')
    .optional()
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('El nombre debe tener entre 2 y 100 caracteres'),

  body('cantidad')
    .optional()
    .isNumeric()
    .withMessage('La cantidad debe ser un número'),

  body('stockMinimo')
    .optional()
    .isNumeric()
    .withMessage('El stock mínimo debe ser un número'),

  body('estado')
    .optional()
    .isIn(['disponible', 'agotado', 'vencido'])
    .withMessage('Estado inválido'),

  checkValidators,
];

// Validación para activar/desactivar inventario
export const validateInventarioStatusChange = [
  param('id')
    .isMongoId()
    .withMessage('ID debe ser un ObjectId válido de MongoDB'),
  checkValidators,
];

// Validación para obtener inventario por ID
export const validateGetInventarioById = [
  param('id')
    .isMongoId()
    .withMessage('ID debe ser un ObjectId válido de MongoDB'),
  checkValidators,
];