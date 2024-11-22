import Route from '@ember/routing/route';
import { service } from '@ember/service';
export default class FlashcardsRoute extends Route {
  @service cards;

  async model() {
    await this.cards.fetchCards();
  }
}
