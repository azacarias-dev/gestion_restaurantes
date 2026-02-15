import Usuario from './usuarios.model.js';

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