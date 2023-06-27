import "./cart.css";
import { CartCard } from "../../components/card/cart-card/cart-card";
import { useProduct } from "../../contexts/product-context";
import { useDocumentTitle } from "../../custom-hooks/useDocumentTitle";
import { PriceSection } from "./sub-components/price-section";
import CartImg from "../../assets/images/cart.svg";

const Cart = () => {
  useDocumentTitle("Cart");
  const { cart } = useProduct();
  return (
    <>
      <h4 className="cart-text">
        {cart.length === 0 ? "Your cart is Empty!" : "My Cart"}
      </h4>
      <h5 className="cart-text">
        {cart.length === 0 ? (
          <img
            className="empty-item-img responsive-img"
            src={CartImg}
            alt="empty-cart-img"
          />
        ) : (
          `Items: ${cart.length}`
        )}
      </h5>
      <main className="flex-r cart-section">
        {cart.length === 0 ? (
          <></>
        ) : (
          <>
            <section className="cart-card-section">
              {cart.map((cartItem) => (
                <CartCard key={cartItem._id} cartItem={cartItem} />
              ))}
            </section>
            <PriceSection />
          </>
        )}
      </main>
    </>
  );
};

export { Cart };
