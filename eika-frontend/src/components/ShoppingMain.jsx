import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import StartShopping from "./StartShopping";
import ShoppingCart from "./ShoppingCart";
import itemList from "./ShoppingList.json";
import ShoppingApi from "../api/ShoppingApi";

function ShoppingMain() {
  const [cartProduct, setCartProduct] = useState([]);

  const onAdd = (product) => {
    const exist = cartProduct.find((x) => x.id === product.id);
    if (exist) {
      setCartProduct(
        cartProduct.map((x) =>
          x.id === product.id ? { ...exist, qty: (product.qty += 1) } : x
        )
      );
      update(product);
    } else {
      setCartProduct([...cartProduct, { ...product, qty: (product.qty = 1) }]);
      add(product);
    }
  };

  const onRemove = (product) => {
    const exist = cartProduct.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartProduct(cartProduct.filter((x) => x.id !== product.id));
      remove(product.id);
    } else {
      cartProduct.map((x) =>
        x.id === product.id ? { ...exist, qty: (product.qty -= 1) } : x
      );
      update(product);
    }
  };

  const add = async (data) => {
    const onSuccess = await ShoppingApi.createItem(data);
    if (onSuccess) {
      fetchPosts();
    }
  };

  const update = async (data) => {
    const onSuccess = await ShoppingApi.updateItem(data);
    if (onSuccess) {
      fetchPosts();
    }
  };

  const remove = async (id) => {
    const onSuccess = await ShoppingApi.deleteItem(id);
    if (onSuccess) {
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
      <div id="mobile-filter">
        <p class="pl-sm-0 pl-2">
          {" "}
          <NavLink to="/" class="main-nav" exact>
            Home
          </NavLink>
          | <b>All Products</b>
        </p>
        <div class="border-bottom pb-2 ml-2">
          <h4 id="burgundy">Filters</h4>
        </div>
        <ShoppingCart
          onAdd={onAdd}
          onRemove={onRemove}
          cartProduct={cartProduct}
        />
        <div className="text-center">
            <NavLink to="/order" exact>
              View Completed Order
            </NavLink>
          </div><br/>
      </div>
      <section id="sidebar">
        <p>
          {" "}
          <NavLink to="/" class="main-nav" exact>
            Home
          </NavLink>
          | <b>All Products</b>
        </p>
        <div class="border-bottom pb-2 ml-2">
          <h4 id="burgundy">Your Cart</h4>
        </div>
        <ShoppingCart
          onAdd={onAdd}
          onRemove={onRemove}
          cartProduct={cartProduct}
        />
        <div className="text-center">
            <NavLink to="/order" exact>
              View Completed Order
            </NavLink>
          </div>
      </section>

      <section id="products">
        <div class="container">
          <div class="row">
            {itemList.map((product) => (
              <StartShopping key={product.id} product={product} onAdd={onAdd} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ShoppingMain;
