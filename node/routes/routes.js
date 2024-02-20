import express from 'express'
//usamos el enrutador que nos ofrece el express
import {createBlog, getAllBlogs, getBlog, updateBlog, deleteBlog} from '../controllers/BlogController.js'
const router = express.Router()

//traer o mostrar todos los blogs
//ruta raiz '/' y el metodo:getAllBlogs

router.get('/',getAllBlogs)

//metodo para mostrar un solo blog
router.get('/:id', getBlog)

//para crear
router.post('/',createBlog)

//para actualizar
router.put('/:id',updateBlog)

//para eliminar
router.delete('/:id',deleteBlog)


export default router