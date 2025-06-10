const express = require('express');
const router = express.Router();
const { testProductos } = require('../controllers/products.controller');

const {
 getAllAsync,
  getProductById
} = require('../controllers/products.controller');


//router.get('/test', testProductos);
//router.get('/products', testProductos);
router.get('/', getAllAsync);
router.get('/:id', getProductById);

module.exports = router;