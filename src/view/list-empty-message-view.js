import {createElement} from '../render.js';

const createListEmptyMessageTemplate = () => (
  `
  <p class="trip-events__msg">Click New Event to create your first point</p>
  `
);

export default class ListEmptyMessageView {
  getTemplate() {
    return createListEmptyMessageTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }
}
