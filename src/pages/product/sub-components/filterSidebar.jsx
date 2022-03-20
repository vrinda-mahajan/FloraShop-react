import { useCategoryContext } from "../../../contexts/category-context.jsx";
import { useProduct } from "../../../contexts/product-context.jsx";
const FilterSidebar = () => {
    const {categories} = useCategoryContext();
    const ratingNumbers = [4,3,2,1];
    const {
        sortBy,
        category,
        price,
        rating,
        productList,
        dispatch} = useProduct();
    
    const handleSort = (sortType)=> {
        return dispatch({type:"SORT_BY_PRICE",payload:sortType})
    }

    return (
        <aside className="filter-sidebar">
        <div className="filter-sticky align-center">
        <h6 className="filter">FILTERS</h6>
        <button onClick={()=>
            dispatch({type:"CLEAR_ALL_FILTERS",payload:productList}
            )} className="btn-clear btn btn-link-underline">
            Clear All</button>
        </div>
        <hr/>

        <h6 className="filter-heading">Price</h6>
        <form>
            <label className="slider-label" htmlFor=""><span>200</span> <span>600</span> <span>1000</span></label>
            <input onChange={(e)=> dispatch({type:"SORT_BY_PRICE_RANGE",payload:e.target.value})} value={price} type="range" min="200" max="1000" className="slider" />
        </form>

        <h6 className="filter-heading">Category</h6>
        <form>
            {categories.map(({categoryName})=>
                <>
                <input onClick={()=>dispatch({type:"SORT_BY_CATEGORY",payload:categoryName})} checked={category[categoryName]} id={categoryName} type="checkbox"/>
                <label htmlFor={categoryName}>{categoryName}</label><br/>
                </>
            )}
        </form>

        <h6 className="filter-heading">Rating</h6>
        <form>
            {ratingNumbers.map((num)=> 
            <>
                <input onChange={()=>dispatch({type:"SORT_BY_RATING",payload:num})} checked={rating===num?true:false} id={`${num}stars`} type="radio" name="rating"/>
                <label htmlFor={`${num}stars`}>{num} Stars & above</label><br/>
            </>)}
        </form>

        <h6 className="filter-heading">Sort by</h6>
        <form>
            <input onChange={()=>handleSort("LOW_TO_HIGH")} checked={sortBy==="LOW_TO_HIGH"?true:false} id="low-to-high" type="radio" name="sort-by"/>
            <label htmlFor="low-to-high">Price - Low to High</label><br/>
            <input onChange={()=>handleSort("HIGH_TO_LOW")} checked={sortBy==="HIGH_TO_LOW"?true:false} id="high-to-low" type="radio" name="sort-by"/>
            <label htmlFor="high-to-low">Price - High to Low</label><br/>
        </form>
    </aside>
    )
}

export {FilterSidebar}