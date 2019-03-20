export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";


const setCartItemCount = cart =>
  cart.reduce((count, curItem) => {
    return count + curItem.quantity;
  }, 0);

const addProductToCart = (state, product) => {
  console.log("Adding product", product);

  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    item => item.id === product.id
  );

  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 });
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex]
    };
    updatedItem.quantity++;
    updatedCart[updatedItemIndex] = updatedItem;
  }

  return {
    ...state,
    cart: updatedCart,
    cartSum: setCartItemCount(updatedCart)
  };
};

const removeProductFromCart = (state, productId) => {
  console.log("Removing product with id: " + productId);
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(item => item.id === productId);

  const updatedItem = {
    ...updatedCart[updatedItemIndex]
  };
  updatedItem.quantity--;
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return {
    ...state,

    cart: updatedCart,
    cartSum: setCartItemCount(updatedCart)
  };
};

export const shopReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(state, action.product);

    case REMOVE_PRODUCT:
      return removeProductFromCart(state, action.productId);

    default:
      return state;
  }
};
