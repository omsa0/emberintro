import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { signInWithPopup, GoogleAuthProvider, getAuth, signOut, onAuthStateChanged, authStateReady } from 'firebase/auth';

export default class FirebasetestingController extends Controller {
    @service firebase;

    @action 
    test() {
        // Everything is based on the auth object
        const auth = getAuth(this.firebase.app);
        console.log(auth.currentUser);

        if (!auth.currentUser) {
            // Sign In
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider)
            console.log("Signed In");
        } else {
            // Sign Out
            signOut(auth);
            console.log("Signed Out");
        }
    }
}
