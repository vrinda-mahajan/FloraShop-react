import axios from "axios";
import { useProduct } from "../../../contexts/product-context";

const WishlistCard = ({wishlistItem}) => {

    const {dispatch} = useProduct()
    const encodedToken = localStorage.getItem("token")
    
    const removeFromWishlist = async(_id) => {

        try {
            const response = await axios.delete(
                `/api/user/wishlist/${_id}`,
                {headers:{
                    authorization:encodedToken
                }}
            )
            dispatch ({type:"CHANGE_WISHLIST",payload:response.data.wishlist})

        }
        catch(error) {
            console.error(error)
        }
    }
    const addToCart = async(productDetails) => {
        removeFromWishlist(productDetails._id)
        try {
            const response = await axios.post(
                "/api/user/cart",
                {product:productDetails},
                {
                    headers:{
                        authorization:encodedToken
                    }
                })
            dispatch({type:"CHANGE_CART",payload:response.data.cart})
        } catch (error) {
            console.error(error)
        }
    }

    const {_id,img,title,inStock,rating,price,productDesc} = wishlistItem;
    return (
        <div className="m2 card card-vertical-container2">
            <img src={img} alt="croton" className="card-img" />
            <i onClick={()=>removeFromWishlist(_id)} className="card-close-btn fas fa-times"></i>
            <div className="p1 card-text-container">
                <div className="card-heading flex-r">
                    <div>
                        <h5 className="card-header">{title}</h5>
                        <div className="card-info">{inStock ?"Stock available":"Stock Unavailable"}</div>
                        <div className="rating-badge align-center"> 
                            {rating}<i className="rating-badge-star fa-solid fa-star"></i> | 10
                        </div>
                    </div>
                    <p className="card-price m-left-auto">Rs. {price}</p>
                </div>
                <h6 className="card-desc text-xsm text-light-weight">{productDesc}</h6>
                <div className="card-btns">
                    <button onClick={()=>addToCart(wishlistItem)} className="btn btn-with-icon">
                        <i className="p1-right fas fa-shopping-cart"></i>Add to cart
                    </button>
                </div>
            </div> 
        </div>
    )
}

export {WishlistCard}