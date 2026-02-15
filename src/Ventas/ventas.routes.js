import { Router } from "express";
import { crearVenta, getVentas, getVentaById } from "./ventas.controller.js";

const router = Router();

router.post('/', crearVenta);
router.get('/', getVentas);
router.get('/:id', getVentaById);
export default router;