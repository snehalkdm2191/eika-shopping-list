import React, { useState, useEffect } from "react";
import StartShopping from "./StartShopping";
import ShoppingCart from "./ShoppingCart";
import itemList from "./ShoppingList.json";
import ShoppingApi from "../api/ShoppingApi";

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
      add(product);
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }]);
      add(product);
    }
  };

  const onRemove = (product) => {
    const exist = cartItem.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItem(cartItem.filter((x) => x.id !== product.id));
    } else {
      cartItem.map((x) =>
        x.id === product.id ? {...exist, qty: exist.qty-1} : x
      )
    }
  };

  const add = async (data) => {
    const onSuccess = await ShoppingApi.createItem(data);
    if (onSuccess) {
      fetchPosts();
    }
  };

  const [cartProduct, setCartProduct] = useState([]);

    const fetchPosts = async () => {
      const response = await ShoppingApi.getAllItems();
      setCartProduct(response.data);
    };
    
    useEffect(() => {
      fetchPosts();
    }, []);


  return (
    <>
      <div id="sidebar">
        <h6 class="font-weight-bold">Your Cart</h6>
        <ShoppingCart cartItem={cartItem} onAdd={onAdd} onRemove={onRemove} cartProduct={cartProduct} />
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
