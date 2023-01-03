import CONFIG from '../../global/config';

const subItem = (item) => (
  item.map((obj) => `<span>${obj.name}</span>`)
);

const customerReview = (item) => (
  `<div class="item-review">
    <div class="item__name">${item.name}</div>
    <div class="item__review_date">${item.date}</div>
    <div>${item.review}</div>
  </div>
  `);

const createDetailTemplate = (item) => `
    <h2 class="item__title">${item.name}</h2>
    <img class="item__poster" src="${CONFIG.BASE_IMAGE_URL + item.pictureId}" alt="${item.name}" />
    <div class="item__info">
      <h4>Address</h4>
      <p>${item.address}, ${item.city}</p>
      <h4>Rating</h4>
      <p>${item.rating}</p>
      <h4>Categories</h4>
      ${subItem(item.categories)}
      <h4>Menus</h4>
      <b>Foods</b><p>${subItem(item.menus.foods)}</p>
      <b>Drink</b><p>${subItem(item.menus.drinks)}</p>
    </div>
    <div class="item__overview">
      <h3>Description</h3>
      <p>${item.description}</p>
    </div>
`;

const createDetailFavTemplate = (item) => `
    <h2 class="item__title">${item.name}</h2>
    <img class="item__poster" src="${CONFIG.BASE_IMAGE_URL + item.pictureId}" alt="${item.name}" />
    <div class="item__info">
      <h4>Address</h4>
      <p>${item.address}, ${item.city}</p>
      <h4>Rating</h4>
      <p>${item.rating}</p>
    </div>
    <div class="item__overview">
      <h3>Description</h3>
      <p>${item.description}</p>
    </div>
    <div>
    </div>
`;

const createListRestaurant = (item) => ` <div class="item-row">
  <div class="img-item">
    <img tabindex="0" class="lazyload fan-art-item" width="1280" height="750" data-src="${item.pictureId ? CONFIG.BASE_IMAGE_URL + item.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="Fan Art">
    <span tabindex="0" class="city-item">${item.city}</span>
  </div>
  <div class="item-info">
    <span tabindex="0">Rating ${item.rating}</span>
    <h2 class="item-title" tabindex="0"><a href="/#/detail/${item.id}">${item.name}</a></h2>
    <p tabindex="0">${item.description}</p>
  </div>
  </div>`;

const createListFavRestaurant = (item) => ` <div class="item-row">
  <div class="img-item">
    <img tabindex="0" class="lazyload fan-art-item" data-src="${item.pictureId ? CONFIG.BASE_IMAGE_URL + item.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="Fan Art">
    <span tabindex="0" class="city-item">${item.city}</span>
  </div>
  <div class="item-info">
    <span tabindex="0">Rating ${item.rating}</span>
    <h2 tabindex="0"><a href="/#/detail-fav/${item.id}">${item.name}</a></h2>
    <p tabindex="0">${item.description}</p>
  </div>
  </div>`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
  <i class="far fa-heart"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
  <i class="fas fa-heart"></i>
  </button>
`;

export {
  createDetailTemplate, createListRestaurant, customerReview,
  createLikeButtonTemplate, createLikedButtonTemplate,
  createListFavRestaurant, createDetailFavTemplate,
};
