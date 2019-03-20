import React, { useContext, useEffect } from "react";

import MainNavigation from "../components/MainNavigation";
import "./Cart.css";

import ShopContext from "../context/shop-context";

const CartPage = () => {
  const context = useContext(ShopContext);
  const { cart, removeProductFromCart, cartSum } = context;

  useEffect(() => {
  }, []);

  return (
    <React.Fragment>
      <MainNavigation cartItemNumber={cartSum} />
      <main className="cart">
        {cartSum <= 0 && <p>No Item in the Cart!</p>}
        <ul>
          {cart.map(cartItem => (
            <li key={cartItem.id}>
              <div>
                <strong>{cartItem.title}</strong> - ${cartItem.price} (
                {cartItem.quantity})
              </div>
              <div>
                <button onClick={removeProductFromCart.bind(this, cartItem.id)}>
                  Remove from Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </React.Fragment>
  );
};

export default CartPage
