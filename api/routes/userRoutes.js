import express from 'express';
import {getUser, updateUser} from '../controllers/userController.js'
import { userVerify } from '../utils/verifyUser.js';
const router = express.Router();

router.get('/', getUser)

//get user

router.post('/update/:id', userVerify , updateUser)

export default router;