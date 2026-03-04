import { Router } from 'express';
import {
    getSucursales,
    getSucursalById,
    createSucursal,
    updateSucursal,
    changeSucursalStatus,
} from './sucursal.controller.js';
import {
    validateCreateSucursal,
    validateUpdateSucursalRequest,
    validateSucursalStatusChange,
    validateGetSucursalById,
} from '../../middlewares/sucursal-validators.js';

const router = Router();

// Rutas GET
router.get('/', getSucursales);
router.get('/:id', validateGetSucursalById, getSucursalById);

// Rutas POST
router.post(
    '/',
    validateCreateSucursal,
    createSucursal
);

// Rutas PUT - actualizar sucursal
router.put(
    '/:id',
    validateUpdateSucursalRequest,
    updateSucursal
);

router.put('/:id/activar', validateSucursalStatusChange, changeSucursalStatus);
router.put('/:id/desactivar', validateSucursalStatusChange, changeSucursalStatus);

export default router;