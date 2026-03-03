import { Router } from 'express';
import {
    getPlatillos,
    getPlatilloById,
    createPlatillo,
    updatePlatillo,
    changePlatilloStatus,
} from './platillos.controller.js';
import {
    validateCreatePlatillo,
    validateUpdatePlatilloRequest,
    validatePlatilloStatusChange,
    validateGetPlatilloById,
} from '../../middlewares/platillos-validators.js';

const router = Router();

// Rutas GET
router.get('/', getPlatillos);
router.get('/:id', validateGetPlatilloById, getPlatilloById);

// Rutas POST
router.post(
    '/',
    validateCreatePlatillo,
    createPlatillo
);

// Rutas PUT - actualizar platillo
router.put(
    '/:id',
    validateUpdatePlatilloRequest,
    updatePlatillo
);

router.put('/:id/activar', validatePlatilloStatusChange, changePlatilloStatus);
router.put('/:id/desactivar', validatePlatilloStatusChange, changePlatilloStatus);

export default router;
