const mongoose = require('mongoose');
const Producto = require('../models/product.model');


// GET todos
const getAllAsync = async (req, res) => {
  try {
    const productos = await Producto.find({});
    res.json(productos);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
};

// GET uno
const getProductById = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(producto);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener producto' });
  }
};


const testProducts = async (req, res) => {
  try {
    const productos = await mongoose.connection.db.collection('productos').find({}).limit(5).toArray();
    res.json(productos);
  } catch (err) {
    console.error('Error al obtener productos:', err);
    res.status(500).json({ error: 'Error al obtener productos' });
  }
};

module.exports = {
  testProducts,
  getAllAsync,
  getProductById
};