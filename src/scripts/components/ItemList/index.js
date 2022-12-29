/* eslint-disable no-underscore-dangle */
/* eslint linebreak-style: ["error", "windows"] */
import './styles.scss';

class Item extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set item(item) {
    // eslint-disable-next-line no-underscore-dangle
    this._item = item;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="item-row">
      <div class="img-item">
        <img tabindex="0" class="fan-art-item" src="${this._item.pictureId}" alt="Fan Art">
        <span tabindex="0" class="city-item">${this._item.city}</span>
      </div>
        <div class="item-info">
          <span tabindex="0">Rating ${this._item.rating}</span>
          <h2 tabindex="0">${this._item.name}</h2>
          <p tabindex="0">${this._item.description}</p>
        </div>
        </div>
      `;
  }
}

customElements.define('list-item', Item);
