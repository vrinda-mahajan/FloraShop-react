import { Footer, Navbar } from "../../components"
import { WishlistCard } from "../../components/card/wishlist-card/wishlist-card"
import { useProduct } from "../../contexts/product-context"
import { useDocumentTitle } from "../../custom-hooks/useDocumentTitle"
import "./wishlist.css"

const Wishlist = () => {
    useDocumentTitle("Wishlist")
    const {wishlist} = useProduct();
    return (
        <>
            <h4 className="wishlist-text">My Wishlist</h4>
            <h5  className="wishlist-text">{wishlist.length===0?`Wishlist is Empty!`:`Items: ${wishlist.length}`}</h5>
            <main className="wishlist-container flex-wrap">
                {wishlist.map((wishlistItem)=><WishlistCard wishlistItem={wishlistItem} />)}
            </main>
        </>
    )
}

export {Wishlist}