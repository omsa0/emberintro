import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { signInWithPopup, GoogleAuthProvider, getAuth, signOut, onAuthStateChanged, authStateReady } from 'firebase/auth';


export default class FirebasetestingRoute extends Route {
    @service firebase;

    async model() {
        // ensure auth is initialized
        const auth = getAuth(this.firebase.app);
        await auth.authStateReady(this.firebase.app);
        console.log(auth.currentUser);
        return auth.currentUser;
    }
}
