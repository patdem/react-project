import axios from 'axios';

class CategoryService {

  async getCategories() {
    return axios.get("https://backshop.azurewebsites.net/api/category/list")
      .then(response => response.data);
  }
}

export default new CategoryService();