import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class FirebasetestingController extends Controller {
    @service firebase;

    @action 
    test() {
        console.log(this.firebase.db);
    }
}
