import { Router } from 'express';
import {
    createPedido,
    cancelPedido,
    getPedidosPendientes,
    getPedidoById
} from './pedidos.controller.js';

import {
    createPedidoValidator,
    getPedidoByIdValidator,
    cancelPedidoValidator
} from '../../middlewares/pedidos-validator.js';

const router = Router();

// POST
router.post('/createPedido', createPedidoValidator, createPedido);

// GET
router.get('/pendientes', getPedidosPendientes);
router.get('/:id', getPedidoByIdValidator, getPedidoById);

// PUT
router.put('/cancelPedido/:id', cancelPedidoValidator, cancelPedido);

export default router;
