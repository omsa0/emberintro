import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class NavbarComponent extends Component {
  @service auth;

  // Navbar Script for Burger Menu
  @action
  toggleBurger(event) {
    const el = event.target.closest('.navbar-burger');

    // Get the target from the "data-target" attribute
    const target = el.dataset.target;
    const $target = document.getElementById(target);

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    el.classList.toggle('is-active');
    $target.classList.toggle('is-active');
  }
}
