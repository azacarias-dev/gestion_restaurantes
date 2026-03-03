import { body, param } from 'express-validator';
import { checkValidators } from './check-validators.js';

// Validaciones para crear platillos
export const validateCreatePlatillo = [
  body('nombre')
    .trim()
    .notEmpty()
    .withMessage('El nombre del platillo es requerido')
    .isLength({ min: 2, max: 100 })
    .withMessage('El nombre debe tener entre 2 y 100 caracteres'),

  body('descripcion')
    .trim()
    .notEmpty()
    .withMessage('La descripción es requerida')
    .isLength({ min: 5, max: 300 })
    .withMessage('La descripción debe tener entre 5 y 300 caracteres'),

  body('precio')
    .notEmpty()
    .withMessage('El precio es requerido')
    .isNumeric()
    .withMessage('El precio debe ser un número')
    .custom(value => value >= 0)
    .withMessage('El precio no puede ser negativo'),

  body('categoria')
    .trim()
    .notEmpty()
    .withMessage('La categoría es requerida')
    .isLength({ min: 3, max: 50 })
    .withMessage('La categoría debe tener entre 3 y 50 caracteres'),

  checkValidators,
];

// Validaciones para actualizar platillos
export const validateUpdatePlatilloRequest = [
  param('id')
    .isMongoId()
    .withMessage('ID debe ser un ObjectId válido de MongoDB'),

  body('nombre')
    .optional()
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('El nombre debe tener entre 2 y 100 caracteres'),

  body('descripcion')
    .optional()
    .trim()
    .isLength({ min: 5, max: 300 })
    .withMessage('La descripción debe tener entre 5 y 300 caracteres'),

  body('precio')
    .optional()
    .isNumeric()
    .withMessage('El precio debe ser un número')
    .custom(value => value >= 0)
    .withMessage('El precio no puede ser negativo'),

  body('categoria')
    .optional()
    .trim()
    .isLength({ min: 3, max: 50 })
    .withMessage('La categoría debe tener entre 3 y 50 caracteres'),

  checkValidators,
];

// Validación para activar/desactivar platillos
export const validatePlatilloStatusChange = [
  param('id')
    .isMongoId()
    .withMessage('ID debe ser un ObjectId válido de MongoDB'),
  checkValidators,
];

// Validación para obtener platillo por ID
export const validateGetPlatilloById = [
  param('id')
    .isMongoId()
    .withMessage('ID debe ser un ObjectId válido de MongoDB'),
  checkValidators,
];
