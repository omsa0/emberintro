import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class FlashcardsRoute extends Route {
  @service cards;
  @service router;

  async model() {
    await this.cards.fetchCards();
  }

  // another way to handle the change but instead in the route
  // this is the new api
  // I think it makes more sense to handle this in the route
  // additionally, the new api 'routeWillChange' also triggers for
  // loading and error substates which can be nice but we have to use
  // startsWith to account for it, which is a bit of a pain
  constructor() {
    super(...arguments);

    // when leaving the page, unsubscribe from changes.
    this.router.on('routeWillChange', (transition) => {
      console.log(`Leaving route: ${this.router.currentRouteName}`);
      console.log(`Going to route: ${transition.to.name}`);
      console.log(transition)
      if (!transition.to.find((route) => route.name.startsWith('flashcards'))) {
        console.log('unsubscribing from cards');
        this.cards.unsubscribe();
      }
    });
  }

  // another way to handle the change but instead in the route
  // this is the old api
  // actions = {
  //   willTransition(transition) {
  //     console.log(`Leaving route: ${this.router.currentRouteName}`);
  //     console.log(`Going to route: ${transition.to.name}`);

  //     if (transition.to.name !== 'flashcards') {
  //       this.cards.unsubscribe();
  //       console.log('Unsubscribed from cards');
  //     }
  //   },
  // };

  // model() {
  //   throw new Error('OH NO');
  // }

  // @action
  // error(err) {
  //   console.log(err);
  //   // this.router.transitionTo('index');
  // }
}
