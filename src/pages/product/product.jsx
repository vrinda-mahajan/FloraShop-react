import "./product.css"
import { Footer,Navbar } from "../../components"
import { FilterSidebar } from "./sub-components/filterSidebar"
import { ProductListing } from "./sub-components/productListing"

const ProductPage = () => {
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

 {/*<div className="card card-vertical-container2 product-card">
            <div className="badge-container">
                <span className="badge-text">NEW</span>
                <img src="../../assets/images/planter1.jpg" alt="planter" className="card-img"/>
            </div>
            <div className="p1 card-text-container">
                <div className="card-heading flex-r">
                    <div>
                        <h5 className="card-header">Planter</h5>
                        <div className="card-info">Stock available</div>
                    </div>
                    <p className="card-price m-left-auto">Rs. 699</p>
                </div>
                <h6>Neque porro quisquam est qui  adipisci velit...</h6>
                <div className="card-btns align-center">
                    <button className="btn btn-with-icon"><i className="p1-right fas fa-shopping-cart"></i>Add to cart</button>
                    <button className="btn btn-icon1 card-icon-btn m-left-auto"><i className="far fa-heart"></i></button>
                </div>
            </div> 
        </div> */}