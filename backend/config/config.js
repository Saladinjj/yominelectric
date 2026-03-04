/**
 * YOMIN ELECTRIC — Config
 * Environment configuration for backend server
 */

'use strict';

require('dotenv').config();

const config = {
  // Server
  port: parseInt(process.env.PORT) || 3000,
  isDev: process.env.NODE_ENV !== 'production',

  // CORS
  corsOrigin: process.env.CORS_ORIGIN || '*',

  // Email (for contact form forwarding)
  email: {
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT) || 587,
    secure: process.env.EMAIL_SECURE === 'true',
    user: process.env.EMAIL_USER || '',
    pass: process.env.EMAIL_PASS || '',
    to: process.env.EMAIL_TO || 'sales@yominelectric.com',
    from: process.env.EMAIL_FROM || 'noreply@yominelectric.com'
  },

  // Rate limiting
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100                    // requests per window
  },

  // Data paths
  paths: {
    products: require('path').join(__dirname, '../../data/products.json')
  }
};

module.exports = config;
