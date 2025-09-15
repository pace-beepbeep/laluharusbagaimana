import React from 'react';
import './MenuCard.css';

const MenuCard = ({ menu }) => {
  // Gunakan menu.price untuk format harga
  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(menu.price);

  return (
    <div className="menu-card">
      {/* Gunakan menu.image dan menu.name */}
      <img src={menu.image} alt={menu.name} className="card-img" />
      <div className="card-body">
        <h3 className="card-title">{menu.name}</h3>
        <p className="card-price">{formattedPrice}</p>
        <button className="card-button">Tambah ke Pesanan</button>
      </div>
    </div>
  );
};

export default MenuCard;