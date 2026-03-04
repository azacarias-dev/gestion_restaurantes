import { Router } from 'express';
import {
    getInventarios,
    getInventarioById,
    createInventario,
    updateInventario,
    changeInventarioStatus,
} from './inventario.controller.js';
import {
    validateCreateInventario,
    validateUpdateInventarioRequest,
    validateInventarioStatusChange,
    validateGetInventarioById,
} from '../../middlewares/inventario-validators.js';

const router = Router();

// Rutas GET
router.get('/', getInventarios);
router.get('/:id', validateGetInventarioById, getInventarioById);

// Rutas POST
router.post(
    '/',
    validateCreateInventario,
    createInventario
);

// Rutas PUT - actualizar inventario
router.put(
    '/:id',
    validateUpdateInventarioRequest,
    updateInventario
);

router.put('/:id/activar', validateInventarioStatusChange, changeInventarioStatus);
router.put('/:id/desactivar', validateInventarioStatusChange, changeInventarioStatus);

export default router;