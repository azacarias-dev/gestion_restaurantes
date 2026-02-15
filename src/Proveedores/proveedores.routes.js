import { Router } from 'express';
import {
    getProveedores,
    getProveedorById,
    createProveedor,
    updateProveedor,
    changeProveedorStatus,
} from './proveedores.controller.js';
import {
    validateCreateProveedor,
    validateUpdateProveedorRequest,
    validateProveedorStatusChange,
    validateGetProveedorById,
} from '../../middlewares/proveedores-validators.js';

const router = Router();

// Rutas GET
router.get('/', getProveedores);
router.get('/:id', validateGetProveedorById, getProveedorById);

// Rutas POST
router.post(
    '/',
    validateCreateProveedor,
    createProveedor
);

// Rutas PUT - actualizar proveedor
router.put(
    '/:id',
    validateUpdateProveedorRequest,
    updateProveedor
);

router.put('/:id/activar', validateProveedorStatusChange, changeProveedorStatus);
router.put('/:id/desactivar', validateProveedorStatusChange, changeProveedorStatus);

export default router;
