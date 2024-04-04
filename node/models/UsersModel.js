import db from "../database/db.js";
import { DataTypes } from "sequelize";

const UsersModel = db.define('users', {
    username: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    is_admin: { type: DataTypes.BOOLEAN }
});

export default UsersModel;