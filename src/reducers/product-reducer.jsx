export const initialReducerData = {
    sortBy:"",
    category:[],
    price:200,
    rating:0,
    productList:[],
    cart:[],
    wishlist:[],
}

export const productReducer = (state,action) => {
    switch (action.type){
        case "SET_PRODUCTS":
            return {...state,productList:action.payload}

        case "SORT_BY_PRICE_RANGE":
            return {...state,price:action.payload}

        case "SORT_BY_RATING":
            return {...state,rating:action.payload}

        case "SORT_BY_PRICE":
            if (action.payload==="LOW_TO_HIGH"){
                return{...state,sortBy:action.payload}}
            if (action.payload==="HIGH_TO_LOW"){
                return{...state,sortBy:action.payload}
            }
            break

        case "SORT_BY_CATEGORY":
        return state.category.includes(action.payload)
        ? { ...state,category: state.category.filter((item) => item !== action.payload) }
        : { ...state, category: [...state.category, action.payload] }

        case "CLEAR_ALL_FILTERS":
            return {
                ...state,
                sortBy:"",
                category:[],
                price:200,
                rating:0,}
                
        case "CHANGE_CART":
            return {...state,cart:action.payload}

        case "CHANGE_WISHLIST":
            return {...state,wishlist:action.payload}
        
        case "LOGOUT":
            return {...state,cart:[],wishlist:[]}
            
        default:
            return state
    }
}