import DataDb from '../../data/data-source';
import '../../components/List';
import { createListRestaurant } from '../templates/template-creator';
// import { createMovieTemplate } from '../templates/template-creator'

const ListRestaurant = {
  async render() {
    return `
    <div class="content">
        <h2 class="content__heading">Explore Restaurant</h2>
        <div>Loading...</div>
        <div id="data-list" class="item-col">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const data = await DataDb.getListRestaurant();
    const listContainer = document.querySelector('#data-list');
    data.forEach((item) => {
      listContainer.innerHTML += createListRestaurant(item);
    });
  },
};

export default ListRestaurant;
