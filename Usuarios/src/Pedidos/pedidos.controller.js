import Pedido from './pedidos.model.js';
import Platillo from '../Platillos/platillos.model.js';

// Crear pedido
export const createPedido = async (req, res) => {
    try {
        // AGREGAMOS 'sucursal' AQUÍ:
        const { usuario, sucursal, detalles } = req.body; 
        
        let totalAcumulado = 0;
        const detallesConPrecio = [];

        for (const item of detalles) {
            const platilloDB = await Platillo.findById(item.platillo);

            if (!platilloDB || !platilloDB.isActive) {
                return res.status(404).json({
                    success: false,
                    message: `Platillo con ID ${item.platillo} no encontrado o inactivo`
                });
            }

            const subtotal = item.cantidad * platilloDB.precio;
            totalAcumulado += subtotal;

            detallesConPrecio.push({
                platillo: item.platillo,
                cantidad: item.cantidad,
                subtotal: subtotal
            });
        }

        const nuevoPedido = new Pedido({
            usuario,
            sucursal, 
            detalles: detallesConPrecio,
            total: totalAcumulado,
            status: 'PENDIENTE'
        });

        await nuevoPedido.save();

        res.status(201).json({
            success: true,
            message: 'Pedido creado exitosamente',
            pedido: nuevoPedido
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al crear pedido',
            error: error.message
        });
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
