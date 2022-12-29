/* eslint linebreak-style: ["error", "windows"] */
import './styles.scss';

class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<header class="header">
        <a href="#maincontent" class="skip-link">Skip To Content</a>
        <div class="header__menu">
        <h5>Resto Awak</h5>
        <a href="#" id="menu" class="burger" tabindex="0">☰</a>
        </div>
        <nav id="drawer" class="nav">
          <h2 class="title">Resto Awak</h2>
          <ul class="nav__list">
              <li class="nav__item"><a href="/">Home</a></li>
              <li class="nav__item"><a href="#/favorite">Favorite</a></li>
              <li class="nav__item"><a target="_blank" href="https://www.linkedin.com/in/putri-huriati-2abb2412a/">About Us</a></li>
          </ul>
        </nav>
        </header>`;
  }
}

customElements.define('app-bar', AppBar);
