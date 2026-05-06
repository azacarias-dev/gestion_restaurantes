import Mesa from './mesas.model.js';

// GET: Obtener todas las mesas (Listado general)
export const getAllMesas = async (req, res) => {
    try {
        const mesas = await Mesa.find({ status: true })
            .populate('sucursal', 'nombre direccion'); 

        if (mesas.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No hay mesas registradas en el sistema'
            });
        }

        res.status(200).json({
            success: true,
            total: mesas.length,
            mesas
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener el listado general de mesas',
            error: error.message
        });
    }
};

// GET: Obtener mesas por sucursal específica
export const getMesasBySucursal = async (req, res) => {
    try {
        const { idSucursal } = req.params;
        const mesas = await Mesa.find({ sucursal: idSucursal, status: true });

        res.status(200).json({
            success: true,
            total: mesas.length,
            mesas
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener mesas de la sucursal',
            error: error.message
        });
    }
};

// POST: Crear una nueva mesa
export const createMesa = async (req, res) => {
    try {
        const data = req.body;
        const mesa = new Mesa(data);
        await mesa.save();

        res.status(201).json({
            success: true,
            message: 'Mesa creada exitosamente',
            mesa
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al crear la mesa',
            error: error.message
        });
    }
};

// PUT: Actualizar datos de la mesa (capacidad, número, etc.)
export const updateMesa = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        
        const mesa = await Mesa.findByIdAndUpdate(id, data, { new: true });
        
        if (!mesa) {
            return res.status(404).json({
                success: false,
                message: 'Mesa no encontrada'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Mesa actualizada correctamente',
            mesa
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al actualizar la mesa',
            error: error.message
        });
    }
};

// PUT: Desactivar mesa (Eliminación lógica)
export const deactivateMesa = async (req, res) => {
    try {
        const { id } = req.params;
        const mesa = await Mesa.findByIdAndUpdate(id, { status: false }, { new: true });
        
        if (!mesa) {
            return res.status(404).json({
                success: false,
                message: 'Mesa no encontrada'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Mesa desactivada correctamente',
            mesa
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al desactivar mesa',
            error: error.message
        });
    }
};

// PUT: Activar mesa
export const activateMesa = async (req, res) => {
    try {
        const { id } = req.params;
        const mesa = await Mesa.findByIdAndUpdate(id, { status: true }, { new: true });
        
        if (!mesa) {
            return res.status(404).json({
                success: false,
                message: 'Mesa no encontrada'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Mesa activada exitosamente',
            mesa
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al activar mesa',
            error: error.message
        });
    }
};