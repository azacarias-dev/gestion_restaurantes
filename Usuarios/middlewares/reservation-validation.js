import { body, param } from 'express-validator';
import { checkValidators } from './check-validators.js';

// ================= CREATE =================
export const validateCreateReservation = [
    body('id_usuario')
        .notEmpty().withMessage('El id del usuario es obligatorio')
        .isMongoId().withMessage('Debe ser un ObjectId válido'),

    // NUEVO: Validar la sucursal
    body('sucursal')
        .notEmpty().withMessage('La sucursal es obligatoria')
        .isMongoId().withMessage('Debe ser un ObjectId de sucursal válido'),

    // NUEVO: Validar la mesa específica
    body('mesa')
        .notEmpty().withMessage('La mesa es obligatoria')
        .isMongoId().withMessage('Debe ser un ObjectId de mesa válido'),

    body('fecha')
        .notEmpty().withMessage('La fecha es obligatoria')
        .isISO8601().withMessage('La fecha debe ser válida (YYYY-MM-DD)')
        .toDate(),

    body('hora')
        .notEmpty().withMessage('La hora es obligatoria')
        .matches(/^([0-1]\d|2[0-3]):([0-5]\d)$/)
        .withMessage('Formato de hora inválido HH:mm'),

    body('numero_personas')
        .notEmpty().withMessage('Número de personas obligatorio')
        .isInt({ min: 1 })
        .withMessage('Debe ser un número mayor a 0'),

    // ELIMINADO: numero_mesas (Ya no se usa porque apuntamos a una mesa específica)

    body('estado')
        .optional()
        .isIn(['pendiente', 'confirmada', 'cancelada'])
        .withMessage('Estado inválido'),

    checkValidators,
];

// ================= UPDATE =================
export const validateUpdateReservation = [
    param('id')
        .isMongoId().withMessage('ID debe ser un ObjectId válido'),

    body('sucursal').optional().isMongoId().withMessage('ID de sucursal no válido'),
    body('mesa').optional().isMongoId().withMessage('ID de mesa no válido'),

    body('fecha')
        .optional()
        .isISO8601().withMessage('Fecha inválida')
        .toDate(),

    body('hora')
        .optional()
        .matches(/^([0-1]\d|2[0-3]):([0-5]\d)$/)
        .withMessage('Formato de hora inválido HH:mm'),

    body('numero_personas')
        .optional()
        .isInt({ min: 1 })
        .withMessage('Debe ser un número mayor a 0'),

    // ELIMINADO: numero_mesas

    body('estado')
        .optional()
        .isIn(['pendiente', 'confirmada', 'cancelada'])
        .withMessage('Estado inválido'),

    checkValidators,
];

// ================= GET BY ID =================
export const validateGetReservationById = [
    param('id')
        .isMongoId().withMessage('ID debe ser un ObjectId válido'),
    checkValidators,
];

// ================= CAMBIAR ESTADO =================
export const validateReservationStatusChange = [
    param('id')
        .isMongoId().withMessage('ID debe ser un ObjectId válido'),

    body('estado')
        .notEmpty().withMessage('El estado es obligatorio')
        .isIn(['pendiente', 'confirmada', 'cancelada'])
        .withMessage('Estado inválido'),

    checkValidators,
];