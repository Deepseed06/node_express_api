const express = require('express');
const router = express.Router();


const products = require('./products.json')
router.get('/', (req, res) => {
    res.send(products)
    console.log(salesProducts)
});

module.exports = router;