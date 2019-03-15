export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODCUT_FROM_CART";

const sendRequest = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 700);
  });
};

export const addProductToCart = product => {
  return dispatch => {
    sendRequest().then(() => {
      dispatch({
        type: ADD_PRODUCT_TO_CART,
        payload: product
      });
    });
  };
};

export const removeProductFromCart = productId => {
  return dispatch => {
    sendRequest().then(() => {
      dispatch({
        type: REMOVE_PRODUCT_FROM_CART,
        payload: productId
      });
    });
  };
};
