const express = require('express');
const authenticate = require('../middlewares/authentication');
const authorizeAdmin = require('../middlewares/admin-auth');
const planController = require('../controllers/plan-controller');

const router = express.Router();

router.post('/', [authenticate, authorizeAdmin], planController.createPlan);

module.exports = router;
