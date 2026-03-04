import { Router } from 'express';
import { validateGetSucursalById } from '../../middlewares/sucursal-validators.js';
import { getSucursalById } from './sucursal.controller.js';

const router = Router();

// Solo ruta GET por ID
router.get('/:id', validateGetSucursalById, getSucursalById);

export default router;