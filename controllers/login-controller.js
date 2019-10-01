const _ = require('lodash');

const validateLoginDetails = require('../validations/login-validation');
const response = require('../utils/responses');
const User = require('../models/user');
const Subscription = require('../models/subscription');
const { isValidPassword } = require('../services/hashPassword');
const Hospital = require('../models/hospitals');
const Plan = require('../models/plans');

class loginController {
  static async login(req, res) {
    try {
      //validate the req payload
      const { error } = validateLoginDetails(req.body);
      if (error)
        return response.badRequest(res, { message: error.details[0].message });

      //check if user with given email exist in db
      let user = await User.findOne({ email: req.body.email });
      if (!user)
        return response.badRequest(res, {
          message: 'invalid email or password'
        });
      //if user exist, validate password
      if (!isValidPassword(req.body.password, user.password))
        return response.badRequest(res, {
          message: 'invalid email or password'
        });

      const token = user.generateToken();

      user = _.pick(user, [
        '_id',
        'name',
        'email',
        'userName',
        'otherName',
        'gender',
        'age',
        'phone',
        'email',
        'lga',
        'town',
        'address'
      ]);
      const subscription = await Subscription.findOne({ userId: user._id });
      const plan = await Plan.findById(subscription.planId);

      const hospital = await Hospital.findOne({ lga: user.lga });

      return response.success(res, {
        'x-auth-token': token,
        message: 'ok',
        data: { user, subscription, hospital, plan }
      });
    } catch (err) {
      console.log(err);
      return response.internalError(res, err);
    }
  }
}

module.exports = loginController;
