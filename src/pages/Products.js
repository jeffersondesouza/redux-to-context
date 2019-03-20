import React, { Component } from "react";

import MainNavigation from "../components/MainNavigation";
import "./Products.css";

import ShopContext from "../context/shop-context";

class ProductsPage extends Component {
  setCartItemCount = cart =>
    cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0);

  render() {
    return (
      <ShopContext.Consumer>
        {context => {
          console.log("context:", context);
          const { products, cartSum, cart, addProductToCart } = context;
          return (
            <React.Fragment>
              <MainNavigation cartItemNumber={cartSum} />
              <main className="products">
                <ul>
                  {products.map(product => (
                    <li key={product.id}>
                      <div>
                        <strong>{product.title}</strong> - ${product.price}
                      </div>
                      <div>
                        <button onClick={addProductToCart.bind(this, product)}>
                          Add to Cart
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </main>
            </React.Fragment>
          );
        }}
      </ShopContext.Consumer>
    );
  }
}

export default ProductsPage;
