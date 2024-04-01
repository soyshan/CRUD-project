import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const ext = file.originalname.split('.').pop();
        cb(null, `${Date.now()}.${ext}`);
    }
});
//cb se utiliza para especificar la carpeta de destino donde se guardarán los archivos cargados
//null como primer argumento (indicando que no ha ocurrido un error) y 'uploads/' 
//como segundo argumento, que es la carpeta donde se guardarán los archivos.


const upload = multer({ storage:storage});

export const uploadImage = upload.single('image_url');


//middleware  manejar la carga de archivos utilizando la biblioteca Multer