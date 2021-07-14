import React, { useState, useEffect } from "react";
import StartShopping from "./StartShopping";
import ShoppingCart from "./ShoppingCart";
import itemList from "./ShoppingList.json";
import ShoppingApi from "../api/ShoppingApi";

function ShoppingMain() {
  const [cartProduct, setCartProduct] = useState([]);
  const [cartItem, setCartItem] = useState([]);

  const onAdd = (product) => {
    const exist = cartProduct.find((x) => x.id === product.id);
    if (exist) {
      setCartProduct(
        cartProduct.map((x) =>
          x.id === product.id ? { ...exist, qty: product.qty += 1 } : x
        )
      );
      update(product);
    } else {
      setCartProduct([...cartProduct, { ...product, qty: product.qty = 1 }]);
      add(product);
    }
  };

  const onRemove = (product) => {
    const exist = cartProduct.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartProduct(cartProduct.filter((x) => x.id !== product.id));
    } else {
      cartProduct.map((x) =>
        x.id === product.id ? {...exist, qty: product.qty -= 1} : x
      );
      update(product);
    }
  };

  const add = async (data) => {
    alert(data.qty);
    const onSuccess = await ShoppingApi.createItem(data);
    if (onSuccess) {
      fetchPosts();
    }
  };

  const update = async (data) => {
    const onSuccess = await ShoppingApi.updateItem(data);
    if (onSuccess) {
      alert(data.qty);
      fetchPosts();
    }
  };

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
