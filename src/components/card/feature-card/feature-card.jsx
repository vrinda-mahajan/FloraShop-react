import React from "react"

export function FeatureCard ({img,category}) {
    return(
        <div >
              <img className="featured-img" src={img} alt="Planters" />
              <div className="featured-overlay">
                  <h4>{category}</h4>
                  <a href="./Pages/ProductPage/ProductPage.html"><button className="btn btn-primary btn-featured">Shop Now</button></a>
              </div>
        </div>
    )
}