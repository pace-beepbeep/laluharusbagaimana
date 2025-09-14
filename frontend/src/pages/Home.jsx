import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Kita akan buat file CSS ini untuk styling

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-hero">
        <h1 className="home-title">Selamat Datang di Cafe Echo</h1>
        <p className="home-subtitle">
          Nikmati secangkir kopi terbaik dan suasana yang nyaman.
        </p>
        <Link to="/menu" className="home-cta-button">
          Lihat Menu
        </Link>
      </header>
    </div>
  );
};

export default Home;