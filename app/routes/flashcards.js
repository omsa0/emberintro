import Route from '@ember/routing/route';
import { service } from '@ember/service';
export default class FlashcardsRoute extends Route {
  @service cards;

  async model() {
    const cards = await this.cards.getCards();
    const cardsList = [];
    for (let i = 0; i < cards.docs.length; i++) {
      cardsList.push(cards[i].data());
      // console.log(cards[i].data());
    }
    return cardsList;
  }
}
