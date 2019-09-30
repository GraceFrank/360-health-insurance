const express = require('express');
const authenticate = require('../middlewares/authentication');
const FamilyController = require('../controllers/family-controller');

const router = express.Router();
router.post('/', authenticate, FamilyController.addFamilyMember);

module.exports = router;
