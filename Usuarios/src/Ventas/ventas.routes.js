import { Router } from "express";
import { crearVenta } from "./ventas.controller.js";
import { createVentaValidator } from "../../middlewares/ventas-validators.js";

const router = Router();

router.post("/", createVentaValidator, crearVenta);

export default router;