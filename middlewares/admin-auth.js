const response = require('../utils/responses')
//this middleware is for authorizing admins
async function authAdmin(req, res, next) {
 
  //check if the the person is and admin and grants access else deny access
  if (!req.user.isAdmin)
    return response.unAuthorized(res, { error: 'forbidden, unauthorized access' });
  next();
}

module.exports = authAdmin;
