const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
/**
 * Method to validate request payload for creating user
 * @param {object} userObject object to be validated
 * @return {object} validated object or error object if validation fails
 */
function validateUser(userObject) {
  const schema = {
    firstName: Joi.string()
      .min(2)
      .max(255)
      .required()
      .trim(),

    lastName: Joi.string()
      .min(2)
      .max(255)
      .required()
      .trim(),

      otherName: Joi.string()
      .min(2)
      .max(255)
      .trim(),

    email: Joi.string()
      .email()
      .required()
      .trim(),

      phone: Joi.string().regex(/[0-9]/).min(11).max(11)
      .required()
      .trim(),

    password: Joi.string()
      .required()
      .min(8)
      .max(255),

      lga: Joi.string().valid('YELGA', 'SILGA', 'KOLGA', 'SALGA', 'BALGA', 'OLGA', 'NLGA', 'ELGA').required(),

      town: Joi.string().required(),

      age: Joi.number().required().min(0.1).max(150),

      gender: Joi.string().required().valid('male', 'female'),

      address: Joi.string().required().min(5),
  };

  return Joi.validate(userObject, schema);
}

module.exports = validateUser;
