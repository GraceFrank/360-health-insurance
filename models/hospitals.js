const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 255
  },

  lga: {
    type: String,
    required: true,
    enum: ['YELGA', 'SILGA', 'KOLGA', 'SALGA', 'BALGA', 'OLGA', 'NLGA', 'ELGA']
  },

  town: {
    type: String,
    required: true
  },

  type: {
    type: String,
    required: true,
    enum: ['public', 'private']
  },

  address: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('hospitals', hospitalSchema);
