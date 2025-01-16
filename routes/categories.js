const express = require('express');
const router = express.Router();


const categories = require('./categories.json')
router.get('/', (req, res) => {
    res.send(categories)
    console.log(categories)
});

module.exports = router;