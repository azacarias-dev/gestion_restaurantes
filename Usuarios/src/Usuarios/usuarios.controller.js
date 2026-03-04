import Usuario from './usuarios.model.js';

export const getMyProfile = async (req, res) => {
    try {
        const { id } = req.body; 
        
        if (!id) {
            return res.status(400).json({ success: false, message: 'ID de usuario requerido' });
        }

        const usuario = await Usuario.findOne({ _id: id, isActive: true });
        
        if (!usuario) {
            return res.status(404).json({ success: false, message: 'Usuario no encontrado o está inactivo' });
        }

        res.status(200).json({ success: true, usuario });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al obtener el perfil', error: error.message });
    }
};

export const createAccount = async (req, res) => {
    try {
        const data = req.body;
        const usuario = new Usuario(data);
        await usuario.save();
        res.status(201).json({ success: true, message: 'Cuenta creada', data: usuario });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al crear cuenta', error });
    }
};

export const updateAccount = async (req, res) => {
    try {
        const { id, ...data } = req.body; 

        if (!id) {
            return res.status(400).json({ 
                success: false, 
                message: 'Se requiere el ID en el cuerpo de la solicitud para actualizar' 
            });
        }

        const usuario = await Usuario.findByIdAndUpdate(id, data, { new: true });

        if (!usuario) {
            return res.status(404).json({ 
                success: false, 
                message: 'Usuario no encontrado' 
            });
        }

        res.status(200).json({ 
            success: true, 
            message: 'Cuenta actualizada exitosamente', 
            usuario 
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: 'Error al actualizar', 
            error: error.message 
        });
    }
};

export const deactivateAccount = async (req, res) => {
    try {
        const { id } = req.body;

        if (!id) {
            return res.status(400).json({ 
                success: false, 
                message: 'Se requiere el ID para desactivar la cuenta' 
            });
        }

        const usuario = await Usuario.findByIdAndUpdate(
            id, 
            { isActive: false }, 
            { new: true }
        );

        if (!usuario) {
            return res.status(404).json({ 
                success: false, 
                message: 'Usuario no encontrado' 
            });
        }

        res.status(200).json({ 
            success: true, 
            message: 'Cuenta desactivada correctamente', 
            usuario 
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: 'Error al desactivar', 
            error: error.message 
        });
    }
};

export const activateAccount = async (req, res) => {
    try {
        const { id } = req.body; 
        
        if (!id) {
            return res.status(400).json({ success: false, message: 'ID requerido para activar' });
        }

        const usuario = await Usuario.findByIdAndUpdate(id, { isActive: true }, { new: true });
        
        if (!usuario) return res.status(404).json({ success: false, message: 'Usuario no encontrado' });

        res.status(200).json({ success: true, message: 'Cuenta activada de nuevo', usuario });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al activar', error: error.message });
    }
};