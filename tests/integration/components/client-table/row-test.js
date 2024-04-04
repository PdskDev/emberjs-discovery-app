import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-discovery/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | client-table/row', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ClientTable::Row />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <ClientTable::Row>
        template block text
      </ClientTable::Row>
    `);

    assert.dom().hasText('template block text');
  });
});
