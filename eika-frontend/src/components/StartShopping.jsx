import React, { useState } from "react";
import data from "./ShoppingList.json";

function StartShopping() {
  return (
    <>
      <div id="products">
        <div class="container mt-5">
          <div class="row">
            {data.map((item) => {
              return (
                <div class="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                  <div class="card">
                    <img
                      className="card-img-top"
                      alt=""
                      srcset=""
                      src={`../../img/${item.imageUrl}`}
                    />
                    <div class="card-body">
                      <h5>
                        <b>{item.title}</b>
                      </h5>
                      <div class="d-flex flex-row my-2">
                        <div class="text-muted">{item.price}</div>
                      </div>
                      <button class="btn w-100 rounded my-2">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default StartShopping;
