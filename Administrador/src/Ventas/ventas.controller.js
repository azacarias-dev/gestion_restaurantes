import Venta from './ventas.model.js';
import Pedido from '../Pedidos/pedidos.model.js';

export const getVentas = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const options = {
            page: parseInt(page),
            limit: parseInt(limit),
            sort: { createdAt: -1 },
        };
        const ventas = await Venta.find().limit(limit*1).skip((page - 1) * limit).sort(options.sort);
        const total = await Venta.countDocuments();

        res.status(200).json({
            success: true,
            message: 'Ventas obtenidas exitosamente',
            data: ventas,
            pagination: {
                currentPage: page,
                totalPages: Math.ceil(total / limit),               
                totalItems: total,
                limit,
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener ventas',
            error: error.message
        });
    }
};

export const getVentaById = async (req, res) => {
    try {
        const { id } = req.params;
        const venta = await Venta.findById(id);

        if (!venta) {
            return res.status(404).json({
                success: false,
                message: 'Venta no encontrada'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Venta obtenida exitosamente',
            data: venta
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener la venta',
            error: error.message
        });
    }
}