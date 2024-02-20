import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './BlogDetailPageStyle.css'; 

const BlogDetailPage = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/blogs/${id}`);
                setBlog(response.data);
            } catch (error) {
                console.error('Error fetching blog:', error);
            }
        };

        fetchBlog();
    }, [id]);

    if (!blog) {
        return <div className="centered">No hay blogs disponibles</div>; 
    }

    // Para parsear los ingredientes separados por comas en una lista
    const ingredientesLista = blog.ingredient.split(',');

    return (
        <div className="blog-detail-container">
            <h2 className="centered">{blog.title}</h2> 
            <div className="centered ingredient-container">
                <h3>Ingredientes:</h3>
                <ul>
                    {ingredientesLista.map((ingrediente, index) => (
                        <li key={index}>{ingrediente}</li>
                    ))}
                </ul>
            </div>
            <img src={`http://localhost:8000/${blog.image_url}`} alt={blog.title} className="centered" />
            <p className="centered">{blog.content}</p> 
          

        
        </div>
    );
};

export default BlogDetailPage;
