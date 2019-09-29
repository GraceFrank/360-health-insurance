const mongoose = require('mongoose');
const { hashPassword } = require('../utils/hashPassword');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
    lowercase: true,
    trim: true
  },

  lastName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
    lowercase: true,
    trim: true
  },

  otherName:{
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
    lowercase: true,
    trim: true
  },

  phone: {
    type: String,
    required: true,
    minlength: 11,
    maxlength: 11,
    trim: true
  },

  email: {
    type: String,
    trim: true,
    minlength: 5,
    maxlength: 255
  },

  password: {
    type: String,
    minlength: 8,
    maxlength: 255
  },

  lga:{
    type: String,
    required: true,
    enum: ['YELGA', 'SILGA', 'KOLGA', 'SALGA', 'BALGA', 'OLGA', 'NLGA', 'ELGA']
  },

  town: {
    type: String,
    required: true
  },
  age:{
    type: Number,
    required: true,
    max: 150,
    min: 0.1
  },
  gender:{
    type: String,
    required: true,
    enum: ['male', 'female']
  },

  address:{
    type: String,
    required: true
  },

  subscriptionId: {
    type : mongoose.Types.ObjectId,
    required: true
  }
});

//hash password before saving
UserSchema.pre('save', function() {
  if (!this.isModified('password')) {
    return next();
  }
  this.password = hashPassword(this.password);
  next();
});

const User = mongoose.model('users', UserSchema);

module.exports = User;
