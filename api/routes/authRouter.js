import express from 'express';
import {signUp} from '../controllers/authController.js'

const router = express.Router();

// Api

router.post('/', signUp);

export default router;