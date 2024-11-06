import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'emberintro/tests/helpers';

module('Acceptance | flashcards', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /home', async function (assert) {
    await visit('/home');

    assert.strictEqual(currentURL(), '/home');
    assert.dom('h1').hasText('Welcome to CSCI5117 Flash Cards!');

    assert.dom('.flashcards').hasText('Flashcards');
    await click('.flashcards');

    assert.strictEqual(currentURL(), '/flashcards');
  });
});
