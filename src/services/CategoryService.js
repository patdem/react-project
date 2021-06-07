import axios from 'axios';

class CategoryService {

  async getCategories() {
    return axios.get("http://localhost:9000/api/category/list")
      .then(response => response.data);
  }
}

export default new CategoryService();