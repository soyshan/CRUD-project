import axios from 'axios';
import { useState, useEffect } from 'react';
import BlogCard from '../RecipesCard/BlogCard';

const URI = 'http://localhost:8000/blogs/';

const HomeCards= () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const res = await axios.get(`${URI}?page=${currentPage}`);
                setBlogs(res.data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };
    
        getBlogs();
    }, [currentPage]);
    

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className='container'>
            <div className='row'>
                {blogs.slice(0, 3).map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
                <div>
                    <button onClick={prevPage} className="btn btn-primary" disabled={currentPage === 1}>Anterior</button>
                    <span> Página {currentPage} </span>
                    <button onClick={nextPage} className="btn btn-primary" disabled={currentPage === 2} >Siguiente</button>
                </div>
            </div>
        </div>
    );
};

export default HomeCards;
