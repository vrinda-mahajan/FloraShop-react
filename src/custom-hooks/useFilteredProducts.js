import { useProduct } from "../contexts/product-context"

export const useFilteredProducts = (products) => {
    let productList = [...products]
    const {sortBy,category,price,rating,searchText} = useProduct()

    if (category.length !== 0) 
        productList = productList.filter((item) => category.includes(item.categoryName));
    if (sortBy === "LOW_TO_HIGH")
        productList = productList.sort ((item1,item2)=>item1.price-item2.price);
    if (sortBy === "HIGH_TO_LOW")
        productList = productList.sort ((item1,item2)=>item2.price-item1.price);
    if (price>200) 
        productList = productList.filter((item) => item.price <= price);
    if (searchText.length !== 0) {
        productList = productList.filter((item) =>
            item.title.toLowerCase().includes(searchText.toLowerCase())
        );
    }
    productList = productList.filter((item)=>item.rating >= rating)

    return [...productList]
}