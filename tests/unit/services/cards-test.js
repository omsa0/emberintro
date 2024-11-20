import { module, test } from 'qunit';
import { setupTest } from 'emberintro/tests/helpers';

module('Unit | Service | cards', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:cards');
    assert.ok(service);
  });
});
