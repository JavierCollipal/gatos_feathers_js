// Initializes the `cat` service on path `/cat`
const { Cat } = require('./cat.class');
const createModel = require('../../models/cat.model');
const hooks = require('./cat.hooks');

module.exports = function (app) {
  const catModel = createModel(app);
    const paginate = app.get('paginate');


  const options = {
    Model: catModel,
    paginate: paginate
  };

  const catService = new Cat(options, app);
  // Initialize our sere with any options it requires
  app.use('/cat',catService );

  // Get our initialized service so that we can register hooks
  const service = app.service('cat');

  service.hooks(hooks);
};
