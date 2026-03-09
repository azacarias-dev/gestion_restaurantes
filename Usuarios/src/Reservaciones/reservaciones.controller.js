'use strict'

import Reservacion from './reservaciones.model.js';
import Usuario from '../Usuarios/usuarios.model.js';
import Sucursal from '../Sucursal/sucursal.model.js';
import Mesa from '../Mesas/mesas.model.js';


// ================= CREATE =================
export const createReservation = async (req, res) => {
    try {
        const { id_usuario, sucursal, mesa, fecha, hora, numero_personas } = req.body;

        // 1. Validar que la SUCURSAL exista y esté activa
        const sucursalDoc = await Sucursal.findById(sucursal);
        
        // CAMBIO: Usamos isActive porque así se llama en tu JSON
        if (!sucursalDoc || !sucursalDoc.isActive) {
            return res.status(404).json({ success: false, message: 'Sucursal no encontrada o inactiva' });
        }

        // CAMBIO: Accedemos al objeto anidado sucursalDoc.horario.apertura/cierre
        const { apertura, cierre } = sucursalDoc.horario;

        if (hora < apertura || hora > cierre) {
            return res.status(400).json({ 
                success: false, 
                message: `La sucursal abre a las ${apertura} y cierra a las ${cierre}.` 
            });
        }

        // 2. Validar que la MESA exista (Revisa si en Mesa usas 'status' o 'isActive')
        const mesaDoc = await Mesa.findById(mesa);
        if (!mesaDoc || !mesaDoc.status) { 
            return res.status(404).json({ success: false, message: 'La mesa no existe o no está habilitada' });
        }

        if (mesaDoc.capacidad < numero_personas) {
            return res.status(400).json({ 
                success: false, 
                message: `Esta mesa solo tiene capacidad para ${mesaDoc.capacidad} personas.` 
            });
        }

        // 3. (Opcional pero recomendado) Validar que la mesa no esté ya reservada a esa hora
        // Por ahora, creamos la reservación
        const nuevaReservacion = new Reservacion({
            id_usuario,
            sucursal,
            mesa,
            fecha,
            hora,
            numero_personas
        });

        await nuevaReservacion.save();

        res.status(201).json({
            success: true,
            message: 'Reservación creada con éxito tras validar horario y capacidad',
            data: nuevaReservacion
        });

    } catch (error) {
        res.status(500).json({ success: false, message: 'Error en el servidor', error: error.message });
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
        const { estado } = req.body; // Viene del middleware de las rutas

        const reservacion = await Reservacion.findByIdAndUpdate(
            id,
            { estado },
            { new: true, runValidators: true }
        );

        if (!reservacion) {
            return res.status(404).json({
                success: false,
                message: 'No se encontró la reservación para actualizar'
            });
        }

        res.status(200).json({
            success: true,
            message: `La reservación ha sido ${estado} con éxito`,
            data: reservacion
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al cambiar el estado de la reservación',
            error: error.message
        });
    }
};

// ================= GET RESERVACIONES POR USUARIO =================
export const getReservationsByUser = async (req, res) => {
    try {
        const { uid } = req.params; 

        const reservaciones = await Reservacion.find({ id_usuario: uid })
            .populate('sucursal', 'nombre direccion') 
            .populate('mesa', 'numero capacidad')   
            .sort({ fecha: -1 }); 

        if (reservaciones.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'Este usuario no tiene reservaciones registradas'
            });
        }

        res.status(200).json({
            success: true,
            total: reservaciones.length,
            data: reservaciones
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener el historial de reservaciones',
            error: error.message
        });
    }
};
