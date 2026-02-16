'use strict'

import Reservacion from './reservaciones.model.js';
import Usuario from '../Usuarios/usuarios.model.js';


// ================= GET ALL =================
export const getReservations = async (req, res) => {
    try {

        const reservaciones = await Reservacion.find()
            .populate('id_usuario', 'name email'); // 👈 AQUI

        res.status(200).json({
            success: true,
            data: reservaciones
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: 'Error al obtener reservaciones',
            error: error.message
        });

    }
};



// ================= CREATE =================
export const createReservation = async (req, res) => {
    try {

        const { id_usuario, fecha, hora, numero_personas } = req.body;

        // 🔥 validar que usuario exista
        const usuario = await Usuario.findById(id_usuario);

        if (!usuario) {
            return res.status(404).json({
                success: false,
                message: 'Usuario no encontrado'
            });
        }

        // 🔥 crear reservación SOLO con el ID
        const nuevaReservacion = new Reservacion({
            id_usuario,
            fecha,
            hora,
            numero_personas
        });

        await nuevaReservacion.save();

        res.status(201).json({
            success: true,
            message: 'Reservación creada correctamente',
            data: nuevaReservacion
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: 'Error al crear reservación',
            error: error.message
        });

    }
};


// ================= GET BY ID =================
export const getReservationById = async (req, res) => {
    try {

        const { id } = req.params;

        const reservacion = await Reservacion.findById(id)
            .populate('id_usuario', 'name email');


        if (!reservacion) {
            return res.status(404).json({
                success: false,
                message: 'Reservación no encontrada'
            });
        }

        res.status(200).json({
            success: true,
            data: reservacion
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: 'Error al obtener reservación',
            error: error.message
        });

    }
};


// ================= UPDATE =================
export const updateReservation = async (req, res) => {
    try {

        const { id } = req.params;

        const reservacion = await Reservacion.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!reservacion) {
            return res.status(404).json({
                success: false,
                message: 'Reservación no encontrada'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Reservación actualizada',
            data: reservacion
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: 'Error al actualizar reservación',
            error: error.message
        });

    }
};


// ================= CAMBIAR ESTADO =================
export const changeReservationStatus = async (req, res) => {
    try {

        const { id } = req.params;
        const { estado } = req.body;

        const reservacion = await Reservacion.findByIdAndUpdate(
            id,
            { estado },
            { new: true }
        );

        if (!reservacion) {
            return res.status(404).json({
                success: false,
                message: 'Reservación no encontrada'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Estado actualizado correctamente',
            data: reservacion
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: 'Error al cambiar estado',
            error: error.message
        });

    }
};
