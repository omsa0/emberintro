import { module, test } from 'qunit';
import { setupTest } from 'emberintro/tests/helpers';

module('Unit | Controller | firebasetesting', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:firebasetesting');
    assert.ok(controller);
  });
});
