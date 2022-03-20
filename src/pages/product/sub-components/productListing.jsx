import { ProductCard } from "../../../components/card/product-card/product-card"
import { useProduct } from "../../../contexts/product-context"
import { useFilteredProducts } from "../../../custom-hooks/useFilteredProducts"

const ProductListing = () => {
    const {productList} = useProduct()
    const filteredData = useFilteredProducts(productList)
    return (
        <main className="product-main flex-wrap">
            {(filteredData.length>0)?
                filteredData.map(
                    (productDetails)=><ProductCard key={productDetails._id} productDetails={productDetails} 
                />):<h4>"No Product found for this set of filters.☹️"</h4>}
        </main>
    )
}

export {ProductListing}