import Mesa from './mesas.model.js';

export const getMesasBySucursal = async (req, res) => {
    try {
        const { idSucursal } = req.params;
        // Solo mostramos mesas activas y disponibles para el cliente
        const mesas = await Mesa.find({ 
            sucursal: idSucursal, 
            status: true, 
            isAvailable: true 
        });

        res.status(200).json({
            success: true,
            total: mesas.length,
            mesas
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener mesas para reservación',
            error: error.message
        });
    }
};