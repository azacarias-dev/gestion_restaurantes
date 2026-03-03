import { Router } from 'express';
import {
    getPlatillos,
    getPlatilloById,
} from './platillos.controller.js';
import {
    validateGetPlatilloById,
} from '../../middlewares/platillos-validators.js';

const router = Router();

// Rutas GET
router.get('/', getPlatillos);
router.get('/:id', validateGetPlatilloById, getPlatilloById);

export default router;
