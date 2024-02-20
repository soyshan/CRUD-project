import React, { useState } from 'react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    nombre_usuario: '',
    correo_electronico: '',
    contrasena: '',
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
      <input type="text" name="nombre" placeholder="Nombre" value={formData.firstName} onChange={handleChange} />
      <input type="text" name="apellido" placeholder="Apellido" value={formData.lastName} onChange={handleChange} />
      <input type="text" name="nombre_usuario" placeholder="Nombre de usuario" value={formData.username} onChange={handleChange} />
      <input type="email" name="correo_electronico" placeholder="Correo electrónico" value={formData.email} onChange={handleChange} />
      <input type="password" name="contrasena" placeholder="Contraseña" value={formData.password} onChange={handleChange} />
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default RegisterForm;
