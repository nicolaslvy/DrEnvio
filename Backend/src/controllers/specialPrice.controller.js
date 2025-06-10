const PrecioEspecial = require('../models/specialPrice.model');

// GET todos los precios especiales
const getAllAsync = async (req, res) => {
    try {
        const data = await PrecioEspecial.find({});
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener precios especiales' });
    }
};

// GET por usuario (query param: userEmail)
const getSpecialPriceById = async (req, res) => {
    try {
        const precios = await PrecioEspecial.findOne({ userEmail: req.query.userEmail, sku: req.query.sku });
        res.json(precios);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener precios del usuario' });
    }
};

// POST nuevo precio especial
const createSpecialPrice = async (req, res) => {
    try {
        const nuevo = new PrecioEspecial(req.body);
        const guardado = await nuevo.save();
        res.status(201).json(guardado);
    } catch (err) {
        res.status(400).json({ error: 'Error al crear precio especial', detalle: err.message });
    }
};

// PUT actualizar un precio especial
const updateSpecialPrice = async (req, res) => {
    try {
        const actualizado = await PrecioEspecial.findOneAndUpdate(
            { userEmail: req.body.userEmail, sku: req.body.sku },
            { precio: req.body.precio },
            { new: true, upsert: true } // crea si no existe
        );
        res.json(actualizado);
    } catch (err) {
        res.status(400).json({ error: 'Error al actualizar precio especial' });
    }
};

// DELETE
const deleteSpecialPrice = async (req, res) => {
    try {
        const eliminado = await PrecioEspecial.findByIdAndDelete(req.params.id);
        if (!eliminado) return res.status(404).json({ error: 'No encontrado' });
        res.json({ mensaje: 'Precio especial eliminado' });
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar' });
    }
};

module.exports = {
    getAllAsync,
    getSpecialPriceById,
    updateSpecialPrice,
    createSpecialPrice,
    deleteSpecialPrice
};