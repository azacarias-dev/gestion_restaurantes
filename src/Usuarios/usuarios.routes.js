import { Router } from 'express';
import { createAccount, updateAccount } from './usuarios.controller.js';
import { createAccountValidator } from '../../middlewares/usuarios-validator.js';

const router = Router();

router.post('/createAccount', createAccountValidator, createAccount);

router.put('/updateAccount/:id', updateAccount);

export default router;