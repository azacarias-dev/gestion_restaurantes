import { Router } from 'express';
import { createMesa, getMesasBySucursal, updateMesa, deactivateMesa, activateMesa, assignEmpleadoToMesa, getAllMesas } from './mesas.controller.js';

const router = Router();

router.get('/', getAllMesas);

router.post('/', createMesa);

router.put('/assign-waiter/:idMesa', assignEmpleadoToMesa);

router.get('/sucursal/:idSucursal', getMesasBySucursal); 

router.put('/:id', updateMesa);

router.put('/deactivate/:id', deactivateMesa);

router.put('/activate/:id', activateMesa);

export default router;