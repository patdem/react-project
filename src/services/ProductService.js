import axios from 'axios';

class ProductService {

  async getProducts() {
    return axios.get("http://localhost:9000/api/product/list")
      .then(response => response.data);
  }
}

export default new ProductService();