import { module, test } from 'qunit';
import { setupTest } from 'emberintro/tests/helpers';

module('Unit | Route | flashcards', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:flashcards');
    assert.ok(route);
  });
});
