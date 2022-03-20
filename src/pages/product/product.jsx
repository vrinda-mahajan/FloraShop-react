import "./product.css"
import { Footer,Navbar } from "../../components"
import { FilterSidebar } from "./sub-components/filterSidebar"
import { ProductListing } from "./sub-components/productListing"
import { useDocumentTitle } from "../../custom-hooks/useDocumentTitle"

const ProductPage = () => {
    useDocumentTitle("Products")
    return(
        <>
        <Navbar />
        <div className="flex-r">
            <FilterSidebar />
            <ProductListing />
        </div>
        <Footer />
        </>
    )
}

export {ProductPage}