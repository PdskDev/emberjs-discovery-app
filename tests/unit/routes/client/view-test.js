import { module, test } from 'qunit';
import { setupTest } from 'ember-discovery/tests/helpers';

module('Unit | Route | client/view', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:client/view');
    assert.ok(route);
  });
});
