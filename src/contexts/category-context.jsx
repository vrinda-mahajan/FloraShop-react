import { createContext, useEffect, useReducer, useContext } from "react";
import axios from "axios";
import { categoryReducer } from "../reducers/category-reducer";

const CategoryContext = createContext();

const CategoryProvider = ({children}) => {
    
    const [categories,dispatch] = useReducer(categoryReducer,[])
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