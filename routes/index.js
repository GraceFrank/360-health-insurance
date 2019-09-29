const helmet = require('helmet');
const compression = require('compression');
const bodyParser = require('body-parser');
const users = require('./users-route');
const login = require('./login-route');
const plan = require('./plan-route');

const routes = app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use('/api/users', users);
  app.use('/api/login', login);
  app.use('/api/plans', plan);

  app.use(helmet());
  app.use(compression());
};

module.exports = routes;
