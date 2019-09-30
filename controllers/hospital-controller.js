const Hospital = require('../models/hospitals');
const response = require('../utils/responses');
const validatePayload = require('../validations/hospital-validation');

class HospitalController {
  static async addHospital(req, res) {
    try {
      const { error } = validatePayload(req.body);
      if (error)
        return response.badRequest(res, { message: error.details[0].message });

      const hospital = await Hospital.create(req.body);
      return response.created(res, hospital);
    } catch (err) {
      return response.internalError(res, err);
    }
  }

  static async getAllHospitals(req, res) {
    try {
      const lga = req.query.lga;
      if (lga) {
        const hospitals = await Hospital.find({ lga });
        return response.success(res, hospitals);
      }
      const hospitals = await Hospital.find();
      return response.success(res, hospitals);
    } catch (err) {
      return response.internalError(res, err);
    }
  }
}

module.exports = HospitalController;
