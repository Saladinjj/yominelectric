/**
 * YOMIN ELECTRIC — Contact Route
 * POST /api/contact  — Contact form submission
 * POST /api/quote    — Quote request
 */

'use strict';

const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// POST /api/contact
router.post('/', contactController.submit);

// POST /api/quote (same controller, different type flag)
router.post('/quote', contactController.quote);

module.exports = router;
