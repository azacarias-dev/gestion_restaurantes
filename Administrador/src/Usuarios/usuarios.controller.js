import Usuario from './usuarios.model.js';

export const getUsers = async (req, res) => {
    try {
        const usuarios = await Usuario.find(); //({ isActive: true })

        if (usuarios.length === 0) {
            return res.status(404).json({ success: false, message: 'No se encontraron usuarios' });
        }

        res.status(200).json({ success: true, total: usuarios.length, usuarios });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al obtener usuarios', error });
    }
};

export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await Usuario.findOne({ _id: id, isActive: true });

        if (!usuario) {
            return res.status(404).json({ success: false, message: 'Usuario no encontrado' });
        }

        res.status(200).json({ success: true, usuario });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al obtener el usuario', error });
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
        const { id } = req.params;
        const data = req.body;
        const usuario = await Usuario.findByIdAndUpdate(id, data, { new: true });
        res.status(200).json({ success: true, message: 'Cuenta actualizada', usuario });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al actualizar', error });
    }
};

export const deleteAccount = async (req, res) => {
    try {
        const { id } = req.params;

        // Actualizamos el estado a false
        const usuario = await Usuario.findByIdAndUpdate(
            id, 
            { isActive: false }, 
            { new: true }
        );

        if (!usuario) {
            return res.status(404).json({ success: false, message: 'Usuario no encontrado' });
        }

        res.status(200).json({ 
            success: true, 
            message: `El usuario ${usuario.name} ha sido desactivado con éxito`, 
            usuario // Aquí verás en el JSON que isActive ahora es false
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al cambiar el estado', error });
    }
};