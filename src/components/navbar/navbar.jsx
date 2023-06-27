import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import { useProduct } from "../../contexts/product-context";
import "./navbar.css";

export function Navbar() {
  const { cart, wishlist, dispatch } = useProduct();
  const { user } = useAuth();
  const encodedToken = localStorage.getItem("token");

  let timer = useRef();
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      dispatch({ type: "SEARCH_TEXT_CHANGED", payload: input.trim() });
      if (input.trim().length > 0) {
        navigate("/product");
      }
    }, 800);
  }, [input]);

  return (
    <nav className="nav-container align-center">
      <Link className="text-decor-none" to="/">
        <div className="p2 nav-logo flex-r">
          <i className="app-icon fab fa-pagelines"></i>
          <span className="app-name">FloraShop</span>
        </div>
      </Link>

      <div className="nav-link">
        <Link to="/">
          <button className="btn btn-link nav-btn">Home</button>
        </Link>
        <a href="/#best-sellers">
          <button className="btn btn-link nav-btn">Best sellers</button>
        </a>
        <a href="/#categories">
          <button className="btn btn-link nav-btn">Categories</button>
        </a>
        <Link to="/product">
          <button className="btn btn-link nav-btn">Products</button>
        </Link>
      </div>

      <div className="search-input input-container">
        <input
          onChange={(e) => setInput(e.target.value)}
          className="input-icon-field input-field"
          type="text"
          placeholder="Search"
        />
        <i className="input-icon fas fa-search"></i>
      </div>

      <div className="flex-r nav-icons">
        {user ? (
          <div className="flex-c center">
            <Link to="/profile" className="m1 badge-container">
              <i className="nav-icon badge-icon fas fa-user"></i>
            </Link>
            <span className="nav-icon-text">{`Hi,${user.firstName}`}</span>
          </div>
        ) : (
          <div className="flex-c center">
            <Link to="/signin" className="m1 badge-container">
              <i className="nav-icon badge-icon fas fa-user"></i>
            </Link>
            <span className="nav-icon-text">Account</span>
          </div>
        )}

        <div className="flex-c center">
          <div className="m1 badge-container">
            <Link to={encodedToken ? "/wishlist" : "/signin"}>
              <i className="nav-icon badge-icon far fa-heart"></i>
            </Link>
            {wishlist.length !== 0 ? (
              <span className="badge badge-right badge-sm">
                {wishlist.length}
              </span>
            ) : (
              <></>
            )}
          </div>
          <span className="nav-icon-text">Wishlist</span>
        </div>

        <div className="flex-c center">
          <div className="m1 badge-container">
            <Link to={encodedToken ? "/cart" : "/signin"}>
              <i className="nav-icon badge-icon fas fa-shopping-cart"></i>
            </Link>
            {cart.length !== 0 ? (
              <span className="badge badge-right badge-sm">{cart.length}</span>
            ) : (
              <></>
            )}
          </div>
          <span className="nav-icon-text">Cart</span>
        </div>
      </div>
    </nav>
  );
}
