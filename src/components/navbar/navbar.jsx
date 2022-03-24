import React from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../../contexts/auth-context"
import { useProduct } from "../../contexts/product-context"
import "./navbar.css"

export function Navbar () {
    const {cart,wishlist} = useProduct()
    const {user} = useAuth()
    return(
        <nav className="nav-container align-center">
          <Link className="text-decor-none" to="/">
            <div className="p2 nav-logo flex-r">
                <i className="app-icon fab fa-pagelines"></i>
                <span className="app-name">FloraShop</span>
            </div>
          </Link>
  
          <div className="nav-link">
          <Link to="/"><button className="btn btn-link nav-btn">Home</button></Link>
          <Link to=""><button className="btn btn-link nav-btn">Catalouges</button></Link>
          <Link to=""><button className="btn btn-link nav-btn">Garden Guide</button></Link>
          <Link to=""><button className="btn btn-link nav-btn">About us</button></Link>
          </div>
  
          <div className="search-input input-container">
              <input className="input-icon-field input-field" type="text" placeholder="Search" />
              <i className="input-icon fas fa-search"></i>
          </div>
  
          <div className="flex-r nav-icons">
          {user?<div className="flex-c center">
          <Link to="/profile" className="m1 badge-container">
              <i className="nav-icon badge-icon fas fa-user"></i>
          </Link>
          <span className="nav-icon-text">{`Hi,${user.firstName}`}</span>
          </div>
          :<div className="flex-c center">
          <Link to="/signin" className="m1 badge-container">
              <i className="nav-icon badge-icon fas fa-user"></i>
          </Link>
          <span className="nav-icon-text">Account</span>
          </div>
          }
  
          <div className="flex-c center">
          <div className="m1 badge-container">
              <Link to="/wishlist"><i className="nav-icon badge-icon far fa-heart"></i></Link>
              {(wishlist.length!==0)?
              <span className="badge badge-right badge-sm">{wishlist.length}</span>:<></>
              }
          </div>
          <span className="nav-icon-text">Wishlist</span>
          </div>
  
          <div className="flex-c center">
          <div className="m1 badge-container">
              <Link to="/cart"><i className="nav-icon badge-icon fas fa-shopping-cart"></i></Link>
              {(cart.length!==0)?
              <span className="badge badge-right badge-sm">{cart.length}</span>:<></>
                }
          </div>
          <span className="nav-icon-text">Cart</span>
          </div>
          </div>
  
        </nav>
    )
}