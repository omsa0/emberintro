import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class FlashcardsRoute extends Route {
  @service cards;
  @service router;

  async model() {
    await this.cards.fetchCards();
  }

  // model() {
  //   throw new Error('OH NO');
  // }

  // @action
  // error(err) {
  //   console.log(err);
  //   // this.router.transitionTo('index');
  // }
}
