import "./App.css";
import { HomePage } from "./pages/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// mockman-js
import Mockman from "mockman-js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<>Product</>} />
        <Route path="/wishlist" element={<>Wishlist</>} />
        <Route path="/cart" element={<>Cart</>} />
        <Route path="/mockman-test" element={<Mockman />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
