const Subscription = require('../models/subscription');
const Plan = require('../models/plans');

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
}

module.exports = SubscriptionController;
