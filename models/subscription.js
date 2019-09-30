const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: true
  },

  planId: {
    type: mongoose.Types.ObjectId,
    required: true
  },

  paymentType: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true,
    min: 1500
  },

  primaryHospital: {
    type: mongoose.Types.ObjectId,
    type: String
  }
});

const Subscription = mongoose.model('subscriptions', subscriptionSchema);

module.exports = Subscription;
