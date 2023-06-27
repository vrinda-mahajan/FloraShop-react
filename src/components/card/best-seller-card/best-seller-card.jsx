import React from "react";
import axios from "axios";
import { useProduct } from "../../../contexts/product-context";
import { Link } from "react-router-dom";

export function BestSellerCard({ productDetails }) {
  const { _id, img, title, inStock, price } = productDetails;
  const { dispatch, wishlist } = useProduct();
  const encodedToken = localStorage.getItem("token");

  const addToWishlist = async (productDetails) => {
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        { product: productDetails },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      dispatch({ type: "CHANGE_WISHLIST", payload: response.data.wishlist });
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromWishlist = async (_id) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${_id}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      dispatch({ type: "CHANGE_WISHLIST", payload: response.data.wishlist });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="m1 card card-vertical-container1">
      <img src={img} alt={title} className="card-img" />
      <div className="p1 card-text-container">
        <h5 className="card-header">{title}</h5>
        <div className="card-info">
          {inStock ? "Stock Available" : "Out of Stock"}
        </div>
        <div className="align-center">
          <p className="card-price">Rs. {price}</p>
          {wishlist.find(
            (wishlistItem) => wishlistItem.id === productDetails.id
          ) ? (
            <button
              onClick={() => removeFromWishlist(_id)}
              className="wishlist-btn-clicked btn btn-icon2 m-left-auto best-seller-icon"
            >
              <i className="fa-solid fa-heart"></i>
            </button>
          ) : localStorage.token ? (
            <button
              onClick={() => addToWishlist(productDetails)}
              className=" btn btn-icon2 card-icon-btn best-seller-icon"
            >
              <i className="far fa-heart"></i>
            </button>
          ) : (
            <Link
              to="/signin"
              className="best-seller-icon btn btn-icon2 card-icon-btn m-left-auto"
            >
              <i className="far fa-heart"></i>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
