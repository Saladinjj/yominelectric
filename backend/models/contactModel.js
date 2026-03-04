/**
 * YOMIN ELECTRIC — Contact Model
 * Submission data shape
 */

'use strict';

const ContactModel = {
  fields: {
    name:    { required: true, maxLen: 100 },
    email:   { required: true, maxLen: 200 },
    company: { required: false, maxLen: 200 },
    country: { required: true, maxLen: 100 },
    subject: { required: false, maxLen: 200 },
    message: { required: true, maxLen: 5000 }
  }
};

module.exports = ContactModel;
