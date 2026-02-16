import { Router } from 'express';
import { getUsers, getUserById ,createAccount, updateAccount } from './usuarios.controller.js';
import { createAccountValidator } from '../../middlewares/usuarios-validator.js';

const router = Router();

router.get('/getUsers', getUsers);

router.get('/getUserById/:id', getUserById);

router.post('/createAccount', createAccountValidator, createAccount);

router.put('/updateAccount/:id', updateAccount);

export default router;