/**
 * YOMIN ELECTRIC — Product Controller
 * Handles product listing and retrieval from products.json
 */

'use strict';

const fs = require('fs');
const path = require('path');
const config = require('../config/config');

// Cache products in memory
let productCache = null;
let cacheTime = 0;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

function loadProducts() {
  const now = Date.now();
  if (productCache && (now - cacheTime) < CACHE_TTL) {
    return productCache;
  }
  try {
    const raw = fs.readFileSync(config.paths.products, 'utf8');
    productCache = JSON.parse(raw);
    cacheTime = now;
    return productCache;
  } catch (err) {
    console.error('[Products] Failed to load products.json:', err.message);
    return [];
  }
}

const productController = {
  /**
   * GET /api/products
   * Query params: ?category=energy-meter&limit=12&offset=0
   */
  getAll(req, res) {
    try {
      let products = loadProducts();
      const { category, search, limit, offset } = req.query;

      // Filter by category
      if (category && category !== 'all') {
        products = products.filter(p =>
          p.category_id === category ||
          p.category?.toLowerCase().replace(/\s+/g, '-') === category
        );
      }

      // Search by name/description
      if (search) {
        const q = search.toLowerCase();
        products = products.filter(p =>
          p.name?.toLowerCase().includes(q) ||
          p.description?.toLowerCase().includes(q) ||
          p.category?.toLowerCase().includes(q)
        );
      }

      // Pagination
      const total = products.length;
      const off = parseInt(offset) || 0;
      const lim = parseInt(limit) || 50;
      const paginated = products.slice(off, off + lim);

      res.json({
        success: true,
        total,
        count: paginated.length,
        offset: off,
        limit: lim,
        data: paginated
      });
    } catch (err) {
      console.error('[Products] getAll error:', err);
      res.status(500).json({ success: false, message: 'Failed to load products.' });
    }
  },

  /**
   * GET /api/products/:id
   */
  getById(req, res) {
    try {
      const products = loadProducts();
      const product = products.find(p => p.id === req.params.id);

      if (!product) {
        return res.status(404).json({
          success: false,
          message: `Product with id '${req.params.id}' not found.`
        });
      }

      // Include related products in response
      const related = products
        .filter(p => p.id !== product.id && p.category_id === product.category_id)
        .slice(0, 4);

      res.json({
        success: true,
        data: product,
        related
      });
    } catch (err) {
      console.error('[Products] getById error:', err);
      res.status(500).json({ success: false, message: 'Failed to load product.' });
    }
  }
};

module.exports = productController;
