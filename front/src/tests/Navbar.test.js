// Navbar.test.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Importa BrowserRouter como Router
import { render, fireEvent, screen } from '@testing-library/react';
import Navbar from '../components/Navbar/Navbar.js';

describe('Navbar component', () => {

  it('should toggle nav menu when menu icon is clicked', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    const menuIcon = screen.getByTestId('menu-icon');
    const navLinks = screen.getByTestId('nav-links');

    expect(navLinks).not.toHaveClass('open');

    fireEvent.click(menuIcon);

    expect(navLinks).toHaveClass('open');

    fireEvent.click(menuIcon);

    expect(navLinks).not.toHaveClass('open');
  });
});

//para testear que funciona bien el menu desplegable.