const Menu = require('../models/Menu');

// @desc    Dapatkan semua menu
// @route   GET /api/menu
exports.getMenus = async (req, res) => {
  try {
    const menus = await Menu.find();
    res.json(menus);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Tambah menu baru
// @route   POST /api/menu
exports.createMenu = async (req, res) => {
  try {
    const { nama, harga, jenis, gambar } = req.body;
    const newMenu = new Menu({ nama, harga, jenis, gambar });
    await newMenu.save();
    res.status(201).json(newMenu);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};