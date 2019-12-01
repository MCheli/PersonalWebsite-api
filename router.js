const express = require('express');
var router = express.Router();

router.post('/contact', (req, res) => {
    res.json({"message":"hello world!"})
})

// set URL for API group routes
module.exports = router;
