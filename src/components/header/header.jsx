import React from "react"
import "./header.css"
import spider from "../../assets/images/spider.jpg"

export function Header () {
    return (
        <main className="main">
          <div className="main-text">
              <h1 className="main-heading">Make your own Garden at home</h1>
              <p>Bring calm to your place with interior plants.</p>
              <h4>Flat 20% off</h4>
              <button className="main-btn btn btn-primary">Shop Now</button>
          </div>
          <img className="header-img responsive-img" src={spider} alt="Responsive img" />
        </main> 
    )
}