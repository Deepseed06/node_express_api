const express = require('express');
const router = express.Router();


const users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 25
    }
]
router.get('/', (req, res) => {
    res.send(users)
    console.log(users)
});

module.exports = router;