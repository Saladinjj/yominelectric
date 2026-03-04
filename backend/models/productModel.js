/**
 * YOMIN ELECTRIC — Product Model
 * Data shape definition and validation helpers
 */

'use strict';

const ProductModel = {
  schema: {
    id:                 { type: 'string', required: true },
    name:               { type: 'string', required: true },
    category:           { type: 'string', required: true },
    category_id:        { type: 'string', required: true },
    voltage:            { type: 'string' },
    current:            { type: 'string' },
    accuracy:           { type: 'string' },
    frequency:          { type: 'string' },
    starting_current:   { type: 'string' },
    power_consumption:  { type: 'string' },
    display:            { type: 'string' },
    certification:      { type: 'string' },
    operating_temp:     { type: 'string' },
    description:        { type: 'string' },
    applications:       { type: 'array' },
    image:              { type: 'string', nullable: true },
    images:             { type: 'array' },
    datasheet:          { type: 'string', nullable: true }
  },

  validate(product) {
    const errors = [];
    for (const [key, rule] of Object.entries(this.schema)) {
      if (rule.required && !product[key]) {
        errors.push(`Missing required field: ${key}`);
      }
    }
    return errors;
  },

  sanitize(product) {
    return {
      id:               product.id || '',
      name:             product.name || '',
      category:         product.category || '',
      category_id:      product.category_id || '',
      voltage:          product.voltage || null,
      current:          product.current || null,
      accuracy:         product.accuracy || null,
      frequency:        product.frequency || null,
      starting_current: product.starting_current || null,
      power_consumption:product.power_consumption || null,
      display:          product.display || null,
      certification:    product.certification || null,
      operating_temp:   product.operating_temp || null,
      description:      product.description || '',
      applications:     Array.isArray(product.applications) ? product.applications : [],
      image:            product.image || null,
      images:           Array.isArray(product.images) ? product.images : [],
      datasheet:        product.datasheet || null
    };
  }
};

module.exports = ProductModel;
