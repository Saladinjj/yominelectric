/**
 * YOMIN ELECTRIC — Backend Server
 * Node.js + Express API server
 *
 * Run: node backend/server.js
 * API: http://localhost:3000/api
 */

'use strict';

const express = require('express');
const cors = require('cors');
const path = require('path');

const config = require('./config/config');
const productRoutes = require('./routes/products');
const contactRoutes = require('./routes/contact');

const app = express();

// ─── MIDDLEWARE ───
app.use(cors({
  origin: config.corsOrigin,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// ─── SERVE STATIC FILES ───
// Serve frontend from project root
app.use(express.static(path.join(__dirname, '..')));

// ─── API ROUTES ───
app.use('/api/products', productRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/quote', contactRoutes); // quote uses same handler (different subject)

// ─── HEALTH CHECK ───
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    service: 'Yomin Electric API'
  });
});

// ─── CATCH-ALL — Serve index.html for SPA-style routing ───
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// ─── ERROR HANDLER ───
app.use((err, req, res, next) => {
  console.error('[ERROR]', err.message);
  res.status(err.status || 500).json({
    success: false,
    message: config.isDev ? err.message : 'An error occurred. Please try again.'
  });
});

// ─── START ───
app.listen(config.port, () => {
  console.log(`\n🔌 Yomin Electric API running`);
  console.log(`   ➜ http://localhost:${config.port}`);
  console.log(`   ➜ API: http://localhost:${config.port}/api`);
  console.log(`   ➜ Env: ${config.isDev ? 'development' : 'production'}\n`);
});

module.exports = app;
