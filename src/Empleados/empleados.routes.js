import { Router } from 'express';
import { getEmpleados, saveEmpleado, updateEmpleado, deleteEmpleado } from './empleados.controller.js';
import { saveEmpleadoValidator } from '../../middlewares/empleados-validator.js';

const routes = Router();

routes.get('/', getEmpleados);

routes.post('/', saveEmpleadoValidator, saveEmpleado);

routes.put('/:id', updateEmpleado);

routes.delete('/:id', deleteEmpleado);

export default routes;