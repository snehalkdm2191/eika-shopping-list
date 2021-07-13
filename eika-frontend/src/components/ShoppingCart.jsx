import React from "react";

function ShoppingCart({ cartItem, onAdd }) {
  return (
    <>
      <div>
        {cartItem.length === 0 && <label for="artisan">Cart is empty..</label>}
      </div>
      {cartItem.map((item) => (
        <div class="py-2 border-bottom ml-3">
          <div id="orange">
            <span class="fa fa-minus"></span>
          </div>
          <form>
            <div class="form-group" key={item.id}>
              {" "}
              <input type="checkbox" id="itemsDetails" />{" "}
              <label for="itemsDetails">
                {item.title} {item.price}{" "}
              </label>{" "}
            </div>
          </form>
        </div>
      ))}
    </>
  );
}

export default ShoppingCart;
