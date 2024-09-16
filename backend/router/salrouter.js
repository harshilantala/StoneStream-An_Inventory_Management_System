const express = require('express');
const router = express.Router();
const { addSale, getAllSales } = require('../controlers/salescontrol');

// Route to add a new sale
router.post('/', addSale);

// Route to get all sales
router.get('/', getAllSales);

module.exports = router;