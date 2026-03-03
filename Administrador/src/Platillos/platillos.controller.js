import Platillos from './platillos.model.js';

// Obtener todos los platillos con paginación y filtros
export const getPlatillos = async (req, res) => {
  try {
    const { page = 1, limit = 10, isActive = true } = req.query;

    const filter = { isActive };

    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
      sort: { createdAt: -1 },
    };

    const platillos = await Platillos.find(filter)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort(options.sort);

    const total = await Platillos.countDocuments(filter);

    res.status(200).json({
      success: true,
      data: platillos,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalRecords: total,
        limit,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener los platillos',
      error: error.message,
    });
  }
};

// Obtener platillo por ID
export const getPlatilloById = async (req, res) => {
  try {
    const { id } = req.params;

    const platillo = await Platillos.findById(id);

    if (!platillo) {
      return res.status(404).json({
        success: false,
        message: 'Platillo no encontrado',
      });
    }

    res.status(200).json({
      success: true,
      data: platillo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener el platillo',
      error: error.message,
    });
  }
};

// Crear nuevo platillo
export const createPlatillo = async (req, res) => {
  try {
    const platilloData = req.body;

    const platillo = new Platillos(platilloData);
    await platillo.save();

    res.status(201).json({
      success: true,
      message: 'Platillo creado exitosamente',
      data: platillo,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error al crear el platillo',
      error: error.message,
    });
  }
};

// Actualizar platillo
export const updatePlatillo = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = { ...req.body };

    const platillo = await Platillos.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!platillo) {
      return res.status(404).json({
        success: false,
        message: 'Platillo no encontrado',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Platillo actualizado exitosamente',
      data: platillo,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error al actualizar el platillo',
      error: error.message,
    });
  }
};

// Cambiar estado del platillo (activar/desactivar)
export const changePlatilloStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const isActive = req.url.includes('/activar');
    const action = isActive ? 'activado' : 'desactivado';

    const platillo = await Platillos.findByIdAndUpdate(
      id,
      { isActive },
      { new: true }
    );

    if (!platillo) {
      return res.status(404).json({
        success: false,
        message: 'Platillo no encontrado',
      });
    }

    res.status(200).json({
      success: true,
      message: `Platillo ${action} exitosamente`,
      data: platillo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al cambiar el estado del platillo',
      error: error.message,
    });
  }
};
