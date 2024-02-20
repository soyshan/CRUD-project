import React from 'react';
import './footerStyle.css'
const Footer = () => {
  return (
    <footer>
      <div className="footer-column">
        <p>Contacto</p>
        <p>Recetas</p>
      </div>
      <div className="footer-column">
        <p>Política de Privacidad</p>
        <p>Política de Cookies</p>
        <p>Aviso Legal</p>
      </div>
      <div className="footer-column">
        <h3>Suscríbete</h3>
        <p><strong>Gracias por visitar la web, para más recetas suscríbete al boletín informativo</strong></p>
        <form>
          <input type="email" placeholder="Tu correo electrónico" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
