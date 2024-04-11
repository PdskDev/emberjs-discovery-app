'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const stew = require('broccoli-stew');

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

  var appTree = app.toTree();
  var env = EmberApp.env();
  if (env === 'production') {
    appTree = stew.rm(appTree, 'robots.txt');
    appTree = stew.rename(appTree, 'robots-prod.txt', 'robots.txt');
  } else {
    appTree = stew.rm(appTree, 'robots-prod.txt');
  }

  return appTree;
};
