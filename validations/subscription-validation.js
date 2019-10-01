const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

function validateSubscription(payload) {
  const schema = {
    userId: Joi.objectId().required(),

    planId: Joi.string(),

    paymentType: Joi.string().valid('monthly', 'quaterly', 'annually'),

    price: Joi.number()
      .required()
      .min(1500)
  };

  return Joi.validate(payload, schema);
}

module.exports = validateSubscription;
