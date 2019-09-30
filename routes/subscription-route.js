const express = require('express');
const SubscriptionController = require('../controllers/subscription-controller');

const router = express.Router();

router.post('/', SubscriptionController.createSubscription);

module.exports = router;
