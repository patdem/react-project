import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React from "react";
import product from "../../img/product.svg";

const Product = (props) => {
  return (
    <Card style={{ width: '20rem', marginRight: "auto", marginLeft: "auto", marginTop: 10, marginBottom: 10,  padding:20 }}>
      <Card.Img variant="top" src={product} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Card.Text>
          <small className="text-muted">{props.category}</small>
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;