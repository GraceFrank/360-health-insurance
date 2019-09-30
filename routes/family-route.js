const express = require('express');
const authenticate = require('../middlewares/authentication');
const FamilyController = require('../controllers/family-controller');

const router = express.Router();
router.post('/', authenticate, FamilyController.addFamilyMember);
router.get(
  '/subscription/:subscriptionId',
  authenticate,
  FamilyController.getFamilyMembers
);

module.exports = router;
