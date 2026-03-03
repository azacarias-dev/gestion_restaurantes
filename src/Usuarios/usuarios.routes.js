import { Router } from 'express';
import { getUsers, getUserById, createAccount, updateAccount, deleteAccount } from './usuarios.controller.js';
import { createAccountValidator, deleteAccountValidator } from '../../middlewares/usuarios-validator.js';

const router = Router();

router.get('/', getUsers);

router.get('/:id', getUserById);

router.post('/', createAccountValidator, createAccount);

router.put('/:id', updateAccount);

router.delete('/:id', deleteAccountValidator, deleteAccount);

export default router;