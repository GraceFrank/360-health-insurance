const Joi = require('joi');

function validateLogin(loginPayload) {
  const schema = {
    email: Joi.string()
    .email()
    .required()
    .trim(),

  password: Joi.string()
    .required()
    .min(8)
    .max(255),
  }

  return Joi.validate(loginPayload, schema);

}


module.exports = validateLogin;