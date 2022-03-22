
const ProductCard = ({productDetails}) => {
    const {img,title,inStock,rating,price,productDesc} = productDetails;
    return (
    <div className="card card-vertical-container2 product-card">
            <img src={img} alt={title} className="card-img"/>
            <div className="p1 card-text-container">
                <div className="card-heading flex-r">
                    <div>
                        <h5 className="card-header">{title}</h5>
                        <div className="rating-badge align-center"> 
                            {rating}<i className="rating-badge-star fa-solid fa-star"></i> | 10
                        </div>
                        <div className="card-info">{inStock ?"Stock available":"Stock Unavailable"}</div>
                    </div>
                    <p className="card-price m-left-auto">Rs. {price}</p>
                </div>
                <h6>{productDesc}</h6>
                <div className="card-btns align-center">
                    <button className="btn btn-with-icon"><i className="p1-right fas fa-shopping-cart"></i>Add to cart</button>
                    <button className="btn btn-icon1 card-icon-btn m-left-auto"><i className="far fa-heart"></i></button>
                </div>
            </div> 
        </div>
    )
}

export {ProductCard}