import React, {Component} from 'react';
import axios from 'axios';
import Category from "./Category";

class CategoriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    }
  }

  componentDidMount() {
    axios.get("http://localhost:9000/api/category/list")
      .then(response => {
        this.setState({
          categories: response.data,
        });
      });
  }

  render() {
    return (
      <div>
        <div className="bg-info bg-gradient">
          <h1>Categories</h1>
          {this.state.categories.map((cat) => (
            <Category
              name={cat.name}
              key={cat.id}
            />
          ))
          }
        </div>
      </div>
    );
  }

}

export default CategoriesList;