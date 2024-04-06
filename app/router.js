import EmberRouter from '@ember/routing/router';
import config from 'ember-discovery/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('client', function () {
    this.route('view', { path: '/:client_id' });
  });
  this.route('fourohfour', { path: '/*' });
  this.route('login');
});
