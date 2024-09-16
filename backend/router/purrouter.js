// routers/purrouter.js
const express = require('express');
const { addVendor } = require('../controlers/purcontrol.js');
const router = express.Router();

router.post('/', addVendor);

module.exports = router;