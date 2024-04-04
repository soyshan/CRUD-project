import express from 'express';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} from '../controllers/UsersController.js';

const router = express.Router();

// Ruta para obtener todos los usuarios
router.get('/', getAllUsers);

// Ruta para obtener un usuario por su ID
router.get('/:id', getUserById);

// Ruta para crear un nuevo usuario
router.post('/', createUser);

// Ruta para actualizar un usuario existente
router.put('/:id', updateUser);

// Ruta para eliminar un usuario
router.delete('/:id', deleteUser);

export default router;
