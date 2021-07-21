import React, { useState } from "react";

import OrderApi from "../api/OrderApi";

function ShoppingCart({ onAdd, cartProduct, onRemove }) {
  const [completedItem, setCompletedItem] = useState([]);
  const handleClick = (product) => {
    const exist = completedItem.find((x) => x.id === product.id);
    if (exist) {
      setCompletedItem(
        completedItem.map((x) =>
          x.id === product.id ? { ...exist, qty: product.qty } : x
        )
      );
      updateToCompleteList(product);
    } else {
      setCompletedItem([...completedItem, { ...product, qty: product.qty }]);
      addToCompleteList(product);
    }
  };

  const addToCompleteList = async (data) => {
    const onSuccess = await OrderApi.addToComplete(data);
    if (onSuccess) {
      alert("order completed successfully..");
    }
  };

  const updateToCompleteList = async (data) => {
    const onSuccess = await OrderApi.updateToComplete(data);
    if (onSuccess) {
      alert("order updated successfully..");
    }
  };

  return (
    <>
      <div>
        {cartProduct.length === 0 && (
          <label for="artisan">Cart is empty..</label>
        )}
      </div>
      {cartProduct.map((item) => (
        <div class="border-bottom">
          <form>
            <div class="form-group" key={item.id}>
              <table class="table">
                <tbody>
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        id="itemsDetails"
                        onClick={() => handleClick(item)}
                      />{" "}
                      <label for="itemsDetails">{item.title} </label>{" "}
                    </td>
                    <td>
                      <label for="itemsDetails">{item.price} kr </label>
                    </td>
                    <td>
                      <button onClick={() => onAdd(item)} className="add">
                        <span class="fa fa-plus"></span>
                      </button>
                      <label className="lblqty" for="itemsDetails">
                        {item.qty}
                      </label>
                      <button onClick={() => onRemove(item)} className="remove">
                        <span class="fa fa-minus"></span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>{" "}
            </div>
          </form>
        </div>
      ))}
    </>
  );
}

export default ShoppingCart;
