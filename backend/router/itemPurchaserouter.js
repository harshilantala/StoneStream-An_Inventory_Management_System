const express = require('express');
const router = express.Router();
const { getAllItemPurchases, addItemPurchase } = require('../controlers/ItemPurchaseController');


router.get('/', getAllItemPurchases);

router.post('/', addItemPurchase);

module.exports = router;