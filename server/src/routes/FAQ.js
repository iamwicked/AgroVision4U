const express = require('express');
const { getAllFAQs } = require('../controllers/FAQ');
const router = express.Router();

router.get('/faqs', getAllFAQs);

module.exports = router;
