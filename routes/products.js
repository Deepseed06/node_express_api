const express = require('express');
const router = express.Router();


const products = require('./products.json')
router.get('/', (req, res) => {
    res.send(products)
    console.log(products)
});
router.get('/:id', (req, res) => {
    const {id} = req.params
    const singleProducts = products.find((product) => product.id === id)
    res.send(singleProducts)
    
});

module.exports = router;