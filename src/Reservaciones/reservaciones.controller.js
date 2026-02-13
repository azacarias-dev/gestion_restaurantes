import Reservacion from './reservaciones.model.js';

export const createReservacion = async (req, res) => {
    try {
        const reservacion = new Reservacion(req.body);
        await reservacion.save();
        res.status(201).json({ success: true, message: 'Reservación lista', reservacion });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error en reservación', error });
    }
};

export const updateReservacion = async (req, res) => {
    try {
        const { id } = req.params;
        const reservacion = await Reservacion.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ success: true, message: 'Reservación actualizada', reservacion });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al actualizar', error });
    }
};