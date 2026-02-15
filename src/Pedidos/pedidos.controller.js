import Pedido from './pedidos.model.js';

// Crear pedido
export const createPedido = async (req, res) => {
    try {
        const pedido = new Pedido(req.body);
        await pedido.save();
        res.status(201).json({ success: true, message: 'Pedido creado', pedido });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al crear pedido', error });
    }
};

// Cancelar pedido
export const cancelPedido = async (req, res) => {
    try {
        const { id } = req.params;
        const pedido = await Pedido.findByIdAndUpdate(
            id,
            { status: 'CANCELADO' },
            { new: true }
        );
        res.status(200).json({ success: true, message: 'Pedido cancelado', pedido });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al cancelar', error });
    }
};

// Obtener pedidos pendientes
export const getPedidosPendientes = async (req, res) => {
    try {
        const pedidos = await Pedido.find({ status: 'PENDIENTE' })
            .populate('usuario', 'name surname email');

        res.status(200).json({
            success: true,
            total: pedidos.length,
            pedidos
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener pedidos pendientes',
            error: error.message
        });
    }
};

// Obtener pedido por ID
export const getPedidoById = async (req, res) => {
    try {
        const { id } = req.params;

        const pedido = await Pedido.findById(id)
            .populate('usuario', 'name surname email');

        if (!pedido) {
            return res.status(404).json({
                success: false,
                message: 'Pedido no encontrado'
            });
        }

        res.status(200).json({
            success: true,
            pedido
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener pedido',
            error: error.message
        });
    }
};
