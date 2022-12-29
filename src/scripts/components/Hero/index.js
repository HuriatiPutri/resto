/* eslint linebreak-style: ["error", "windows"] */
import './styles.scss';

class HeroComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero" id="hero">
        <picture>
        <source media="(max-width: 400px)" srcset="./images/hero-image_2-small.jpg">
        <img tabindex="0" src="./images/hero-image_2-large.jpg" class="hero_img" alt="">
        </picture>
        </div>
        `;
  }
}

customElements.define('hero-component', HeroComponent);
