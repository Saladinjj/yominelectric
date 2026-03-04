/**
 * YOMIN ELECTRIC — Contact Controller
 * Handles contact form submissions and quote requests
 */

'use strict';

const config = require('../config/config');

// Basic input sanitization
function sanitize(str = '') {
  return String(str).trim().replace(/<[^>]*>/g, '').substring(0, 2000);
}

// Validation
function validateContactData(data) {
  const errors = {};

  if (!data.name || data.name.length < 2) errors.name = 'Name must be at least 2 characters.';
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'A valid email address is required.';
  if (!data.country) errors.country = 'Country is required.';
  if (!data.message || data.message.length < 10) errors.message = 'Message must be at least 10 characters.';

  return errors;
}

// In-memory submission log (for development)
const submissions = [];

// Optional: send email via nodemailer (only if configured)
async function sendEmail(data, type = 'contact') {
  if (!config.email.user || !config.email.pass) {
    // Email not configured — log to console in dev
    if (config.isDev) {
      console.log('\n📧 [Contact Submission — not emailed, no SMTP config]');
      console.log('  Type:    ', type);
      console.log('  From:    ', data.name, '<' + data.email + '>');
      console.log('  Company: ', data.company || '—');
      console.log('  Country: ', data.country);
      console.log('  Subject: ', data.subject || '—');
      console.log('  Message: ', data.message.substring(0, 200));
      console.log();
    }
    return { simulated: true };
  }

  // nodemailer is optional — install with: npm install nodemailer
  try {
    const nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransporter({
      host: config.email.host,
      port: config.email.port,
      secure: config.email.secure,
      auth: { user: config.email.user, pass: config.email.pass }
    });

    const subject = type === 'quote'
      ? `[Quote Request] ${data.subject || data.name} — ${data.country}`
      : `[Contact Form] ${data.subject || data.name} — ${data.country}`;

    await transporter.sendMail({
      from: `"Yomin Website" <${config.email.from}>`,
      to: config.email.to,
      replyTo: `"${data.name}" <${data.email}>`,
      subject,
      text: `
Name: ${data.name}
Email: ${data.email}
Company: ${data.company || '—'}
Country: ${data.country}
Subject: ${data.subject || '—'}
Type: ${type}

Message:
${data.message}

---
Submitted: ${new Date().toISOString()}
IP: ${data._ip || 'unknown'}
      `.trim(),
      html: `
        <h2 style="font-family:sans-serif;color:#333;">${type === 'quote' ? 'Quote Request' : 'Contact Form Submission'}</h2>
        <table style="font-family:sans-serif;border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;color:#666;border-bottom:1px solid #eee;width:120px;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;"><strong>${data.name}</strong></td></tr>
          <tr><td style="padding:8px;color:#666;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
          <tr><td style="padding:8px;color:#666;border-bottom:1px solid #eee;">Company</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.company || '—'}</td></tr>
          <tr><td style="padding:8px;color:#666;border-bottom:1px solid #eee;">Country</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.country}</td></tr>
          <tr><td style="padding:8px;color:#666;border-bottom:1px solid #eee;">Subject</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.subject || '—'}</td></tr>
        </table>
        <div style="margin-top:20px;padding:16px;background:#f8f8f8;border-radius:6px;font-family:sans-serif;">
          <strong>Message:</strong>
          <p style="margin-top:8px;white-space:pre-wrap;">${data.message}</p>
        </div>
        <p style="font-family:sans-serif;color:#999;font-size:12px;margin-top:20px;">Submitted: ${new Date().toISOString()}</p>
      `
    });

    return { sent: true };
  } catch (err) {
    console.error('[Email] Send failed:', err.message);
    throw err;
  }
}

const contactController = {
  /**
   * POST /api/contact
   */
  async submit(req, res) {
    try {
      const data = {
        name:    sanitize(req.body.name),
        email:   sanitize(req.body.email),
        company: sanitize(req.body.company),
        country: sanitize(req.body.country),
        subject: sanitize(req.body.subject),
        message: sanitize(req.body.message),
        _ip:     req.ip,
        _at:     new Date().toISOString(),
        _type:   'contact'
      };

      // Validate
      const errors = validateContactData(data);
      if (Object.keys(errors).length) {
        return res.status(422).json({ success: false, errors });
      }

      // Store submission
      submissions.push(data);
      if (submissions.length > 500) submissions.shift(); // Keep last 500

      // Send email (non-blocking)
      sendEmail(data, 'contact').catch(console.error);

      res.json({
        success: true,
        message: 'Your message has been received. We will respond within 24 hours.',
        id: `msg_${Date.now()}`
      });

    } catch (err) {
      console.error('[Contact] submit error:', err);
      res.status(500).json({ success: false, message: 'Failed to send message. Please try again.' });
    }
  },

  /**
   * POST /api/quote
   */
  async quote(req, res) {
    try {
      const data = {
        name:     sanitize(req.body.name),
        email:    sanitize(req.body.email),
        company:  sanitize(req.body.company),
        country:  sanitize(req.body.country),
        product:  sanitize(req.body.product),
        quantity: sanitize(req.body.quantity),
        message:  sanitize(req.body.message || req.body.requirements || ''),
        _ip:      req.ip,
        _at:      new Date().toISOString(),
        _type:    'quote'
      };

      // Use message field if empty
      if (!data.message) data.message = `Product: ${data.product}\nQuantity: ${data.quantity}`;

      const errors = validateContactData({ ...data, subject: 'quote', message: data.message });
      if (Object.keys(errors).length) {
        return res.status(422).json({ success: false, errors });
      }

      submissions.push(data);
      sendEmail(data, 'quote').catch(console.error);

      res.json({
        success: true,
        message: 'Quote request received. Our sales team will respond within 1 business day.',
        id: `quote_${Date.now()}`
      });

    } catch (err) {
      console.error('[Contact] quote error:', err);
      res.status(500).json({ success: false, message: 'Failed to submit quote request.' });
    }
  }
};

// Dev endpoint: view submissions
if (process.env.NODE_ENV !== 'production') {
  contactController.listSubmissions = (req, res) => {
    res.json({ success: true, count: submissions.length, data: submissions });
  };
}

module.exports = contactController;
