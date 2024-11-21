import Service from '@ember/service';
import { service } from '@ember/service';
import { action, computed } from '@ember/object';
import { getDocs, getFirestore } from 'firebase/firestore';
import { collection, doc, addDoc } from 'firebase/firestore';

export default class CardsService extends Service {
  @service firebase;
  @service auth;

  db = getFirestore(this.firebase.app);
  cardsRef = collection(this.db, 'cards');

  @action
  newCard(question, answer) {
    // example using setDoc
    // doesn't make sense here since the user can make
    // multiple cards so the id would be overwritten
    // and the previous card would be lost

    // setDoc(doc(this.db, 'cards', this.auth.user.uid), {
    //     question: question,
    //     answer: answer,
    // })

    // addDoc makes more sense here since it automatically
    // generates a unique id for the document
    addDoc(this.cardsRef, {
      owner: this.auth.user.uid,
      question: question,
      answer: answer,
    });
  }

  @action
  async getCards() {
    return await getDocs(this.cardsRef);
  }
}
