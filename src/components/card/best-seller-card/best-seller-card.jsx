import React from "react"
export function BestSellerCard ({img,name,availability,price}) {
    return (
        <div className="m1 card card-vertical-container1">
              <img src={img} alt="Fiddle Leaf fig" className="card-img" />
              <div className="p1 card-text-container">
                      <h5 className="card-header">{name}</h5>
                      <div className="card-info">{availability}</div>
                      <div className="align-center">
                          <p className="card-price">Rs. {price}</p>
                          <button className="best-seller-icon btn btn-icon1 card-icon-btn">
                              <i className="far fa-heart"></i>
                          </button>
                      </div>  
              </div>
          </div>
    )
}