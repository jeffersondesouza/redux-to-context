import React, { useState, useReducer } from "react";
import ShopContext from "./shop-context";

import {
  shopReducer,
  ADD_PRODUCT,
  ADD_PRODUCT_REQUEST,
  REMOVE_PRODUCT
} from "./reducers";

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
    dispatch({ type: ADD_PRODUCT_REQUEST });
    fetch("https://api.punkapi.com/v2/beers")
      .then(res => res.json())
      .then(data => {
        dispatch({ type: ADD_PRODUCT, product });
      });
  };

  const removeProductFromCart = productId => {
    fetch("https://api.punkapi.com/v2/beers")
      .then(res => res.json())
      .then(data => {
        dispatch({ type: REMOVE_PRODUCT, productId });
      });
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
