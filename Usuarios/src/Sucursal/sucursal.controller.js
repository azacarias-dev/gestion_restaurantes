import Sucursales from './sucursal.model.js';

// Función para calcular el estado según la hora
const obtenerEstadoSucursal = (apertura, cierre) => {
  if (!apertura || !cierre) return "Horario no definido";

  const ahora = new Date();
  const [horaA, minA] = apertura.split(":").map(Number);
  const [horaC, minC] = cierre.split(":").map(Number);

  const aperturaDate = new Date();
  aperturaDate.setHours(horaA, minA, 0);

  const cierreDate = new Date();
  cierreDate.setHours(horaC, minC, 0);

  if (ahora < aperturaDate) return "Cerrado";

  if (ahora >= aperturaDate && ahora < cierreDate) {
    const diferenciaMinutos = (cierreDate - ahora) / 60000;
    if (diferenciaMinutos <= 60) return "Cierra pronto";
    return "Abierto";
  }

  return "Cerrado";
};

// GET: obtener sucursal por ID
export const getSucursalById = async (req, res) => {
  try {
    const { id } = req.params;
    const sucursal = await Sucursales.findById(id);

    if (!sucursal) {
      return res.status(404).json({
        success: false,
        message: 'Sucursal no encontrada',
      });
    }

    const sucursalConEstado = {
      ...sucursal._doc,
      estado: sucursal.horario
        ? obtenerEstadoSucursal(sucursal.horario.apertura, sucursal.horario.cierre)
        : "Horario no definido",
    };

    res.status(200).json({
      success: true,
      data: sucursalConEstado,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener la sucursal',
      error: error.message,
    });
  }
};