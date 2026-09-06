import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Card from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Products from "./pages/Products";
import Layout from "./layout";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductDetails from "./pages/ProductDetails";
import Category from "./pages/Category";

function App() {
  return (
    <>
      <Routes>

        <Route element={<Layout />}>

          {/* Home */}
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />

          {/* Cart */}
          <Route path="/card" element={<Card />} />

          {/* Wishlist */}
          <Route path="/wishlist" element={<Wishlist />} />

          {/* Products */}
          <Route path="/products" element={<Products />} />

          {/* Product Details */}
          <Route
            path="/products/:id"
            element={<ProductDetails />}
          />

          {/* Categories */}
          <Route
            path="/categories/:category"
            element={<Category />}
          />

        </Route>

        {/* Authentication */}
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

      </Routes>
    </>
  );
}

export default App;