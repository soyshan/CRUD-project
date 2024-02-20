// import logo from './logo.svg';
import './App.css';
import CompShowBlogs from './components/blog/ShowBlog';
import CompCreateBlog from './components/blog/CreateBlog';
import CompEditBlog from './components/blog/EditBlog';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import CompShowBlogsAsCards from './components/RecipesCard/CompShowBlogAsCards';
import BlogDetailPage from './components/BlogUnico/BlogDetailPage';
import ContactForm from './components/ContactForm/ContactForm';
import  Home from './components/Home/Home';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path ='/' element = {<Home/>}/>
          <Route path ='/showblogs' element = {<CompShowBlogs/>}/>
          <Route path ='/create' element ={<CompCreateBlog/>}/>
          <Route path ='/edit/:id' element ={<CompEditBlog/>}/>
          <Route path ='/recipes' element ={<CompShowBlogsAsCards/>}/>
          <Route path='/blogs/:id' element={<BlogDetailPage/>} /> 
          <Route path ='/contact' element ={<ContactForm/>}/>
          
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
