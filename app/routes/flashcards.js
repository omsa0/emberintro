import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class FlashcardsRoute extends Route {
  @service cards;
  @service router;

  async model() {
    await this.cards.fetchCards();
  }

  actions = {
    willTransition(transition) {
      console.log(`Leaving route: ${this.router.currentRouteName}`);
      console.log(`Going to route: ${transition.to.name}`);

      if (transition.to.name !== 'flashcards') {
        this.cards.unsubscribe();
        console.log('Unsubscribed from cards');
      }
    },
  };

  // model() {
  //   throw new Error('OH NO');
  // }

  // @action
  // error(err) {
  //   console.log(err);
  //   // this.router.transitionTo('index');
  // }
}
