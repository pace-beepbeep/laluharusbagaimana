import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// BENAR
import AuthContext from "../context/AuthContext.jsx";
import { login } from '../services/authService.js';
import './LoginPage.css';

const LoginPage = () => {
  // ... (semua kode di dalam komponen Anda tetap sama)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { loginAction } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const { token } = await login({ email, password });
      loginAction(token);
      navigate('/menu');
    } catch (err) {
      setError('Login gagal. Periksa kembali email dan password Anda.');
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      {/* ... (semua JSX Anda tetap sama) */}
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login Kasir</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Masuk</button>
      </form>
    </div>
  );
};

export default LoginPage; // <-- PASTIKAN BARIS INI ADA