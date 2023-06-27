import { WishlistCard } from "../../components/card/wishlist-card/wishlist-card";
import { useProduct } from "../../contexts/product-context";
import { useDocumentTitle } from "../../custom-hooks/useDocumentTitle";
import WishlistImg from "../../assets/images/wishlist.svg";
import "./wishlist.css";

const Wishlist = () => {
  useDocumentTitle("Wishlist");
  const { wishlist } = useProduct();
  return (
    <>
      <h4 className="wishlist-text">
        {wishlist.length === 0 ? "Wishlist is Empty!" : "My Wishlist"}
      </h4>
      <h5 className="wishlist-text">
        {wishlist.length === 0 ? (
          <div>
            <img
              className="empty-item-img responsive-img"
              src={WishlistImg}
              alt="Empty wishlist"
            />
          </div>
        ) : (
          `Items: ${wishlist.length}`
        )}
      </h5>
      <main className="wishlist-container flex-wrap">
        {wishlist.map((wishlistItem) => (
          <WishlistCard key={wishlistItem._id} wishlistItem={wishlistItem} />
        ))}
      </main>
    </>
  );
};

export { Wishlist };
