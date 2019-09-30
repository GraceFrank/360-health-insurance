const validatePayload = require('../validations/family-validation');
const Subscription = require('../models/subscription');
const Family = require('../models/family');
const response = require('../utils/responses');

class FamilyController {
  static async addFamilyMember(req, res) {
    try {
      const { error } = validatePayload(req.body);
      if (error)
        return response.badRequest(res, { message: error.details[0].message });

      const subscription = await Subscription.findById(req.body.subscriptionId);
      if (!Subscription)
        return response.badRequest(res, { message: 'invalid subscription id' });

      const family = await Family.create(req.body);
      return response.created(res, family);
    } catch (err) {
      return response.internalError(res, err);
    }
  }
}

module.exports = FamilyController;
