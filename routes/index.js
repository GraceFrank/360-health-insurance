const helmet = require('helmet');
const compression = require('compression');
const bodyParser = require('body-parser');
const users = require('./users-route');
const login = require('./login-route');
const plan = require('./plan-route');
const subscription = require('./subscription-route');
const family = require('./family-route');
const hospital = require('./hospital-route');

const routes = app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use('/api/users', users);
  app.use('/api/login', login);
  app.use('/api/plans', plan);
  app.use('/api/subs', subscription);
  app.use('/api/family', family);
  app.use('/api/hospitals', hospital);

  app.use(helmet());
  app.use(compression());
};

module.exports = routes;
