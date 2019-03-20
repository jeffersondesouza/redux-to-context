import React, { Component } from "react";
import { connect } from "react-redux";

import MainNavigation from "../components/MainNavigation";
import { removeProductFromCart } from "../store/actions";
import "./Cart.css";

import ShopContext from "../context/shop-context";

class CartPage extends Component {
  static contextType = ShopContext;

  render() {
    const { cartSum, cart, removeProductFromCart } = this.context;

    return (
      <React.Fragment>
        <MainNavigation cartItemNumber={cartSum} />
        <main className="cart">
          {cart.length <= 0 && <p>No Item in the Cart!</p>}
          <ul>
            {cart.map(cartItem => (
              <li key={cartItem.id}>
                <div>
                  <strong>{cartItem.title}</strong> - ${cartItem.price} (
                  {cartItem.quantity})
                </div>
                <div>
                  <button
                    onClick={removeProductFromCart.bind(this, cartItem.id)}
                  >
                    Remove from Cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.cart,
    cartItemCount: state.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeProductFromCart: id => dispatch(removeProductFromCart(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage);
