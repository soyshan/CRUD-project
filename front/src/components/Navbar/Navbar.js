// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserIcon from './UserIcon';
import './Navbar.css';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className='navbar' style={{ backgroundColor: '#FFEEDB' }}>
      <div className='container'>
        <Link to='/' className='logo'>
          <p>Recetas Asiáticas</p>
        </Link>
        <div className='nav-toggle' onClick={toggleNav}>
        <i className='fas fa-bars' data-testid='menu-icon'></i>
        </div>
        <ul className={`nav-links ${isNavOpen ? 'open' : ''}`} data-testid="nav-links">
          <li>
            <Link to='/' className='nav-link'>Inicio</Link>
          </li>
          <li>
            <Link to='/recipes' className='nav-link'>Recetas</Link>
          </li>
          <li>
            <Link to='/contact' className='nav-link'>Contacto</Link>
          </li>
          <li>
          <UserIcon className='user-icon' />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
