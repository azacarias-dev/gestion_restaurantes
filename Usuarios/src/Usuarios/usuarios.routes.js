import { Router } from 'express';
import { getMyProfile, createAccount, updateAccount, deactivateAccount, activateAccount } from './usuarios.controller.js';
import { createAccountValidator } from '../../middlewares/usuarios-validator.js';

const router = Router();

router.get('/profile', getMyProfile); 

router.post('/register', createAccountValidator, createAccount); 

router.put('/update', updateAccount); 

router.put('/deactivate', deactivateAccount); 

router.put('/activate', activateAccount); 

export default router;