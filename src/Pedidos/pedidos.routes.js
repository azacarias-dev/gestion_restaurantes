import { Router } from 'express';
import { createPedido, cancelPedido } from './pedidos.controller.js';
import { createPedidoValidator } from '../../middlewares/pedidos-validator.js';

const router = Router();

router.post('/createPedido', createPedidoValidator, createPedido);

router.put('/cancelPedido/:id', cancelPedido);

export default router;