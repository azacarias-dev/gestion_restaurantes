import Pedido from './pedidos.model.js';

export const createPedido = async (req, res) => {
    try {
        const pedido = new Pedido(req.body);
        await pedido.save();
        res.status(201).json({ success: true, message: 'Pedido creado', pedido });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al crear pedido', error });
    }
};

export const cancelPedido = async (req, res) => {
    try {
        const { id } = req.params;
        const pedido = await Pedido.findByIdAndUpdate(id, { status: 'CANCELADO' }, { new: true });
        res.status(200).json({ success: true, message: 'Pedido cancelado', pedido });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al cancelar', error });
    }
};