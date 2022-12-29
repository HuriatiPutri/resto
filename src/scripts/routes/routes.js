import ListRestaurant from '../views/pages/list';
import Detail from '../views/pages/detail';
import FavoriteRestaurant from '../views/pages/favorite';
import DetailFavoriteRestaurant from '../views/pages/detail-favorite';
// import Upcoming from '../views/pages/upcoming';

const routes = {
  '/': ListRestaurant,
  '/list-restaurant': ListRestaurant,
  '/favorite': FavoriteRestaurant,
  '/detail/:id': Detail,
  '/detail-fav/:id': DetailFavoriteRestaurant,
};

export default routes;
