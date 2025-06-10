const express = require('express');
const router = express.Router();
const {
  getAllAsync,
    getSpecialPriceById,
    createSpecialPrice,
    updateSpecialPrice,
    deleteSpecialPrice
} = require('../controllers/specialPrice.controller');

router.get('/', getAllAsync); // opcional
router.get('/buscar', getSpecialPriceById); // /api/precios-especiales/usuario?userEmail=test@example.com
router.post('/', createSpecialPrice);
router.put('/', updateSpecialPrice); // requiere { userEmail, sku, precio }
router.delete('/:id', deleteSpecialPrice);

module.exports = router;