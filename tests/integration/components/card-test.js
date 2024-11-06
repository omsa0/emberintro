import { module, test } from 'qunit';
import { setupRenderingTest } from 'emberintro/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Card @question=question @answer=answer />
`);

    assert.dom('.card').exists();
    assert.dom('.card .question').exists();
    assert.dom('.card .question').hasText('question');
    assert.dom('.card .answer').exists();
    assert.dom('.card .answer').hasText('answer');
  });
});
