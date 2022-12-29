import '../../components/List';
import DataDb from '../../data/data-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createDetailTemplate, customerReview } from '../templates/template-creator';

const DetailRestaurant = {
  async render() {
    return `
    <div id="item" class="item"></div>
    <div id="likeButtonContainer"></div>
    <div class="review">
    <div id="review" class="item">
    </div>
    </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const data = await DataDb.detailRestaurant(url.id);
    const movieContainer = document.querySelector('#item');
    const reviewContainer = document.querySelector('#review');

    movieContainer.innerHTML = createDetailTemplate(data.restaurant);
    data.restaurant.customerReviews.forEach((item) => {
      reviewContainer.innerHTML += customerReview(item);
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: data.restaurant.id,
        name: data.restaurant.name,
        description: data.restaurant.description,
        city: data.restaurant.city,
        address: data.restaurant.address,
        pictureId: data.restaurant.pictureId,
        rating: data.restaurant.rating,
      },
    });
  },
};

export default DetailRestaurant;
