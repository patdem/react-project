import axios from 'axios';

class ProductService {

  async getProducts() {
    return axios.get("https://backshop.azurewebsites.net/api/product/list")
      .then(response => response.data);
  }
}

export default new ProductService();