import Venta from './ventas.model.js';
import Pedido from '../Pedidos/pedidos.model.js';

export const crearVenta = async (req, res) => {
    try {
        const { pedidoId, metodoPago } = req.body;

        const pedido = await Pedido.findById(pedidoId);

        if (!pedido) {
            return res.status(500).json({ success: false, message: 'Pedido no encontrado' });
        }
        
        if (pedido.status === 'COMPLETADO') {
            return res.status(500).json({ 
                success: false,
                message: 'El pedido ya está completado' });
        }

        if (pedido.status === 'CANCELADO') {
            return res.status(500).json({ 
                success: false,
                message: 'No se puede crear una venta para un pedido cancelado' });
        }
        
        const totalVenta = pedido.total;

        const nuevaVenta = new Venta({
            pedido: pedidoId,
            total: totalVenta,
            metodoPago
        });

        await nuevaVenta.save();
        pedido.status = 'COMPLETADO';
        await pedido.save();

        res.status(200).json({ 
            success: true,
            message: 'Venta creada exitosamente',
            data: nuevaVenta 
            });
    } catch (error) {
        res.status(500).json({ 
            success: false,
            message: 'Error al crear la venta',
            error: error.message
        });
    }
};



