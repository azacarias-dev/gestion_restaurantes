import { body, param } from 'express-validator';
import { checkValidators } from './check-validators.js';

// Validación para obtener sucursal por ID
export const validateGetSucursalById = [
  param('id')
    .isMongoId()
    .withMessage('ID debe ser un ObjectId válido de MongoDB'),

  checkValidators
];