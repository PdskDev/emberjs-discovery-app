import { module, test } from 'qunit';

import { setupTest } from 'ember-discovery/tests/helpers';

module('Unit | Model | client', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('client', {});
    assert.ok(model);
  });
});
