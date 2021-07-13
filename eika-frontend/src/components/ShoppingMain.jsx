import React, { useState } from "react";
import StartShopping from "./StartShopping";
import ShoppingCart from "./ShoppingCart";
import itemList from "./ShoppingList.json";

function ShoppingMain() {
  const [cartItem, setCartItem] = useState([]);
  const onAdd = (product) => {
    const exist = cartItem.find((x) => x.id === product.id);
    if (exist) {
      setCartItem(
        cartItem.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
      console.log("product if: " + product);
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }]);
    }
  };

  return (
    <>
      <div id="sidebar">
        <h6 class="font-weight-bold">Your Cart</h6>
        <ShoppingCart cartItem={cartItem} onAdd={onAdd} />
      </div>

      <div id="products">
        <div class="container mt-5">
          <div class="row">
            {itemList.map((product) => (
              <StartShopping key={product.id} product={product} onAdd={onAdd} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingMain;
