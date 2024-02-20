import { useState, useEffect, useCallback } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const URI = 'http://localhost:8000/blogs/';

const CompShowBlogs = () => {
    const [blogs, setBlog] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const getBlogs = useCallback(async () => {
        try {
            const res = await axios.get(`${URI}?page=${currentPage}`);
            setBlog(res.data);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    }, [currentPage]);

    useEffect(() => {
        getBlogs();
    }, [getBlogs]);

    const deleteBlog = async (id) => {
        try {
            await axios.delete(`${URI}${id}`);
            getBlogs();
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    };

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
                <div className='col'>
                    <Link to='/create' className='btn btn-primary mt-2 mb-2'>
                        <i className='fa-solid fa-plus'></i>
                    </Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Title</th>
                                <th>Ingredient</th>
                                <th>Content</th>
                                <th>Image</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs.map((blog) => (
                                <tr key={blog.id}>
                                    <td>{blog.title}</td>
                                    <td>{blog.ingredient}</td>
                                    <td>{blog.content}</td>
                                    <td>
                                        <img src={`http://localhost:8000/${blog.image_url}`} alt="Blog" style={{ maxWidth: "100px", maxHeight: "100px" }}  />
                                    </td>
                                    <td>
                                        <Link to={`/edit/${blog.id}`} className="btn btn-info">
                                            <i className="fa-solid fa-pen-to-square"></i>
                                        </Link>
                                        <button onClick={() => deleteBlog(blog.id)} className='btn btn-danger'>
                                            <i className="fa-solid fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div>
                        <button onClick={prevPage} className="btn btn-primary" disabled={currentPage === 1}>Anterior</button>
                        <span> Página {currentPage} </span>
                        <button onClick={nextPage} className="btn btn-primary">Siguiente</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompShowBlogs;
