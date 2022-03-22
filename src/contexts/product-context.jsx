import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { initialReducerData, productReducer } from "../reducers/product-reducer";

const ProductContext = createContext()

const ProductProvider = ({children}) => {
   const encodedToken = localStorage.getItem("token")
    const [state,dispatch] = useReducer(productReducer,initialReducerData)
    useEffect(
        ()=>(async() => {
        try {
            const {data:productList} = await axios.get("/api/products")
            dispatch({type:"SET_PRODUCTS",payload:productList.products})
        } 
        catch (error) {
            console.error(error)
        }
    })()
    , [])

    useEffect(
        ()=> {(async()=>{
            try {
                const response = await axios.get(
                  "/api/user/cart",
                    {headers: {
                        authoriztaion : encodedToken
                    }}
                    )
            if (response===200){
                dispatch({type:"CHANGE_CART",payload:response.data.cart})
            }
            }catch (error) {
                console.log(error)
            }
        })()
    },[encodedToken])
    
    const value = {
        sortBy:state.sortBy,
        category:state.category,
        price:state.price,
        rating:state.rating,
        productList:state.productList,
        cart:state.cart,
        wishlist:state.wishlist,
        dispatch:dispatch
    }
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}

const useProduct = () => useContext(ProductContext)

export {ProductProvider,useProduct}