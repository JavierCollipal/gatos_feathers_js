// Initializes the `cat` service on path `/cat`
const { Cat } = require('./cat.class');
const createModel = require('../../models/cat.model');
const hooks = require('./cat.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/cat', new Cat(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('cat');

  service.hooks(hooks);
};
