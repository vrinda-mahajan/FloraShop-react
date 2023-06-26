import "./best-seller-section.css";
import { BestSellerCard } from "../../../../components/index.js";
import { useProduct } from "../../../../contexts/product-context";

export function BestSellerSection() {
  const { productList } = useProduct();
  return (
    <section id="best-sellers" className="best-seller-section">
      <div className="best-seller-text">
        <h3 className="p1">Top best seller Products</h3>
        <p>Find what others are having on their garden</p>
      </div>
      <div className="flex-r best-seller-cards">
        {productList
          .filter((product) => product.rating >= 4.5)
          .map((productDetails) => {
            return (
              <BestSellerCard
                key={productDetails._id}
                productDetails={productDetails}
              />
            );
          })}
      </div>
    </section>
  );
}
