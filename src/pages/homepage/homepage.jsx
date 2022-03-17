import "./homepage.css"
import {Navbar, Header, Footer} from "../../components/index.js"
import { BestSellerSection } from "./sub components/best-seller-section/best-seller-section";
import { FeatureSection } from "./sub components/featured-section/featured-section";
import { useDocumentTitle } from "../../custom-hooks/useDocumentTitle";

function HomePage() {
  useDocumentTitle('Home');
  return (
    <>
      <Navbar />        
      <Header />  
      <BestSellerSection />
      <FeatureSection />
      <Footer/>
    </>
  );
}

export default HomePage;