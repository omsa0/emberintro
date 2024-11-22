import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AddCard extends Component {
  @service cards;

  @tracked question = '';
  @tracked answer = '';

  @action
  async addCard(event) {
    event.preventDefault();

    await this.cards.newCard(this.question, this.answer);

    this.question = '';
    this.answer = '';
  }
}
