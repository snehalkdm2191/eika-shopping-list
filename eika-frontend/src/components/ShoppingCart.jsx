import React from "react";

function ShoppingCart({ cartItem, onAdd, cartProduct, onRemove }) {
  return (
    <>
      <div>
        {cartProduct.length === 0 && (
          <label for="artisan">Cart is empty..</label>
        )}
      </div>
      {cartProduct.map((item) => (
        <div class="py-2 border-bottom ml-3">
          <div id="orange">
            <span class="fa fa-minus"></span>
          </div>
          <form>
            <div class="form-group" key={item.id}>
              {" "}
              <input type="checkbox" id="itemsDetails" />{" "}
              <label for="itemsDetails">
                {item.title}{" "}
              </label>{" "}
              <label for="itemsDetails">
                {item.price}{" "}
              </label>
              <div className="text-center">
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
              <label for="itemsDetails">{item.qty}</label>
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>
              </div>
            </div>
          </form>
        </div>
      ))}
    </>
  );
}

export default ShoppingCart;
