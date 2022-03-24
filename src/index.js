import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { CategoryProvider } from "./contexts/category-context";
import { ProductProvider } from "./contexts/product-context";
import { signupHandler } from "./custom-hooks/useSignup";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";

// Call make Server
makeServer();
// signupHandler();
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductProvider>
          <CategoryProvider>
            <App />
          </CategoryProvider>
        </ProductProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
