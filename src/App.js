import "./App.css";
import { Cart, HomePage, ProductPage, Profile, Signin, Signup, Wishlist} from "./pages/index";
import { Routes, Route, useLocation } from "react-router-dom";

// mockman-js
import Mockman from "mockman-js";
import { Footer, Navbar } from "./components";

function App() {
  const location = useLocation();
  return (
    <>
      {
      !["/signin", "/signup"].includes(location.pathname) && <Navbar />
      }
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mockman-test" element={<Mockman />} />
      </Routes>
      {
      !["/signin", "/signup"].includes(location.pathname) && <Footer />
      }
    </>
  );
}

export default App;
