import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext.jsx';
import './Navbar.css'; // File styling yang akan kita buat

const Navbar = () => {
  const { user, logoutAction } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutAction();
    navigate('/login'); // Arahkan ke halaman login setelah logout
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Cafe Echo</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
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
          <Link to="/login" className="login-button">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;