import { module, test } from 'qunit';
import { setupTest } from 'emberintro/tests/helpers';

module('Unit | Route | firebasetesting', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:firebasetesting');
    assert.ok(route);
  });
});
