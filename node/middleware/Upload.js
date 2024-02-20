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

const upload = multer({ storage:storage});

export const uploadImage = upload.single('image_url');


