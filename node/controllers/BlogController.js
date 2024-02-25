//importamos el Modelo 
import BlogModel from "../models/BlogModel.js";
import { uploadImage } from '../middleware/Upload.js'
import multer from "multer";

//*Metodos para el CRUD**/

//Mostrar todos los registros

export const getAllBlogs = async (req, res) =>{
    const page = parseInt(req.query.page) || 1; // para obtener el número de página de la consulta, si no está presente, usa la página 1
    const perPage = 6; // Número de blogs por página

    try {
        const offset = (page - 1) * perPage; // Calcula el desplazamiento para la consulta

        const blogs = await BlogModel.findAll({
            offset,
            limit: perPage
        });

        res.json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


//Mostrar un registro/blog

export const getBlog = async (req, res) =>{
    try {
        const blog = await BlogModel.findByPk(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: "El blog no existe" });
        }
        res.json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


//crear un blog
export const createBlog = async (req, res) => {
    try {
        // Ejecuta el middleware de multer para manejar la carga de la imagen
        uploadImage(req, res, async function (err) {
            if (err) {
                return res.status(400).json({ message: err.message });
            }

            try {
                const image_url = req.file ? req.file.path.replace(/\\/g, '/') : null;
                const newblog = await BlogModel.create({
                    title: req.body.title,
                    content: req.body.content,
                    ingredient:req.body.ingredient,
                    image_url: image_url
                });

                res.json({
                    message: "¡Registro creado correctamente!",
                    blog: newblog
                });
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};




//actualizar un registro

export const updateBlog = async (req, res) => {
    try {
        // Ejecuta el middleware de multer para manejar la carga de la imagen
        uploadImage(req, res, async function (err) {
            if (err instanceof multer.MulterError) {
               
                return res.status(500).json({ message: err.message });
            } else if (err) {
                
                return res.status(500).json({ message: err.message });
            }

           
            if (req.file) {
                req.body.image_url = req.file.path; 
            }

            // Actualiza el blog
            await BlogModel.update(req.body, {
                where: { id: req.params.id }
            });

            res.json({
                "message": "Registro actualizado correctamente"
            });
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



//eliminar un blog
export const deleteBlog = async (req, res) =>{
    try{
        await BlogModel.destroy({
            where: { id : req.params.id }
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    }catch(error){
        res.json({message: error.message})
    }
}






