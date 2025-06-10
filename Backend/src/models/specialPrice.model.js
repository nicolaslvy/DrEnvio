const mongoose = require('mongoose');

const precioEspecialSchema = new mongoose.Schema({
  userEmail: { type: String, required: true }, // o userId si fuera un login más formal
  sku: { type: String, required: true },
  precio: { type: Number, required: true }
}, {
  timestamps: true,
  collection: 'preciosEspecialesOrtiz97' // reemplaza esto por el nombre real que elegiste
});

precioEspecialSchema.index({ userEmail: 1, sku: 1 }, { unique: true }); // evita duplicados

module.exports = mongoose.model('PrecioEspecial', precioEspecialSchema);