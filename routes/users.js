const express = require('express');
const router = express.Router();


const users = require('./user.json')
router.get('/', (req, res) => {
    res.send(users)
    console.log(users)
});

module.exports = router;