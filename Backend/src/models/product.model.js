const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: String,
  stock: Number,
  description: String,
  brand: String,
  sku: String,
  tags: [String]
}, {
  timestamps: true,
  collection: 'productos'
});

module.exports = mongoose.model('Producto', productoSchema);