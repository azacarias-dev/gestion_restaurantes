import Usuario from './usuarios.model.js';

export const getMyProfile = async (req, res) => {
    try {
        const { id } = req.usuario; 
        const usuario = await Usuario.findOne({ _id: id, isActive: true });
        res.status(200).json({ success: true, usuario });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al obtener el perfil', error });
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
        const { id } = req.usuario; 
        const data = req.body;
        const usuario = await Usuario.findByIdAndUpdate(id, data, { new: true });
        res.status(200).json({ success: true, message: 'Cuenta actualizada', usuario });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al actualizar', error });
    }
};

export const deactivateAccount = async (req, res) => {
    try {
        const { id } = req.usuario;
        const usuario = await Usuario.findByIdAndUpdate(id, { isActive: false }, { new: true });
        res.status(200).json({ success: true, message: 'Cuenta desactivada', usuario });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al desactivar', error });
    }
};

export const activateAccount = async (req, res) => {
    try {
        const { id } = req.body; 
        const usuario = await Usuario.findByIdAndUpdate(id, { isActive: true }, { new: true });
        res.status(200).json({ success: true, message: 'Cuenta activada de nuevo', usuario });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al activar', error });
    }
};