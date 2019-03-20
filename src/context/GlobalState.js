import React, { useState, useReducer } from "react";
import ShopContext from "./shop-context";

import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./reducers";

const initalState = {
  products: [
    { id: "p1", title: "Gaming Mouse", price: 29.99 },
    { id: "p2", title: "Harry Potter 3", price: 9.99 },
    { id: "p3", title: "Used plastic bottle", price: 0.99 },
    { id: "p4", title: "Half-dried plant", price: 2.99 }
  ],
  cart: [],
  cartSum: 0
};
const GlobalState = props => {
  const [state, dispatch] = useReducer(shopReducer, initalState);

  const addProductToCart = product => {
    setTimeout(() => {
      dispatch({ type: ADD_PRODUCT, product });
    }, 700);
  };

  const removeProductFromCart = productId => {
    setTimeout(() => {
      dispatch({ type: REMOVE_PRODUCT, productId });
    }, 700);
  };

  const { products, cart, cartSum } = state;

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        cartSum,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;
