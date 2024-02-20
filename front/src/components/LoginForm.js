import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar los datos del formulario al servidor
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="correo_electronico" placeholder="Correo electrónico" value={formData.email} onChange={handleChange} />
      <input type="password" name="contrasena" placeholder="Contraseña" value={formData.password} onChange={handleChange} />
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export default LoginForm;
