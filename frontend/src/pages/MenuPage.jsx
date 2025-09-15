import React, { useState, useEffect } from 'react';
import './MenuPage.css';
import MenuCard from '../components/MenuCard';
// Pastikan file ini sudah ada dan mengekspor fungsi fetchMenus
import { fetchMenus } from '../services/menuService'; 

const MenuPage = () => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMenus = async () => {
      try {
        const data = await fetchMenus();
        setMenus(data);
      } catch (error) {
        console.error("Gagal mengambil data menu:", error);
      } finally {
        setLoading(false);
      }
    };

    getMenus();
  }, []);

  if (loading) {
    return <div>Loading menu...</div>;
  }

  return (
    <div className="menu-container">
      <h1>DAFTAR MENU</h1>
      <div className="menu-grid">
        {menus.length > 0 ? (
          menus.map((menu) => (
            <MenuCard key={menu._id} menu={menu} />
          ))
        ) : (
          <p>Tidak ada menu yang tersedia saat ini.</p>
        )}
      </div>
    </div>
  );
};

export default MenuPage;