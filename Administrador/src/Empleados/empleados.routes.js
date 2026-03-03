import { Router } from 'express';
import { getEmpleados, getEmpleadoById ,saveEmpleado, updateEmpleado, deleteEmpleado } from './empleados.controller.js';
import { saveEmpleadoValidator, getEmpleadoByIdValidator } from '../../middlewares/empleados-validator.js';

const routes = Router();

routes.get('/', getEmpleados);

routes.get('/:id', getEmpleadoById, getEmpleadoByIdValidator);

routes.post('/', saveEmpleadoValidator, saveEmpleado);

routes.put('/:id', updateEmpleado);

routes.delete('/:id', deleteEmpleado);

export default routes;