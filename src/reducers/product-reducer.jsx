export const initialReducerData = {
    sortBy:"",
    category:{Plants:false,Planters:false,Fertilizers:false,Tools:false},
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

        case "SORT_BY_CATEGORY":
            switch (action.payload) {
                case "Plants":
                    return {...state,category:{...state.category,Plants:!state.category.Plants}}
                case "Planters":
                    return {...state,category:{...state.category,Planters:!state.category.Planters}}
                case "Fertilizers":
                    return {...state,category:{...state.category,Fertilizers:!state.category.Fertilizers}}
                case "Tools":
                    return {...state,category:{...state.category,Tools:!state.category.Tools}}
            }

        case "CLEAR_ALL_FILTERS":
            return {
                ...state,
                sortBy:"",
                category:{Plants:false,Planters:false,Fertilizers:false,Tools:false},
                price:200,
                rating:0,}
                
        case "CHANGE_CART":
            return {...state,cart:action.payload}

        case "CHANGE_WISHLIST":
            return {...state,wishlist:action.payload}

        case "CHANGE_QTY":
            return {...state,cart:action.payload}
        
        case "LOGOUT":
            return {...state,cart:[],wishlist:[]}
        default:
            return state
    }
}