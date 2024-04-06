'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
    hinting: false,

    fingerprint: {
      enabled: true,
      extensions: ['js', 'css'],
    },

    minifyCss: {
      enabled: true,
    },

    sassOptions: {
      extension: 'scss',
    },

    'ember-bootstrap': {
      bootstrapVersion: 5,
      importBootstrapCSS: false,
      insertEmberWormholeElementToDom: false,
    },
  });
  app.import('node_modules/bootstrap/dist/css/bootstrap.css');

  return app.toTree();
};
