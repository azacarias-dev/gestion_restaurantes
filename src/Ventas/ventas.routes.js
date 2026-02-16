import { Router } from "express";
import { crearVenta, getVentas, getVentaById } from "./ventas.controller.js";
import { createVentaValidator, getVentaByIdValidator } from "../../middlewares/ventas-validators.js";

const router = Router();

router.post('/', createVentaValidator, crearVenta);
router.get('/', getVentas);
router.get('/:id', getVentaByIdValidator, getVentaById);
export default router;