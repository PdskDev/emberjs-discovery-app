import Route from '@ember/routing/route';

export default class ClientIndexRoute extends Route {
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
  }
}
