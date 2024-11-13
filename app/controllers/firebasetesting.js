import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class FirebasetestingController extends Controller {
  @service auth;

  @action
  async test() {
    await this.auth.init();

    if (!this.auth.user) {
      // Sign In
      this.auth.sign_in_with_popup();
      console.log(this.auth.user);
      console.log('Signed In');
    } else {
      // Sign Out
      this.auth.sign_out();
      console.log(this.auth.user);
      console.log('Signed Out');
    }
  }
}
