const express = require('express');
const router = express.Router();


const salesProducts = require('./saleProducts.json')
router.get('/', (req, res) => {
    res.send(salesProducts)
    console.log(salesProducts)
});

router.get('/:id', (req, res) => {
    const {id} = req.params
    const singleProducts = salesProducts.find((product) => product.id === id)
    res.send(singleProducts)
    
});

module.exports = router;