const express = require('express');
const router = express.Router();


const salesProducts = require('./saleProducts.json')
router.get('/', (req, res) => {
    res.send(salesProducts)
    console.log(salesProducts)
});

module.exports = router;