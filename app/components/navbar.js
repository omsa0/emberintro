import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class NavbarComponent extends Component {
  // Navbar Script for Burger Menu
  @action
  toggleBurger(event) {
    const el = event.target;
    // console.log(el);

    // Get the target from the "data-target" attribute
    const target = el.dataset.target;
    const $target = document.getElementById(target);
    // console.log($target);

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    el.classList.toggle('is-active');
    $target.classList.toggle('is-active');
  }
}
