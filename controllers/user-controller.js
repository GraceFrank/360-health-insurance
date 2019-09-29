const validatePayload = require('../validations/signup-validation');
const response = require('../utils/responses');
const User = require('../models/user');
const _ = require('lodash');

class UserController {
  static async post(req, res) {
    try {
      //validate that the req.body payload
      const { error } = validatePayload(req.body);
      if (error)
        return response.badRequest(res, { message: error.details[0].message });

      //check that user with email provided does not exist
      const existingUser = await User.findOne({ email: req.body.email });
      if (existingUser)
        return response.badRequest(res, { message: 'email already in use' });

      const user = await User.create(req.body);
      if (user)
        return response.created(
          res,
          _.pick(user, ['_id', 'firstName', 'lastName', 'otherName', 'gender', 'age', 'phone', 'email', 'lga', 'town', 'address'])
        );
    } catch (err) {
      return response.internalError(res, err);
    }
  }
}

module.exports = UserController;
