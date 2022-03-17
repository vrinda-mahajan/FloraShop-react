import { createContext, useEffect, useReducer, useContext } from "react";
import axios from "axios";

const CategoryContext = createContext();

const CategoryProvider = ({children}) => {
    const reducer = (categories,action) => {
        switch (action.type) {
            case "SET_CATEGORIES":
                return [...action.payload]
            default:
                return categories
        }
    }
    const [categories,dispatch] = useReducer(reducer,[])
    useEffect(()=>{
        axios.get("/api/categories")
            .then((response)=>{
                dispatch({
                    type:"SET_CATEGORIES",
                    payload:response.data.categories })
            })
    },[])
    return (
    <CategoryContext.Provider value={{categories,dispatch}}>
        {children}
    </CategoryContext.Provider>)
}

const useCategoryContext = () => useContext(CategoryContext);

export {CategoryProvider, useCategoryContext}