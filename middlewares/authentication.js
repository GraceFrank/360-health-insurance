const jwt = require('jsonwebtoken');
const {privateKey} = require('../config/default');
const response = require('../utils/responses')

function authenticate(req, res, next) {
  const token = req.header('x-auth-token');
  if (!token)
    return response.unAuthorized(res, { error: 'access denied no token provided' });

  jwt.verify(token, privateKey, (err, decoded) => {
    if (err)  
    return response.unAuthorized(res, { error: 'access denied no token provided' })

    req.user = decoded;
    next();
    
  });
}

module.exports = authenticate;
