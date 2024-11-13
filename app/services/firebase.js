import Service from '@ember/service';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBh8HjNC4nllSD-HkfcIbLKAJrFRRqIPDw',
  authDomain: 'fir-intro-a0883.firebaseapp.com',
  projectId: 'fir-intro-a0883',
  storageBucket: 'fir-intro-a0883.firebasestorage.app',
  messagingSenderId: '723487029416',
  appId: '1:723487029416:web:ae1e636bb55b4a05482a9d',
};

export default class FirebaseService extends Service {
  app = initializeApp(firebaseConfig);
  db = getFirestore(this.app);
}
