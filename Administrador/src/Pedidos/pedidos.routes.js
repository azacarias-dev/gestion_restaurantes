import { Router } from 'express';
import {
    createPedido,
    cancelPedido,
    getPedidosPendientes,
    getPedidoById,
    getPedidosBySucursal
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
router.get('/', getPedidosPendientes);
router.get('/:id', getPedidoByIdValidator, getPedidoById);

// PUT
router.put('/cancelPedido/:id', cancelPedidoValidator, cancelPedido);

router.get('/sucursal/:sucursalId', getPedidosBySucursal);

export default router;
