import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class FirebasetestingRoute extends Route {
    @service auth;

    async model() {
        await this.auth.init();
        console.log(this.auth.user);
    }
}
