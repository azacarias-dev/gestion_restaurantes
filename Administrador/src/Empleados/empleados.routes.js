import { Router } from 'express';
import { getEmpleados, getEmpleadoById ,saveEmpleado, updateEmpleado, activateEmpleado, deactivateEmpleado } from './empleados.controller.js';
import { saveEmpleadoValidator, getEmpleadoByIdValidator } from '../../middlewares/empleados-validator.js';

const routes = Router();

routes.get('/', getEmpleados);

routes.get('/:id', getEmpleadoById, getEmpleadoByIdValidator);

routes.post('/', saveEmpleadoValidator, saveEmpleado);

routes.put('/:id', updateEmpleado);

routes.put('/activate/:id', activateEmpleado);

routes.put('/deactivate/:id', deactivateEmpleado);

export default routes;