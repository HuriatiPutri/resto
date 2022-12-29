import '../../components/List';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createListFavRestaurant } from '../templates/template-creator';
// import { createMovieTemplate } from '../templates/template-creator'

const FavoriteRestaurant = {
  async render() {
    return `
    <div class="content">
        <h2 class="content__heading">Favorite Restaurant</h2>
        <div id="data-list" class="item-col">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const data = await FavoriteRestoIdb.getAllRestos();
    const listContainer = document.querySelector('#data-list');
    if (data.length === 0) {
      listContainer.innerHTML += '<div class="resto-empty">Belum ada resto yang disukai</di>';
    }
    data.forEach((item) => {
      listContainer.innerHTML += createListFavRestaurant(item);
    });
  },
};

export default FavoriteRestaurant;
