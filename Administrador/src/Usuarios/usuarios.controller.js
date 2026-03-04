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
