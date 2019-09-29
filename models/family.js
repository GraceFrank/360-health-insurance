const mongoose = require('mongoose');

const familySchema = new mongoose.Schema({
  subscriptionId:  {
    type: mongoose.Types.ObjectId,
    required: true
  },

  fullName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
    lowercase: true,
    trim: true
  },

  gender: {

  },

  relationship: {
    type: String,
    required: true,
    enum: ['mother', 'father', 'sibling', 'child', 'partner', 'extended relative']
  }
})

module.exports = mongoose.model('families', familySchema);