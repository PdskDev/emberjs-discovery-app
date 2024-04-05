import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ClickTrackerComponent extends Component {
  @tracked
  count = 0;

  @action
  increaseCount(addNumber) {
    this.count += addNumber;
  }
}
