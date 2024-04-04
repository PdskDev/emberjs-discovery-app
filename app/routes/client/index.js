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

    return [
      {
        id: 1,
        name: 'NadetDev',
        company_name: 'Dev Co',
        email: 'nadetdev@devco.com',
        phone_number: '+33 1 02 03 04 05',
        active: true,
      },
      {
        id: 2,
        name: 'B the Dev',
        company_name: 'BCompany',
        email: 'bthedev@bcompany.com',
        phone_number: '+33 2 03 04 05 06',
        active: true,
      },
      {
        id: 3,
        name: 'N the DevOps',
        company_name: 'DeliveryFirst',
        email: 'nadet@deliveryfirst.com',
        phone_number: '+33 3 04 05 06 07',
        active: true,
      },
    ];
  }
}
