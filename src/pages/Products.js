import React from "react";

import MainNavigation from "../components/MainNavigation";
import "./Products.css";

import ShopContext from "../context/shop-context";

const ProductsPage = () => {
  return (
    <ShopContext.Consumer>
      {context => {
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
};

export default ProductsPage;
