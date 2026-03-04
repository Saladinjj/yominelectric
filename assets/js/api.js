/* ═══════════════════════════════════════════════════
   YOMIN ELECTRIC — API.JS
   Centralized API interaction layer
   ═══════════════════════════════════════════════════ */

'use strict';

const API = {
  base: '/api',

  async get(endpoint) {
    const res = await fetch(`${this.base}${endpoint}`, {
      headers: { 'Accept': 'application/json' }
    });
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return res.json();
  },

  async post(endpoint, data) {
    const res = await fetch(`${this.base}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.message || `API error: ${res.status}`);
    }
    return res.json();
  },

  // Product API calls
  products: {
    getAll(params = {}) {
      const q = new URLSearchParams(params).toString();
      return API.get(`/products${q ? '?' + q : ''}`);
    },
    getById(id) {
      return API.get(`/products/${id}`);
    }
  },

  // Contact API calls
  contact: {
    async submit(formData) {
      try {
        return await API.post('/contact', formData);
      } catch (err) {
        // Fallback: open mailto link if backend is unavailable
        console.warn('API unavailable, falling back to mailto:', err.message);
        const subject = encodeURIComponent(formData.subject || 'Contact Form Submission');
        const body = encodeURIComponent(
          `Name: ${formData.name}\n` +
          `Email: ${formData.email}\n` +
          `Company: ${formData.company || '—'}\n` +
          `Country: ${formData.country}\n` +
          `Subject: ${formData.subject || '—'}\n\n` +
          `Message:\n${formData.message}`
        );
        window.open(`mailto:sales@yominelectric.com?subject=${subject}&body=${body}`, '_self');
        return { success: true, fallback: 'mailto' };
      }
    }
  },

  // Quote API calls
  quote: {
    request(quoteData) {
      return API.post('/quote', quoteData);
    }
  }
};

// Fallback: load from local products.json if backend not available
async function loadProductsLocal() {
  try {
    const res = await fetch('/data/products.json');
    if (!res.ok) throw new Error('Local data not found');
    return res.json();
  } catch (err) {
    console.warn('Could not load products.json:', err);
    return [];
  }
}

window.API = API;
window.loadProductsLocal = loadProductsLocal;
