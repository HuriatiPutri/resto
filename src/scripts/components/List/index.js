/* eslint-disable no-underscore-dangle */
/* eslint linebreak-style: ["error", "windows"] */
import '../ItemList';
import './styles.scss';

class List extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set data(data) {
    this._data = data;
    this.render();
  }

  get value() {
    return this._data;
  }

  render() {
    this.innerHTML = '';
    this._data?.forEach((item) => {
      const ItemElement = document.createElement('list-item');
      ItemElement.classList.add('item-col');
      ItemElement.item = item;
      this.appendChild(ItemElement);
    });
  }

  renderError(message) {
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('data-list', List);
