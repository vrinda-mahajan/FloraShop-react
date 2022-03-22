import axios from "axios"
import { useProduct } from "../../../contexts/product-context"

export const CartCard = ({cartItem}) => {
    const encodedToken = localStorage.getItem("token")
    const {dispatch} = useProduct()
    console.log(cartItem.qty)
    const removeFromCart = async(_id) => {
        try {
            const response = await axios.delete(
                `/api/user/cart/${_id}`,
                {headers:{
                    authorization:encodedToken
                }}
                )
            dispatch({type:"REMOVE_FROM_CART",payload:response.data.cart})
        } catch (error) {
            console.error(error)
        }
    }
    const moveToWishlist = async(cartItem) => {
        removeFromCart(cartItem._id)
        try{
            const response = await axios.post(
                "/api/user/wishlist",
                {product:cartItem},
                {
                    headers:{
                    authorization:encodedToken
                    },
            })
            dispatch({type:"ADD_TO_WISHLIST",payload:response.data.wishlist})
        } catch (error) {
            console.error(error)
        }

    }

    const setQuantity = async(_id,operation) => {
        if (operation==="Increment"){
            try {
                const response = await axios.post(
                    `/api/user/cart/${_id}`,
                    {action:{
                        type:"increment"
                    }},
                    {
                        headers:{
                            authorization:encodedToken
                    }}
                    )
                dispatch({type:"INCREMENT_QTY",payload:response.data.cart})
            } catch (error) {
                console.log(error)
            }
        }
        else {
            try {
                const response = await axios.post(
                    `/api/user/cart/${_id}`,
                    {action:{
                        type:"decrement"
                    }},
                    {
                        headers:{
                            authorization:encodedToken
                    }}
                    )
                dispatch({type:"DECREMENT_QTY",payload:response.data.cart})
            } catch (error) {
                console.log(error)
            }
        }
    }
    const {_id,img,title,inStock,rating,price,qty,productDesc} = cartItem;
    return (
        <div className="m2 card flex-r card-horizontal-container">
                <img src={img} alt="croton" className="card-img" />
                <div className="card-text-container">
                    <h5 className="card-header">{title}</h5>
                    <div className="card-info">{inStock ?"Stock available":"Stock Unavailable"}</div>
                    <p className="card-price">Rs. {price}</p>
                    <div className="rating-badge align-center"> 
                            {rating}<i className="rating-badge-star fa-solid fa-star"></i> | 10
                    </div>
                    <p>{productDesc}</p>
                        <div className="align-center">
                            <h6>Quantity :</h6>
                            <button disabled={qty<=1} onClick={()=>setQuantity(_id,"Decrement")} className="cart-card-btn"><i className="fas fa-minus"></i></button>
                            <span className="product-quantity">{qty}</span>
                            <button onClick={()=>setQuantity(_id,"Increment")} className="cart-card-btn"><i className="fas fa-plus"></i></button>
                        </div>
                    <div className="align-center">
                        <button onClick={()=>moveToWishlist(cartItem)} className="btn btn-primary">Move to Wishlist</button>
                        <button onClick={()=>removeFromCart(_id)} className="m1 btn btn-primary-outline">Remove from cart</button>           
                    </div>
                </div> 
            </div>
    )
}