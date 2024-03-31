import Route from '@ember/routing/route';

export default class ClientViewRoute extends Route {
  model(params) {
    let clientId = params.client_id;

    if (clientId === '1') {
      return {
        id: 1,
        name: 'NadetDev',
        company_name: 'Web Dev Co',
        email: 'info@nadet-dev.com',
        phone_number: '+33 01 0 03 04 05',
        active: true,
      };
    } else if (clientId === '2') {
      return {
        id: 2,
        name: 'NadetSoft',
        company_name: 'Software Co',
        email: 'contact@nadetsoft.com',
        phone_number: '+33 03 04 05 06 07',
        active: true,
      };
    }
  }
}
