import React from 'react';
import Pollo from '../../assets/Pollo.png';
import matcha from '../../assets/matcha.png'
import rollos from '../../assets/rollos.png'
import './CarouselStyle.css'
import { Link } from 'react-router-dom';


const Carousel = () => {
  return (
    <div id="food-carousel" className="carousel slide" data-bs-ride="carousel"  data-bs-interval="3000">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#food-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#food-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#food-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
        <Link to="http://localhost:3000/blogs/38">
          <img src= {matcha}className="d-block w-100" alt="First slide" style={{ maxHeight: '500px', objectFit: 'cover' }} />
          <div className="carousel-caption d-none d-md-block">
          <h4 className="caption-style">Helado de Té Matcha con Azuki.<br/> Delicia Japonesa en Casa</h4>
      
          </div>
          </Link>
        </div>

        <div className="carousel-item">
        <Link to="http://localhost:3000/blogs/36">
          <img src={Pollo} className="d-block w-100" alt="Second slide" style={{ maxHeight: '500px', objectFit: 'cover' }} />
          <div className="carousel-caption d-none d-md-block">
          <h4 className="caption-style">Pollo frito al estilo asiático <br/> Ideal para acompañar con arroz</h4>
          </div>
          </Link>
        </div>
        <div className="carousel-item">
        <Link to="http://localhost:3000/blogs/28">
          <img src={rollos} className="d-block w-100" alt="Third slide" style={{ maxHeight: '500px', objectFit: 'cover' }} />
          <div className="carousel-caption d-none d-md-block">
          <h4 className="caption-style">Descubre el Sabor Único del Gimbap <br/> Un plato tradicional de Corea</h4>
          </div>
          </Link>
        </div>
        
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#food-carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#food-carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

    </div>
    
  );
  
}

export default Carousel;

