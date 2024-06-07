import express from 'express';
import { signIn } from '../controllers/signInController.js';
const route = express.Router();

route.post('/', signIn)


export default route;