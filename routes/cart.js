const express = require('express');
const router = express.Router();


const cart = require('./cart.json')
router.get('/', (req, res) => {
    res.send(cart)
    console.log(cart)
});

module.exports = router;