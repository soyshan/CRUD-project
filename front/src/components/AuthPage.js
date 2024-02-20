import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <h2>{isLogin ? 'Iniciar sesión' : 'Registrarse'}</h2>
      {isLogin ? <LoginForm /> : <RegisterForm />}
      <p>
        {isLogin ? '¿No tienes una cuenta? ' : '¿Ya tienes una cuenta? '}
        <button onClick={toggleForm}>{isLogin ? 'Regístrate' : 'Inicia sesión'}</button>
      </p>
    </div>
  );
};

export default AuthPage;
