import Service from '@ember/service';
import { service } from '@ember/service';
import { action } from '@ember/object';

import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
  signOut,
  onAuthStateChanged,
  authStateReady,
} from 'firebase/auth';
import { tracked } from '@glimmer/tracking';

export default class AuthService extends Service {
  @service firebase;
  @service router;

  auth = getAuth(this.firebase.app);

  @tracked user = undefined;

  // await the result of this function to wait for the user data to be loaded.
  // Otherwise you can run into issues accessing the data before it's loaded
  async ensureInitialized() {
    await this.auth.authStateReady();
    this.user = this.auth.currentUser;
  }

  async requireLogin() {
    await this.ensureInitialized();
    if (!this.user) {
      this.router.transitionTo('home');
    }
  }

  async ensureLoggedIn() {
    await this.ensureInitialized();
    if (!this.user) {
      throw new Error('NOT LOGGED IN');
    }
  }

  async init() {
    super.init(...arguments);
    await this.ensureInitialized();
    onAuthStateChanged(this.auth, (user) => (this.user = user));
  }

  @action
  async sign_in_with_popup() {
    const provider = new GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    const result = await signInWithPopup(this.auth, provider);
    return result;
  }

  @action
  async sign_out() {
    console.log(this.auth.currentUser);
    signOut(this.auth);
    // a bit foreceful, but it'll do.
    this.router.transitionTo('home');
  }
}
