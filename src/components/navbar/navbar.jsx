import React from "react"
import "./navbar.css"

export function Navbar () {
    return(
        <nav className="nav-container align-center">
  
          <div className="p2 nav-logo flex-r">
              <i className="app-icon fab fa-pagelines"></i>
              <span className="app-name">FloraShop</span>
          </div>
  
          <div className="nav-link">
          <a href="#"><button className="btn btn-link nav-btn">Home</button></a>
          <a href="#featured-prod-section"><button className="btn btn-link nav-btn">Catalouges</button></a>
          <a href=""><button className="btn btn-link nav-btn">Garden Guide</button></a>
          <a href=""><button className="btn btn-link nav-btn">About us</button></a>
          </div>
  
          <div className="search-input input-container">
              <input className="input-icon-field input-field" type="text" placeholder="Search" />
              <i className="input-icon fas fa-search"></i>
          </div>
  
          <div className="flex-r nav-icons">
          <div className="flex-c center">
          <div className="m1 badge-container">
              <a href="./Pages/Authentication/Authentication.html"><i className="nav-icon badge-icon fas fa-user"></i></a>
          </div>
          <span className="nav-icon-text">Account</span>
          </div>
  
          <div className="flex-c center">
          <div className="m1 badge-container">
              <a href="./Pages/Wishlist/Wishlist.html"><i className="nav-icon badge-icon far fa-heart"></i></a>
              <span className="badge badge-right badge-sm">1</span>
          </div>
          <span className="nav-icon-text">Wishlist</span>
          </div>
  
          <div className="flex-c center">
          <div className="m1 badge-container">
              <a href="./Pages/Cart/Cart.html"><i className="nav-icon badge-icon fas fa-shopping-cart"></i></a>
              <span className="badge badge-right badge-sm">1</span>
          </div>
          <span className="nav-icon-text">Cart</span>
          </div>
          </div>
  
        </nav>
    )
}