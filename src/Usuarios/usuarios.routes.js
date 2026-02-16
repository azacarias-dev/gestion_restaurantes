import { Router } from 'express';
import { getUsers, getUserById, createAccount, updateAccount } from './usuarios.controller.js';
import { createAccountValidator } from '../../middlewares/usuarios-validator.js';

const router = Router();

router.get('/', getUsers);

router.get('/:id', getUserById);

router.post('/', createAccountValidator, createAccount);

router.put('/:id', updateAccount);

export default router;