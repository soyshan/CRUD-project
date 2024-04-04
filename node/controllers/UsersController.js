import bcrypt from 'bcrypt';
import UsersModel from '../models/UsersModel.js';

export const getAllUsers = async (req, res) => {
    try {
        const users = await UsersModel.findAll();
        return res.json(users);
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener usuarios' });
    }
};

export const createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await UsersModel.create({ username, email, password: hashedPassword });
        return res.status(201).json(newUser);
    } catch (error) {
        return res.status(500).json({ error: 'Error al crear usuario' });
    }
};

export const getUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await UsersModel.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        return res.json(user);
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener usuario' });
    }
};

export const updateUser = async (req, res) => {
    const userId = req.params.id;
    const { username, email } = req.body;
    try {
        const user = await UsersModel.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        user.username = username;
        user.email = email;
        await user.save();
        return res.json(user);
    } catch (error) {
        return res.status(500).json({ error: 'Error al actualizar usuario' });
    }
};

export const deleteUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await UsersModel.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        await user.destroy();
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: 'Error al eliminar usuario' });
    }
};
