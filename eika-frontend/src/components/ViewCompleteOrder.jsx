import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import OrderApi from "../api/OrderApi";

function ViewCompleteOrder() {
  const [viewProduct, setViewProduct] = useState([]);
  const fetchPosts = async () => {
    const response = await OrderApi.getAll();
    setViewProduct(response.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div class="container mb-4">
      <img
            alt=""
            srcset=""
            src="../../img/bg5.gif"
          />
      {viewProduct.map((product) => (
        <div class="row">
          <div class="col-12">
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col"> </th>
                    <th scope="col">Product</th>
                    <th scope="col">Quantity</th>
                    <th scope="col" class="text-right">
                      Price
                    </th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img
                        className="ViewCartImg"
                        alt=""
                        src={`../../img/${product.imageUrl}`}
                      />{" "}
                    </td>
                    <td>{product.title}</td>
                    <td>
                      <td>{product.qty}</td>
                    </td>
                    <td class="text-right">{product.price} kr</td>
                    <td class="text-right">
                      <button class="btn btn-sm btn-danger">
                        <i class="fa fa-trash"></i>{" "}
                      </button>{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="col mb-2">
            <div class="row">
              <div class="col-sm-12 text-center">
                <NavLink to="/" class="btn btn-block btn-light" exact>
                  Continue Shopping
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ViewCompleteOrder;
