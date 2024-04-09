// En tu archivo de rutas
import express from 'express';
import { loginUser } from '../controllers/LoginController.js';

const router = express.Router();

router.post('/', loginUser);

export default router;
