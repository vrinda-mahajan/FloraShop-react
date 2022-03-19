import React from "react"
import { Link } from "react-router-dom"

export function FeatureCard ({img,category}) {
    return(
        <div >
              <img className="featured-img" src={img} alt="Planters" />
              <div className="featured-overlay">
                  <h4>{category}</h4>
                  <Link to="/product"><button className="btn btn-primary btn-featured">Shop Now</button></Link>
              </div>
        </div>
    )
}