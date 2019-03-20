import React from "react";

export default React.createContext({
  products: [],
  cart: [],
  cartSum: 0,
  addProductToCart: product => {},
  removeProductFromCart: productId => {}
});
