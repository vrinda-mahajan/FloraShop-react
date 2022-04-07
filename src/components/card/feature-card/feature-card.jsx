import React from "react"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { useProduct } from "../../../contexts/product-context"

export function FeatureCard ({img,category}) {
    const {dispatch} = useProduct()
    useEffect(()=>{
        dispatch({type:"CLEAR_ALL_FILTERS"})
    },[category])
    
    return(
        <div >
              <img className="featured-img" src={img} alt="Planters" />
              <div className="featured-overlay">
                  <h4>{category}</h4>
                  <Link to="/product"><button onClick={()=>dispatch({type:"SORT_BY_CATEGORY",payload:category})} className="btn btn-primary btn-featured">Shop Now</button></Link>
              </div>
        </div>
    )
}