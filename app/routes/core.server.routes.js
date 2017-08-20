'use strict';

module.exports = function (app) {
  // Root routing
  const core = require('../controllers/core.server.controller');

  // Define error pages
  app.route('/server-error').get(core.renderError);

  // Return a 404 for all undefined api, module or lib routes
  //app.route('/:url(api|modules|lib)/*').get(core.renderNotFound);

  // Define application route
  app.route('/').get(core.renderIndex);

  app.route('/api/profile').get(core.getProfile);
};
