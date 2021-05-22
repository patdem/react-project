import React, {Component} from 'react';
import axios from 'axios';
import Product from "./Product";

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      categories: [],
    }
  }

  componentDidMount() {
    axios.get("http://localhost:9000/api/product/list")
      .then(response => {
        this.setState({
          products: response.data,
        })
      });

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
          <h1>Products</h1>
          {this.state.products.map((prod) => (
            <Product
              name={prod.name}
              description={prod.description}
              category={prod.category}
              key={prod.id}
            />
          ))
          }
        </div>
      </div>
    );
  }

}

export default ProductsList;