const express = require('express');
const router = express.Router();


const notifications = require('./notifications.json')
router.get('/', (req, res) => {
    res.send(notifications)
    console.log(notifications)
});

module.exports = router;