import React, {useContext} from 'react';
import Product from "./Product";
import {ProductContext} from "../../contexts/ProductContext";
import {CategoryContext} from "../../contexts/CategoryContext";

function ProductsList() {
  let {products} = useContext(ProductContext);
  let {categories} = useContext(CategoryContext);

  return (
    <div>
      <div className="bg-info bg-gradient">
        <h1>Products</h1>
        {products.map((prod) => (
          <Product
            name={prod.name}
            description={prod.description}
            category={categories[prod.category]}
            key={prod.id}
          />
        ))
        }
      </div>
    </div>
  );
}

export default ProductsList;