import {
  discoverEmberDataModels,
  // applyEmberDataSerializers,
} from 'ember-cli-mirage';
import { createServer } from 'miragejs';

export default function (config) {
  let finalConfig = {
    ...config,
    // Remove discoverEmberDataModels if you do not want ember-cli-mirage to auto discover the ember models
    models: {
      ...discoverEmberDataModels(config.store),
      ...config.models,
    },
    // uncomment to opt into ember-cli-mirage to auto discover ember serializers
    // serializers: applyEmberDataSerializers(config.serializers),
    routes,
  };

  return createServer(finalConfig);
}

function routes() {
  // These comments are here to help you get started. Feel free to delete them.
  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing
  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://miragejs.com/docs/getting-started/overview/
  */
  this.get('/clients', () => {
    return {
      data: [
        {
          id: 1,
          name: 'NadetDev',
          company_name: 'Dev Co',
          email: 'nadet@devco.com',
          phone_number: '+33 1 02 03 04 05',
          active: true,
        },
        {
          id: 2,
          name: 'CedricDev',
          company_name: 'BeDev Company',
          email: 'cedric@bedev-company.com',
          phone_number: '+33 2 03 04 05 06',
          active: false,
        },
        {
          id: 3,
          name: 'FloreDev',
          company_name: 'DeliveryFirst',
          email: 'florence@deliveryfirst.com',
          phone_number: '+33 3 04 05 06 07',
          active: true,
        },
        {
          id: 4,
          name: 'XavierDev',
          company_name: 'Public Prestations',
          email: 'xavier@pubmic-prestations.com',
          phone_number: '+33 4 05 06 07 08',
          active: true,
        },
      ],
    };
  });
}
