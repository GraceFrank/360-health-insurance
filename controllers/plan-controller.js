const Plan = require('../models/plans');

const validatePayload = require('../validations/plan-validation');
const response = require('../utils/responses');

class PlanController {
  static async createPlan(req, res) {
    try {
      const { error } = validatePayload(req.body);
      if (error)
        return response.badRequest(res, { message: error.details[0].message });

      //check if plan with name already exist
      const existingPlan = await Plan.findOne({ name: req.body.name });
      if (existingPlan)
        return response.alreadyExists(res, {
          message: 'plan name already in use'
        });

      const plan = await Plan.create(req.body);
      return response.created(res, plan);
    } catch (err) {
      return response.internalError(res, err);
    }
  }
}

module.exports = PlanController;
