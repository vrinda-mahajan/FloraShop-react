import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./productDetails.css";
import axios from "axios";
import { useProduct } from "../../contexts/product-context";

const ProductDetails = () => {
  const { id: productId } = useParams();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { cart, wishlist, dispatch } = useProduct();
  const encodedToken = localStorage.getItem("token");
  //   console.log(productId);

  const getProduct = async () => {
    try {
      const {
        data: { product },
      } = await axios.get(`/api/products/${productId}`);
      setProduct(product);
      setIsLoading(false);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  const addToCart = async (productDetails) => {
    try {
      const response = await axios.post(
        "/api/user/cart",
        { product: productDetails },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      dispatch({ type: "CHANGE_CART", payload: response.data.cart });
    } catch (error) {
      console.error(error);
    }
  };
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

  return isLoading ? (
    <>Loading...</>
  ) : (
    <div className="product-details-card">
      <div className="product-details-card-img-container">
        <img src={product?.img} alt={product?.title} width="200" height="250" />
      </div>
      <div className="product-details-card-details">
        <h4 className="product-details-card-title">{product?.title}</h4>
        <div className="product-details-card-title-heading">
          <h5>₹{product?.price}</h5>
          <div className="rating-badge align-center">
            {product?.rating}
            <i className="rating-badge-star fa-solid fa-star"></i> | 10
          </div>
        </div>
        <div className="product-details-card-description">
          <h4>Product details</h4>
          <p>{product?.productDesc}</p>
        </div>
        <div>
          {cart.find((cartItem) => cartItem._id === product?._id) ? (
            <button className="btn btn-with-icon">
              <i className="p1-right fas fa-shopping-cart"></i>
              Already in cart
            </button>
          ) : (
            <button
              onClick={() => addToCart(product)}
              className="btn btn-with-icon"
            >
              <i className="p1-right fas fa-shopping-cart"></i>
              Add to cart
            </button>
          )}

          {wishlist.find((wishlistItem) => wishlistItem.id === product.id) ? (
            <button className="m1 btn btn-primary-outline">Wishlisted</button>
          ) : (
            <button
              onClick={() => addToWishlist(product)}
              className="m1 btn btn-primary-outline"
            >
              Add to Wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export { ProductDetails };
