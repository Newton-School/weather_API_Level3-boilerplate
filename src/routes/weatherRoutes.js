const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

// Level 3: Get City Weather Data by ZipCode
router.get('/city/zipcode/:code', async (req, res) => {
   // TODO: Implement this function
});

module.exports = router;
