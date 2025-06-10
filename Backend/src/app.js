const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const productsRoutes = require('./routes/products.routes');
const specialPricesRoutes = require('./routes/specialPrice.routes');

const app = express();

// Conectar a MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/productos', productsRoutes);
app.use('/api/precios', specialPricesRoutes);

module.exports = app;