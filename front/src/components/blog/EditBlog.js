//metodo del video

// import axios from 'axios'
// import {useEffect, useState} from 'react';
// import { useNavigate, useParams } from 'react-router-dom';

// const URI = 'http://localhost:8000/blogs/'

// const CompEditBlog = () =>{
//     const[title, setTitle] = useState('')
//     const [content, setContent] = useState('')
//     const navigate = useNavigate()
//     const {id }= useParams()

//     const update = async (e)=>{
//         e.preventDefault()
//         await axios.put(URI + id,{
//             title:title,
//             content:content
//         })
//         navigate('/')
//     }
//     useEffect(()=>{
//         getBlogById()
//     },[])

   
//     const getBlogById = async () =>{
//         const res = await axios.get(URI+id)
//         setTitle(res.data.title)
//         setContent(res.data.content)
//     }
//     return (
//         <div>
//             <h3>
//            Edit post
//             </h3>
//             <form onSubmit={update}>
//             <div Name= 'mb-3'>
//                 <label className ='form-label'>Title</label>
//                 <input value={title}
//                         onChange={(e)=>setTitle(e.target.value)}
//                         type="text"
//                         className='form-control'
//                 />
//             </div>

//             <div className= 'mb-3'>
//                 <label className ='form-label'>Title</label>
//                 <textarea value={content}
//                         onChange={(e)=>setContent(e.target.value)}
//                         type="text"
//                         className='form-control'
//                 />
//                 </div>

//             <button type='submit' className='btn btn-primary'>Store</button>
//             </form>
//         </div>
//     )
   
// }

// export default CompEditBlog


//------------------------------
// import axios from 'axios'
// import {useEffect, useState} from 'react';
// import { useNavigate, useParams } from 'react-router-dom';

// const URI = 'http://localhost:8000/blogs/'

// const CompEditBlog = () =>{
//     const[title, setTitle] = useState('')
//     const [content, setContent] = useState('')
//     const navigate = useNavigate()
//     const {id }= useParams()

//     const update = async (e)=>{
//         e.preventDefault()
//         await axios.put(URI + id,{
//             title:title,
//             content:content
//         })
//         navigate('/')
//     }
//     useEffect(() => {
//         const getBlogById = async () => {
//             try {
//                 const res = await axios.get(URI + id);
//                 setTitle(res.data.title);
//                 setContent(res.data.content);
//             } catch (error) {
//                 console.error('Error al obtener el blog:', error);
//             }
//         };
    
//         if (id) {
//             getBlogById();
//         }
//     }, [id]);
    
//     return (
//         <div>
//             <h3>
//            Edit post
//             </h3>
//             <form onSubmit={update}>
//             <div className= 'mb-3'>
//                 <label className ='form-label'>Title</label>
//                 <input value={title}
//                         onChange={(e)=>setTitle(e.target.value)}
//                         type="text"
//                         className='form-control'
//                 />
//             </div>

//             <div className= 'mb-3'>
//                 <label className ='form-label'>Title</label>
//                 <textarea value={content}
//                         onChange={(e)=>setContent(e.target.value)}
//                         type="text"
//                         className='form-control'
//                 />
//                 </div>

//             <button type='submit' className='btn btn-primary'>Store</button>
//             </form>
//         </div>
//     )
   
// }

// export default CompEditBlog

//------------------------------------------------

// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';

// const URI = 'http://localhost:8000/blogs/';

// const CompEditBlog = () => {
//     const [title, setTitle] = useState('');
//     const [content, setContent] = useState('');
//     const [image, setImage] = useState(null);
//     const navigate = useNavigate();
//     const { id } = useParams();

//     useEffect(() => {
//         const getBlogById = async () => {
//             try {
//                 const res = await axios.get(`${URI}${id}`);
//                 setTitle(res.data.title);
//                 setContent(res.data.content);
//             } catch (error) {
//                 console.error('Error al obtener el blog:', error);
//             }
//         };

//         if (id) {
//             getBlogById();
//         }
//     }, [id]);


//         const update = async (e) => {
//             e.preventDefault();
        
//             const formData = new FormData();
//             formData.append('title', title);
//             formData.append('content', content);
//             // Siempre agrega la imagen al FormData, incluso si es nula
//             formData.append('image', image); 
        
//             try {
//                 await axios.put(`${URI}${id}`, formData, {
//                     headers: {
//                         'Content-Type': 'multipart/form-data',
//                     },
//                 });
//                 navigate('/');
//             } catch (error) {
//                 console.error('Error al actualizar el blog:', error);
//             }
//         };
        
