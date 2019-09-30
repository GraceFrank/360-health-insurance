const express = require('express');
const authenticate = require('../middlewares/authentication');
const authorizeAdmin = require('../middlewares/admin-auth');
const hospitalController = require('../controllers/hospital-controller');

const router = express.Router();

router.post(
  '/',
  [authenticate, authorizeAdmin],
  hospitalController.addHospital
);
router.get('/', hospitalController.getAllHospitals);

module.exports = router;
