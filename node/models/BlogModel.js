//importamos la conexion a la base de datos
import db from "../database/db.js"
//importamos sequelize
import {DataTypes} from "sequelize";
import UsersModel from "./UsersModel.js";
//definimos nuestra conexión, y usamos el nombre de la tabla: recetas
const BlogModel = db.define('recetas',{
    title: { type: DataTypes.STRING},
    content: { type: DataTypes.STRING},
    ingredient: { type: DataTypes.STRING},
    image_url: { type: DataTypes.STRING } 

})
// Establecer la relación entre la tabla de recetas  y la de usuarios
BlogModel.belongsTo(UsersModel, { foreignKey: 'user_id' });

                    
export default BlogModel
