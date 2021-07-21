import Api from './Api';

class OrderApi {
  getAll() {
    return Api.get('/order/');
  }

  addToComplete(data) {
    return Api.post('/order/new/', data);
  }

  updateToComplete(data) {
    return Api.put('/order/update/', data);
  }

  deleteFromComplete(id) {
    return Api.delete('/order/' + id);
  }
}

export default new OrderApi();
