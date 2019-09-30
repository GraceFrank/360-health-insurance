const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

function validateFamily(payload) {
  const schema = {
    subscriptionId: Joi.objectId().required(),

    fullName: Joi.string()
      .required()
      .min(6)
      .max(255)
      .trim(),

    gender: Joi.string()
      .required()
      .valid('male', 'female'),

    relationship: Joi.string()
      .required()
      .valid(
        'mother',
        'father',
        'sibling',
        'child',
        'partner',
        'extended relative'
      )
  };

  return Joi.validate(payload, schema);
}

module.exports = validateFamily;
