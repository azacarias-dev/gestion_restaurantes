import Empleado from './empleados.model.js';

export const getEmpleados = async (req, res) => {
    try {
        const empleados = await Empleado.find({ status: true });
        res.status(200).json({ success: true, total: empleados.length, empleados });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al obtener empleados', error });
    }
};

export const saveEmpleado = async (req, res) => {
    try {
        const data = req.body;
        const empleado = new Empleado(data);
        await empleado.save();
        res.status(201).json({ success: true, message: 'Empleado guardado', empleado });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al guardar empleado', error });
    }
};

export const updateEmpleado = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const empleado = await Empleado.findByIdAndUpdate(id, data, { new: true });
        res.status(200).json({ success: true, message: 'Empleado actualizado', empleado });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al actualizar', error });
    }
};

export const deleteEmpleado = async (req, res) => {
    try {
        const { id } = req.params;
        const empleado = await Empleado.findByIdAndUpdate(id, { status: false }, { new: true });
        res.status(200).json({ success: true, message: 'Empleado desactivado', empleado });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al eliminar', error });
    }
};