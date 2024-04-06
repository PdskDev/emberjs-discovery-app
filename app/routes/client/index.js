import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ClientIndexRoute extends Route {
  @service store;

  queryParams = ['sortBy', 'order'];

  sortBy = null;
  order = null;

  setupController() {
    // eslint-disable-next-line ember/no-controller-access-in-routes
    this.controllerFor('client').set('clientModuleTitle', 'Clients');
  }

  /* queryParams = {
    sortBy: {
      refreshModel: false,
    },
    order: {
      refreshModel: true,
    },
  }; */

  model(params) {
    console.log(params);

    return this.store.findAll('client');
  }

  testCustomHTML = '<p style="font-weight: bold">Test HTML Render</p>';
}
