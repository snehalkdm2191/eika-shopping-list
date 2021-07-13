import React from "react";

function StartShopping({ product, onAdd }) {
  return (
    <>
      <div class="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
        <div class="card">
          <img
            className="card-img-top"
            alt=""
            srcset=""
            src={`../../img/${product.imageUrl}`}
          />
          <div class="card-body">
            <h5>
              <b>{product.title}</b>
            </h5>
            <div class="d-flex flex-row my-2">
              <div class="text-muted">{product.price}</div>
            </div>
            <button
              class="btn w-100 rounded my-2"
              onClick={() => onAdd(product)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default StartShopping;
