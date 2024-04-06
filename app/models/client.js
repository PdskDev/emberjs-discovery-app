import Model, { attr } from '@ember-data/model';

export default class ClientModel extends Model {
  @attr('string') name;
  @attr('string') company_name;
  @attr('string') email;
  @attr('string') phone_number;
  @attr('boolean') active;
  @attr('date', {
    defaultValue() {
      return new Date();
    },
  })
  date;
  @attr('gender') gender;

  get displayTag() {
    return `${this.name} <${this.email}>`;
  }
}
