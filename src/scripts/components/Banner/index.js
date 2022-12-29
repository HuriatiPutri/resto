/* eslint linebreak-style: ["error", "windows"] */
import './styles.scss';

class BannerComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="banner">
            <div class="text">
                <p tabindex="0">Jadilah member kami untuk mendapatkan
                <br>discount dari restaurant favorite anda</p>

                <button>Daftar Sekarang</button>
            </div>
            <div class="left">
                <span tabindex="0" class="text-desc">Dapatkan potongan</span><br> 
                <span tabindex="0" class="text-disc">25%</span>
                <br><span tabindex="0" class="text-desc">untuk member</span>
            </div>
        </div>
        `;
  }
}

customElements.define('banner-component', BannerComponent);
