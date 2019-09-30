const mongoose = require('mongoose');
const response = require('../utils/responses');

module.exports = function isValidId(id) {
  //checking if provided id is a valid mongoose id
  const validId = mongoose.Types.ObjectId.isValid(id);

  //deny access if id is invalid
  if (!validId) return false;
  return true;
};
