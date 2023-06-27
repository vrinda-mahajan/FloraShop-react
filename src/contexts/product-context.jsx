import axios from "axios";
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { initialReducerData, productReducer } from "../reducers/product-reducer";

const ProductContext = createContext()

const ProductProvider = ({children}) => {
    const [state,dispatch] = useReducer(productReducer,initialReducerData)
    const [isLoading,setIsLoading] = useState(true);
    useEffect(
        ()=>(async() => {
        try {
            const {data:productList} = await axios.get("/api/products")
            dispatch({type:"SET_PRODUCTS",payload:productList.products})
            setIsLoading(false);
        } 
        catch (error) {
            console.error(error)
        }
    })()
    , [])

    const value = {
        sortBy:state.sortBy,
        category:state.category,
        price:state.price,
        rating:state.rating,
        productList:state.productList,
        cart:state.cart,
        wishlist:state.wishlist,
        searchText: state.searchText,
        isLoading:isLoading,
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