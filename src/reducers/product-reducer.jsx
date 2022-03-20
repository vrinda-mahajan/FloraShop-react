export const initialReducerData = {
    sortBy:"",
    category:{Plants:false,Planters:false,Fertilizers:false,Tools:false},
    price:200,
    rating:0,
    productList:[],
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
            console.log(action.payload)
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
        default:
            return state
    }
}