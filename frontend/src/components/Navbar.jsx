import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Ganti Link menjadi NavLink
import AuthContext from '../context/AuthContext.jsx';
import './Navbar.css';

const Navbar = () => {
  const { user, logoutAction } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutAction();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/">Cafe Echo</NavLink>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/menu" className={({ isActive }) => isActive ? 'active' : ''}>Menu</NavLink>
        </li>
      </ul>
      <div className="navbar-auth">
        {user ? (
          <>
            <span className="navbar-user">Halo, {user.nama || 'Pengguna'}</span>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </>
        ) : (
          <NavLink to="/login" className="login-button">
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;