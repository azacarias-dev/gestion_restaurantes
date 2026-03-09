import { Router } from 'express';
import { validateGetSucursalById } from '../../middlewares/sucursal-validators.js';
import { getSucursalById, getSucursales } from './sucursal.controller.js';

const router = Router();

// Ruta GET para obtener todas las sucursales
router.get('/', getSucursales);

// Solo ruta GET por ID
router.get('/:id', validateGetSucursalById, getSucursalById);



export default router;