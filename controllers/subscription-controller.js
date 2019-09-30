const Subscription = require('../models/subscription');
const Plan = require('../models/plans');
const isValidId = require('../services/validateId');

const validatePayload = require('../validations/subscription-validation');
const response = require('../utils/responses');

class SubscriptionController {
  static async createSubscription(req, res) {
    try {
      const { error } = validatePayload(req.body);
      if (error)
        return response.badRequest(res, { message: error.details[0].message });

      //check that planId is valid
      const planId = await Plan.findById(req.body.planId);
      if (!planId)
        return response.notFound(res, {
          message: 'plan with provided Id does not exist'
        });

      const subscription = await Subscription.create(req.body);
      return response.created(res, subscription);
    } catch (err) {
      return response.internalError(res, err);
    }
  }

  static async getUserSubscription(req, res) {
    try {
      if (!isValidId(req.params.userId))
        return response.badRequest(res, { message: 'invalid id' });

      const subscription = await Subscription.findOne({
        userId: req.params.userId
      });
      if (!subscription)
        return response.notFound(res, { message: 'user not subscribed' });
      return response.success(res, subscription);
    } catch (err) {
      console.log(err);
      return response.internalError(res, err);
    }
  }
}

module.exports = SubscriptionController;
