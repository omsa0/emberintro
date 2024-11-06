import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class CardComponent extends Component {
  @action
  flipCard(event) {
    const element = event.target.closest('.card');
    // console.log(element);
    const question = element.querySelector('.question');
    const answer = element.querySelector('.answer');
    question.classList.toggle('hidden');
    answer.classList.toggle('hidden');
  }
}
