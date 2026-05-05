import { Router } from 'express';
import {
    createPedido,
    cancelPedido,
    getPedidosPendientes,
    getPedidoById,
    getPedidosBySucursal,
    completadoPedido,
    getPedidosByStatus,
} from './pedidos.controller.js';

import {
    createPedidoValidator,
    getPedidoByIdValidator,
    cancelPedidoValidator,
    completadoPedidoValidator,
    getPedidosByStatusValidator,
} from '../../middlewares/pedidos-validator.js';

const router = Router();

// POST
router.post('/createPedido', createPedidoValidator, createPedido);

// GET
router.get('/', getPedidosPendientes);
router.get('/:id', getPedidoByIdValidator, getPedidoById);

// PUT
router.put('/cancelPedido/:id', cancelPedidoValidator, cancelPedido);
router.put('/completPedido/:id', completadoPedidoValidator, completadoPedido);

// GET
router.get('/status/:status', getPedidosByStatusValidator, getPedidosByStatus);
router.get('/sucursal/:sucursalId', getPedidosBySucursal);

export default router;
