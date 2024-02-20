//importamos la conexion a la base de datos
import db from "../database/db.js"
//importamos sequelize
import {DataTypes} from "sequelize";

//definimos nuestra conexión, y usamos el nombre de la tabla:blogs
const BlogModel = db.define('recetas',{
    title: { type: DataTypes.STRING},
    content: { type: DataTypes.STRING},
    ingredient: { type: DataTypes.STRING},
    image_url: { type: DataTypes.STRING } 

})


export default BlogModel
