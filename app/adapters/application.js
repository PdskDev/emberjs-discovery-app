import JSONAPIAdapter from '@ember-data/adapter/json-api';
import Inflector from 'ember-inflector';
import ENV from '../config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = ENV.APP.API_URL;
  namespace = 'api/v1';
  pathForType(type) {
    if (type === 'salesman') {
      return 'salesmen';
    }
    return Inflector.inflector.pluralize(type);
  }

  get headers() {
    const accessToken = localStorage.getItem('accessToken');
    return {
      Authorization: 'Token	' + accessToken,
      'Content-Type': 'application/json',
    };
  }
}
