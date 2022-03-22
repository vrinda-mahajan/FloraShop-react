import "./homepage.css"
import { Header } from "../../components/index.js"
import { BestSellerSection } from "./sub components/best-seller-section/best-seller-section";
import { FeatureSection } from "./sub components/featured-section/featured-section";
import { useDocumentTitle } from "../../custom-hooks/useDocumentTitle";

function HomePage() {
  useDocumentTitle('Home');
  return (
    <>
      <Header />  
      <BestSellerSection />
      <FeatureSection />
    </>
  );
}

export default HomePage;