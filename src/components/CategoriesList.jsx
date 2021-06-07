import Category from "./Category";
import React, {useContext} from 'react';
import {CategoryContext} from "../contexts/CategoryContext";

function CategoriesList() {
  let {categories} = useContext(CategoryContext);

  return (
    <div>
      <div className="bg-info bg-gradient">
        <h1>Categories</h1>
        {categories.map((cat) => (
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

export default CategoriesList;
