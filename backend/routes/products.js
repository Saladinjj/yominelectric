/**
 * YOMIN ELECTRIC — Products Route
 * GET /api/products
 * GET /api/products/:id
 */

'use strict';

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// GET /api/products — List all (with optional ?category= filter)
router.get('/', productController.getAll);

// GET /api/products/:id — Get single product
router.get('/:id', productController.getById);

module.exports = router;
