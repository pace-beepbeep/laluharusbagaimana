const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
  // Sesuaikan nama field dengan yang ada di database
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true }, // Ubah dari 'jenis'
  image: { type: String, required: true },   // Ubah dari 'gambar'
  stock: { type: Number, required: true }    // Tambahkan field stock
});

module.exports = mongoose.model('Menu', MenuSchema);