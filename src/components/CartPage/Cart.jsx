import React, { useContext, useEffect } from "react";
import {CartContext} from "../../contexts/CartContext";
import CartProduct from "./CartProduct";

export const Cart = props => {
  const context = useContext(CartContext);

  useEffect(() => {
    console.log(context);
  }, []);

  if (context.cart.length < 1) {
    return (
      <div>
        <div className="bg-info bg-gradient">
          <h1>Your cart</h1>
          <p>Cart is empty</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-info bg-gradient">
        <h1>Your cart</h1>
          {context.cart.map(cartItem => (
            <CartProduct
              id={cartItem.id}
              name={cartItem.name}
              description={cartItem.description}
              category={cartItem.category}
              quantity={cartItem.quantity}
              key={cartItem.id}
            />
          ))}
      </div>
    </div>
  );
};
