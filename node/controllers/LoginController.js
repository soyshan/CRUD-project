// En tu controlador de autenticación
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UsersModel from '../models/UsersModel.js';

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Buscar al usuario en la base de datos por su nombre de usuario
    const user = await UsersModel.findOne({ where: { username } });

    // Si el usuario no existe o la contraseña es incorrecta, responder con un error
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    // Generar un token de autenticación
    const token = jwt.sign({ userId: user.id, isAdmin: user.is_admin }, 'codigosecreto');

    // Enviar el token al cliente
    res.json({ token });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
