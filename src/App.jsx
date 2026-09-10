import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Card from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Orders from "./pages/orders";
import Checkout from "./pages/checkout";

import Layout from "./layout";
import ProtectedRoute from "./components/ProtectedRoute";

import { Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Routes>

      {/* ================= PUBLIC ROUTES ================= */}

      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route
          path="/products/:id"
          element={<ProductDetails />}
        />

        <Route path="/wishlist" element={<Wishlist />} />

        <Route path="/register" element={<Register />} />

        {/* Login WITH your Navbar */}
        <Route path="/login" element={<Login />} />
      </Route>


      {/* ================= PROTECTED ROUTES ================= */}

      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>

          <Route path="/card" element={<Card />} />

          <Route path="/orders" element={<Orders />} />

          <Route path="/checkout" element={<Checkout />} />

        </Route>
      </Route>

    </Routes>
  );
}

export default App;