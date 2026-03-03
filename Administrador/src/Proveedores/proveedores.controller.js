import Proveedores from './proveedores.model.js';

// Obtener todos los proveedores con paginación y filtros
export const getProveedores = async (req, res) => {
  try {
    const { page = 1, limit = 10, isActive = true } = req.query;

    const filter = { isActive };

    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
      sort: { createdAt: -1 },
    };

    const proveedores = await Proveedores.find(filter)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort(options.sort);

    const total = await Proveedores.countDocuments(filter);

    res.status(200).json({
      success: true,
      data: proveedores,
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
      message: 'Error al obtener los proveedores',
      error: error.message,
    });
  }
};

// Obtener proveedor por ID
export const getProveedorById = async (req, res) => {
  try {
    const { id } = req.params;

    const proveedor = await Proveedores.findById(id);

    if (!proveedor) {
      return res.status(404).json({
        success: false,
        message: 'Proveedor no encontrado',
      });
    }

    res.status(200).json({
      success: true,
      data: proveedor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener el proveedor',
      error: error.message,
    });
  }
};

// Crear nuevo proveedor
export const createProveedor = async (req, res) => {
  try {
    const proveedorData = req.body;

    const proveedor = new Proveedores(proveedorData);
    await proveedor.save();

    res.status(201).json({
      success: true,
      message: 'Proveedor creado exitosamente',
      data: proveedor,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error al crear el proveedor',
      error: error.message,
    });
  }
};

// Actualizar proveedor
export const updateProveedor = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = { ...req.body };

    const proveedor = await Proveedores.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!proveedor) {
      return res.status(404).json({
        success: false,
        message: 'Proveedor no encontrado',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Proveedor actualizado exitosamente',
      data: proveedor,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error al actualizar el proveedor',
      error: error.message,
    });
  }
};

// Cambiar estado del proveedor (activar/desactivar)
export const changeProveedorStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const isActive = req.url.includes('/activar');
    const action = isActive ? 'activado' : 'desactivado';

    const proveedor = await Proveedores.findByIdAndUpdate(
      id,
      { isActive },
      { new: true }
    );

    if (!proveedor) {
      return res.status(404).json({
        success: false,
        message: 'Proveedor no encontrado',
      });
    }

    res.status(200).json({
      success: true,
      message: `Proveedor ${action} exitosamente`,
      data: proveedor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al cambiar el estado del proveedor',
      error: error.message,
    });
  }
};
