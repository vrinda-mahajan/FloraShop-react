import { useProduct } from "../contexts/product-context"

export const useFilteredProducts = (products) => {
    let productList = [...products]
    const {sortBy,category,price,rating} = useProduct()
    const sortByCategory = (productList,category) => {

        const {Plants,Planters,Fertilizers,Tools} = category;
        const categoryList = []
        if (Plants===false & Planters===false & Fertilizers===false & Tools===false){
            return productList
        }
        if (Plants) {
            let newList = productList.filter(
              (item) => "Plants" === item.categoryName
            );
            categoryList.push(...newList);
        }
        if (Planters) {
            let newList = productList.filter(
              (item) => "Planters" === item.categoryName
            );
            categoryList.push(...newList);
        }
        if (Fertilizers) {
            let newList = productList.filter(
              (item) => "Fertilizers" === item.categoryName
            );
            categoryList.push(...newList);
        }
        if (Tools) {
            let newList = productList.filter(
              (item) => "Tools" === item.categoryName
            );
            categoryList.push(...newList);
        }
        return categoryList
    }
    if (sortBy === "LOW_TO_HIGH")
        productList = productList.sort ((item1,item2)=>item1.price-item2.price)
    if (sortBy === "HIGH_TO_LOW")
        productList = productList.sort ((item1,item2)=>item2.price-item1.price)
    if (price>200) {
        productList = productList.filter((item) => item.price <= price);
    }
    productList = productList.filter((item)=>item.rating >= rating)

    const finalList = sortByCategory(productList,category)

    return [...finalList]
}