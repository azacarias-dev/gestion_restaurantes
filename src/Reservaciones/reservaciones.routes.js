import { Router } from 'express';
import { createReservacion, updateReservacion } from './reservaciones.controller.js';

const router = Router();

router.post('/createReservacion', createReservacion);

router.put('/updateReservacion/:id', updateReservacion);

export default router;