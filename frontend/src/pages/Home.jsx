// frontend/src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-hero">
        <div className="hero-content">
          <h1 className="home-title">Kopi Pilihan, Momen Sempurna</h1>
          <p className="home-subtitle">
            Rasakan kehangatan di setiap cangkir. Cafe Echo menyajikan biji kopi terbaik yang diracik khusus untuk Anda.
          </p>
          <Link to="/menu" className="home-cta-button">
            Lihat Menu
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Home;