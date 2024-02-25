import React from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../../assets/user-icon-vector.svg';

const UserIcon = () => {
  return (
    <Link to="/showblogs" className="user-icon">
      <img src={userIcon} alt='Cuenta' /> 
    </Link>
  );
};

export default UserIcon;
