import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { later } from '@ember/runloop';
import { action } from '@ember/object';

export default class ClientViewRoute extends Route {
  @service router;
  @service store;
  @action
  loading(transition) {
    // eslint-disable-next-line ember/no-controller-access-in-routes
    let controller = this.controllerFor('client.view');
    controller.set('isLoading', true);
    transition.promise.finally(() => {
      controller.set('isLoading', false);
    });
    return true;
  }

  @action
  error(error, transition) {
    if (error.status == 404) {
      console.log('404 error');
      this.router.transitionTo('/fourohfour');
    }
    return true;
  }

  beforeModel(transition) {
    let clientId = transition.to.params.client_id;
    clientId = parseInt(clientId);
    if (isNaN(clientId)) {
      this.router.transitionTo('client');
    }
  }

  afterModel(model) {
    if (!model.active) {
      this.router.transitionTo('client');
    }
  }

  setupController(controller, model) {
    controller.set('testVar', 'Testing Var');
    // eslint-disable-next-line ember/no-controller-access-in-routes
    this.controllerFor('client').set('clientModuleTitle', model.name);
  }

  model(params) {
    return this.store.findAll('client');
  }
}
