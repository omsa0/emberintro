import Service from '@ember/service';
import { service } from '@ember/service';
import { action, computed } from '@ember/object';
import { getDocs, getFirestore } from 'firebase/firestore';
import { collection, doc, addDoc } from 'firebase/firestore';
import { tracked } from '@glimmer/tracking';

export default class CardsService extends Service {
  @service firebase;
  @service auth;

  @tracked data = [];

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
    const id = addDoc(this.cardsRef, {
      owner: this.auth.user.uid,
      question: question,
      answer: answer,
    });

    const newItem = {
      id: id,
      owner: this.auth.user.uid,
      question: question,
      answer: answer,
    };

    // turns out ember does not observe changes to arrays
    // so we need to reassign the array to trigger a re-render
    this.data = [...this.data, newItem];
  }

  // only to fetch the cards on initial load
  // afterwards, data array has everything so no need
  // to fetch again
  @action
  async fetchCards() {
    const snapshot = await getDocs(this.cardsRef);
    this.data = [];
    snapshot.forEach((doc) => {
      const dat = doc.data();
      dat['id'] = doc.id;
      this.data.push(dat);
    });
  }
}
