import express from 'express';
import { google } from '../controllers/signInController.js';

const router = express.Router();

//signUp with google
router.post('/auth/google',google)

export default router;