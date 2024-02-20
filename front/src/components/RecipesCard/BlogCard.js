// BlogCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCardStyle.css'
const BlogCard = ({ blog }) => {
    if (!blog) {
        return (
            <div className='col-md-4'>
                <div className='card mb-4'>
                    <div className='card-body'>
                        <p>No hay blogs para mostrar</p>
                    </div>
                </div>
            </div>
        );
    }

    // Limitar la longitud del contenido a mostrar en la tarjeta
    const limitedContent = blog.content.substring(0, 100) + '...'; // Mostrar solo los primeros 100 caracteres

    return (
        <div className='col-md-4 mt-5'>
            <div className='card mb-4'>
            <img
                    src={`http://localhost:8000/${blog.image_url}`}
                    className='card-img-top'
                    alt={blog.title}
                    style={{ width: '100%', height: '200px', objectFit: 'contain' }} // 
                />
                <div className='card-body'>
                    <h5 className='card-title'>{blog.title}</h5>
                    <p className='card-text'>{limitedContent}</p>
                    <Link to={`/blogs/${blog.id}`} className='btn btn-primary'>Ver receta completa</Link> 
                </div>
            </div>
        </div>
    );
};

export default BlogCard;






