import db from "../database/db.js";
import { DataTypes } from "sequelize";

const UsersModel = db.define('users', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    is_admin: { type: DataTypes.BOOLEAN }
}, {
    timestamps: false // Esto desactiva los campos createdAt y updatedAt
  });
  
export default UsersModel;