import Api from './Api';

class ShoppingApi {
  getAllItems() {
    return Api.get('/list/');
  }

  createItem(data) {
    return Api.post('/list/new/', data);
  }

  deleteItem(id) {
    return Api.delete('/list/' + id);
  }
}

export default new ShoppingApi();
