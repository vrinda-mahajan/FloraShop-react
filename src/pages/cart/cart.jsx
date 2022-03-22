import "./cart.css"
import { CartCard } from "../../components/card/cart-card/cart-card"
import { useProduct } from "../../contexts/product-context";
import { useDocumentTitle } from "../../custom-hooks/useDocumentTitle"
import { PriceSection } from "./sub-components/price-section";


const Cart = () => {
    useDocumentTitle("Cart")
    const {cart} = useProduct();
    return (
        <>
        <h4 className="cart-text">My Cart</h4>
        <h5  className="cart-text">{cart.length===0?`Your cart is Empty!`:`Items: ${cart.length}`}</h5>
        <main className="flex-r cart-section">
            <section className="cart-card-section">
                {cart.map((cartItem)=><CartCard cartItem={cartItem} />)}
            </section>
            <PriceSection  />
        </main>
        </>
    )
}

export {Cart}