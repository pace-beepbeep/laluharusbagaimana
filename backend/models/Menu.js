const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
  nama: { type: String, required: true },
  harga: { type: Number, required: true },
  jenis: { type: String, enum: ['makanan', 'minuman'], required: true },
  gambar: { type: String, required: true } // URL atau path gambar
});

module.exports = mongoose.model('Menu', MenuSchema);