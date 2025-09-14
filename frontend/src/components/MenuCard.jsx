import React from 'react';
import './MenuCard.css'; // File styling yang akan kita buat

// Props 'menu' akan berisi objek menu dari API: { gambar, nama, harga }
const MenuCard = ({ menu }) => {
  // Format harga menjadi format Rupiah (misal: Rp 15.000)
  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(menu.harga);

  return (
    <div className="menu-card">
      <img src={menu.gambar} alt={menu.nama} className="card-img" />
      <div className="card-body">
        <h3 className="card-title">{menu.nama}</h3>
        <p className="card-price">{formattedPrice}</p>
        <button className="card-button">Tambah ke Pesanan</button>
      </div>
    </div>
  );
};

export default MenuCard;