//     const handleImageChange = (e) => {
//         setImage(e.target.files[0]);
//     };

//     return (
//         <div>
//             <h3>Edit post</h3>
//             <form onSubmit={update}>
//                 <div className='mb-3'>
//                     <label className='form-label'>Title</label>
//                     <input
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                         type='text'
//                         className='form-control'
//                     />
//                 </div>

//                 <div className='mb-3'>
//                     <label className='form-label'>Content</label>
//                     <textarea
//                         value={content}
//                         onChange={(e) => setContent(e.target.value)}
//                         type='text'
//                         className='form-control'
//                     />
//                 </div>

//                 <div className='mb-3'>
//                     <label htmlFor='image' className='form-label'>
//                         Image
//                     </label>
//                     <input
//                         id='image'
//                         type='file'
//                         accept='image/*'
//                         onChange={handleImageChange}
//                         className='form-control'
//                     />
//                 </div>

//                 <button type='submit' className='btn btn-primary'>
//                     Update
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default CompEditBlog;


// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';

// const URI = 'http://localhost:8000/blogs/';

// const CompEditBlog = () => {
//     const [title, setTitle] = useState('');
//     const [content, setContent] = useState('');
//     const [imageUrl, setImageUrl] = useState('');
//     const navigate = useNavigate();
//     const { id } = useParams();

//     const update = async (e) => {
//         e.preventDefault();
//         await axios.put(URI + id, {
//             title: title,
//             content: content,
//             image_url: imageUrl
//         });
//         navigate('/');
//     };

//     useEffect(() => {
//         getBlogById();
//     }, []);

//     const getBlogById = async () => {
//         const res = await axios.get(URI + id);
//         setTitle(res.data.title);
//         setContent(res.data.content);
//         setImageUrl(res.data.image_url);
//     };

//     return (
//         <div>
//             <h3>Edit post</h3>
//             <form onSubmit={update}>
//                 <div className='mb-3'>
//                     <label className='form-label'>Title</label>
//                     <input
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                         type='text'
//                         className='form-control'
//                     />
//                 </div>

//                 <div className='mb-3'>
//                     <label className='form-label'>Content</label>
//                     <textarea
//                         value={content}
//                         onChange={(e) => setContent(e.target.value)}
//                         type='text'
//                         className='form-control'
//                     />
//                 </div>

//                 <div className='mb-3'>
//                     <label className='form-label'>Image URL</label>
//                     <input
//                         value={imageUrl}
//                         onChange={(e) => setImageUrl(e.target.value)}
//                         type='text'
//                         className='form-control'
//                     />
//                 </div>

//                 <button type='submit' className='btn btn-primary'>
//                     Update
//                 </button>
//             </form>

//             {/* Mostrar la imagen */}
//             {imageUrl && (
//                 <div className='mt-3'>
//                     <h5>Preview:</h5>
//                     <img src={imageUrl} alt='Preview' style={{ maxWidth: '100%', maxHeight: '200px' }} />
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CompEditBlog;


import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const URI = 'http://localhost:8000/blogs/';

const CompEditBlog = () => {
    const [title, setTitle] = useState('');
    const [ingredient, setIngredient] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();

   
    const handleImageChange = (e) => {
        const selectedFile = e.target.files[0];
        console.log('Archivo seleccionado:', selectedFile);
        setImage(selectedFile);
    };
    

    useEffect(() => {
        const getBlogById = async () => {
            try {
                const res = await axios.get(`${URI}${id}`);
                setTitle(res.data.title);
                setIngredient(res.data.ingredient);
                setContent(res.data.content);
                setImage(res.data.image_url);
            } catch (error) {
                console.error('Error al obtener el blog:', error);
            }
        };

        getBlogById(); 
    }, [id]);

    const update = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('title', title);
        formData.append('ingredient', ingredient);
        formData.append('content', content);
        formData.append('image_url', image);
    
        console.log('Datos a enviar:', formData); // Aquí se imprime el FormData
    
        try {
            await axios.put(`${URI}${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            navigate('/');
        } catch (error) {
            console.error('Error al actualizar el post:', error);
        }
    };
    

  
    return (
        <div>
            <h3>Edit post</h3>
            <form onSubmit={update}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Ingredient</label>
                    <textarea
                        value={ingredient}
                        onChange={(e) => setIngredient(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>


                <div className="mb-3">
                    <label className="form-label">Content</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Imagen</label>
                    <input
                        type="file"
                        className="form-control"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Update
                </button>
            </form>
        </div>
    );
};

export default CompEditBlog;
