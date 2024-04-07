import Model, { attr, hasMany } from '@ember-data/model';

export default class SalesmanModel extends Model {
  @attr('string') name;
  @hasMany('client') clients;
}
