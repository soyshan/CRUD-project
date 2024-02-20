import express from "express";
import cors from 'cors'
//importamos la conexion a la base de datos
import db from "./database/db.js"
//importamos el enrutador
import blogRoutes from './routes/routes.js'
import path from 'path'



const __dirname = path.resolve();

const app = express()

app.use(cors())
app.use(express.json())
app.use('/blogs', blogRoutes)


app.use(express.static(path.join(__dirname,'/front/dist')));

app.get('*',(req,res)=>{res.sendFile(path.join(__dirname, 'front', 'dist', 'index.html'))});


// app.post('/upload', uploadImage, (req, res) => {
 
//     console.log(req.file);
    
//     res.send("Imagen cargada correctamente");
// });

app.use('/uploads',express.static('uploads'));

try {
    await db.authenticate()
    console.log ('Conexion exitosa a la DB')
} catch (error){
    console.log(`El error de conexión es: ${error}`)

}


app.listen(8000, ()=>{
    console.log('Server UP running in http://localhost:8000/')
})


//En caso de que el codigo en deploy no funcione bien usar esta manera

// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => {
//   console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
// });

