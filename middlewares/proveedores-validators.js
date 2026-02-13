import { body, param } from 'express-validator';
import { checkValidators } from './check-validators.js';

// Validaciones para crear proveedores
export const validateCreateProveedor = [
  body('nombre')
    .trim()
    .notEmpty()
    .withMessage('El nombre es requerido')
    .isLength({ min: 2, max: 100 })
    .withMessage('El nombre debe tener entre 2 y 100 caracteres'),

  body('apellido')
    .trim()
    .notEmpty()
    .withMessage('El apellido es requerido')
    .isLength({ min: 2, max: 100 })
    .withMessage('El apellido debe tener entre 2 y 100 caracteres'),

  body('dpi')
    .trim()
    .notEmpty()
    .withMessage('El DPI es requerido')
    .isLength({ min: 13, max: 13 })
    .withMessage('El DPI debe tener exactamente 13 dígitos')
    .isNumeric()
    .withMessage('El DPI debe contener solo números'),

  body('telefono')
    .trim()
    .notEmpty()
    .withMessage('El teléfono es requerido')
    .isLength({ min: 8, max: 15 })
    .withMessage('El teléfono debe tener entre 8 y 15 caracteres'),

  body('correo')
    .trim()
    .notEmpty()
    .withMessage('El correo es requerido')
    .isEmail()
    .withMessage('Correo inválido'),

  checkValidators,
];

// Validaciones para actualizar proveedores
export const validateUpdateProveedorRequest = [
  param('id')
    .isMongoId()
    .withMessage('ID debe ser un ObjectId válido de MongoDB'),

  body('nombre')
    .optional()
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('El nombre debe tener entre 2 y 100 caracteres'),

  body('apellido')
    .optional()
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('El apellido debe tener entre 2 y 100 caracteres'),

  body('dpi')
    .optional()
    .trim()
    .isLength({ min: 13, max: 13 })
    .withMessage('El DPI debe tener exactamente 13 dígitos')
    .isNumeric()
    .withMessage('El DPI debe contener solo números'),

  body('telefono')
    .optional()
    .trim()
    .isLength({ min: 8, max: 15 })
    .withMessage('El teléfono debe tener entre 8 y 15 caracteres'),

  body('correo')
    .optional()
    .trim()
    .isEmail()
    .withMessage('Correo inválido'),

  checkValidators,
];

// Validación para activar/desactivar proveedores
export const validateProveedorStatusChange = [
  param('id')
    .isMongoId()
    .withMessage('ID debe ser un ObjectId válido de MongoDB'),
  checkValidators,
];

// Validación para obtener proveedor por ID
export const validateGetProveedorById = [
  param('id')
    .isMongoId()
    .withMessage('ID debe ser un ObjectId válido de MongoDB'),
  checkValidators,
];
