const express = require('express');
const authenticate = require('../middlewares/authentication');
const authorizeAdmin = require('../middlewares/admin-auth');

const router = express.Router();
const UserController = require('../controllers/user-controller');

router.post('/', UserController.signUp);
router.get(
  '/subscription/:id',
  [authenticate, authorizeAdmin],
  UserController.getUsers
);

module.exports = router;
