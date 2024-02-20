// UsuariosController.js
// import Usuario from '../models/Usuario.js';

// Mostrar todos los usuarios
// export const getAllUsers = async (req, res) => {
//   try {
//     const usuarios = await Usuario.findAll();
//     res.json(usuarios);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// Mostrar un usuario por su ID
// export const getUserById = async (req, res) => {
//   try {
//     const usuario = await Usuario.findByPk(req.params.id);
//     if (!usuario) {
//       return res.status(404).json({ message: 'Usuario no encontrado' });
//     }
//     res.json(usuario);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// Crear un nuevo usuario
// export const createUser = async (req, res) => {
//   try {
//     const nuevoUsuario = await Usuario.create(req.body);
//     res.status(201).json(nuevoUsuario);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// Actualizar un usuario existente
// export const updateUser = async (req, res) => {
//   try {
//     const usuario = await Usuario.findByPk(req.params.id);
//     if (!usuario) {
//       return res.status(404).json({ message: 'Usuario no encontrado' });
//     }
//     await usuario.update(req.body);
//     res.json({ message: 'Usuario actualizado correctamente' });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// Eliminar un usuario por su ID
// export const deleteUser = async (req, res) => {
//   try {
//     const usuario = await Usuario.findByPk(req.params.id);
//     if (!usuario) {
//       return res.status(404).json({ message: 'Usuario no encontrado' });
//     }
//     await usuario.destroy();
//     res.json({ message: 'Usuario eliminado correctamente' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
