import Controller from '@ember/controller';
import { service } from '@ember/service';

export default class FlashcardsController extends Controller {
  @service auth;
  @service cards;
}
