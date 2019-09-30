const express = require('express');
const SubscriptionController = require('../controllers/subscription-controller');

const router = express.Router();

router.post('/', SubscriptionController.createSubscription);
router.get('/user/:userId', SubscriptionController.getUserSubscription);

module.exports = router;
