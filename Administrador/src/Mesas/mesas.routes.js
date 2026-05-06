import { Router } from 'express';
import { 
    createMesa, 
    getMesasBySucursal, 
    updateMesa, 
    deactivateMesa, 
    activateMesa, 
    getAllMesas 
} from './mesas.controller.js';

const router = Router();

// GET: Obtener todas las mesas registradas
router.get('/', getAllMesas);

// POST: Crear una nueva mesa
router.post('/', createMesa);

// GET: Obtener mesas por el ID de una sucursal específica
router.get('/sucursal/:idSucursal', getMesasBySucursal); 

// PUT: Actualizar datos generales de la mesa (numero, capacidad)
router.put('/:id', updateMesa);

// PUT: Desactivar mesa (Borrado lógico)
router.put('/deactivate/:id', deactivateMesa);

// PUT: Activar mesa
router.put('/activate/:id', activateMesa);

export default router;