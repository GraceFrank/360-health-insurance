const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

function validateHospital(payload) {
  const schema = {
    name: Joi.string()
      .min(2)
      .max(255)
      .trim(),

    lga: Joi.string()
      .valid(
        'YELGA',
        'SILGA',
        'KOLGA',
        'SALGA',
        'BALGA',
        'OLGA',
        'NLGA',
        'ELGA'
      )
      .required(),

    town: Joi.string().required(),

    type: Joi.string()
      .required()
      .valid('public', 'private'),

    address: Joi.string()
      .required()
      .min(5)
  };

  return Joi.validate(payload, schema);
}

module.exports = validateHospital;
