const Joi = require('joi');

function validatePlan(payload) {
  const schema = {
    name: Joi.string()
      .required()
      .trim()
      .lowercase()
      .min(3)
      .max(255)
  };

  return Joi.validate(payload, schema);
}

module.exports = validatePlan;
