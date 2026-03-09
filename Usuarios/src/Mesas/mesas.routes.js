import { Router } from 'express';
import { getMesasBySucursal } from './mesas.controller.js';

const router = Router();

router.get('/sucursal/:idSucursal', getMesasBySucursal);

export default router; 