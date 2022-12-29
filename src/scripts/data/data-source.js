import API_ENDPOINT from '../global/end-point';

class DataDb {
  static async getListRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJSON = await response.json();
    return responseJSON.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default DataDb;
