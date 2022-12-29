import '../../components/List';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createDetailFavTemplate } from '../templates/template-creator';

const DetailFavoriteRestaurant = {
  async render() {
    return `
    <div id="item" class="item"></div>
    <div id="likeButtonContainer"></div>
    </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const data = await FavoriteRestoIdb.getResto(url.id);
    const movieContainer = document.querySelector('#item');

    movieContainer.innerHTML = createDetailFavTemplate(data);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: data.id,
        name: data.name,
        description: data.description,
        city: data.city,
        address: data.address,
        pictureId: data.pictureId,
        rating: data.rating,
      },
    });
  },
};

export default DetailFavoriteRestaurant;
