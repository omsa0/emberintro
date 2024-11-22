import Controller from '@ember/controller';
import { service } from '@ember/service';

export default class FlashcardsController extends Controller {
  @service auth;
  @service cards;
  @service router;

  // another way to handle the change but instead in the controller
  // constructor() {
  //   super(...arguments);

  //   // when leaving the page, unsubscribe from changes.
  //   this.router.on('routeWillChange', (transition) => {
  //     console.log(`Leaving route: ${this.router.currentRouteName}`);
  //     console.log(`Going to route: ${transition.to.name}`);
  //     console.log(transition)
  //     if (!transition.to.find((route) => route.name.startsWith('flashcards'))) {
  //       console.log('unsubscribing from cards');
  //       this.cards.unsubscribe();
  //     }
  //   });
  // }
}
