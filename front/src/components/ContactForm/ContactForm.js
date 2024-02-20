import React, { useState } from 'react';
import './ContactFormStyle.css'


function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className='confirmation'>
      {submitted ? (
        <div>
        <br/>
        <br/>
        <br/>
          <h2>¡Gracias por tu mensaje!</h2>
          <p>Nos pondremos en contacto contigo pronto.</p>
          <br/>
          <br/>
          <br/>
        </div>
      ) : (
        <form className="container-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div >
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>
          </div>
          <div>
            <button className="button-form" type="submit">Enviar</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default ContactForm;
