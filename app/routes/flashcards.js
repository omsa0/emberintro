import Route from '@ember/routing/route';
import { service } from '@ember/service';
export default class FlashcardsRoute extends Route {
  @service cards;

  async model() {
    const cards = await this.cards.getCards();
    const cardsList = [];
    for (let i = 0; i < cards.docs.length; i++) {
      cardsList.push(cards.docs[i].data());
      cardsList[i].id = cards.docs[i].id;
      // console.log(cards.docs[i].data());
    }
    console.log(cardsList);
    return cardsList;
  }
}
