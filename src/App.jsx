import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Card from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

import Layout from "./layout";
import ProtectedRoute from "./components/ProtectedRoute";
import Checkout from "./pages/checkout";
import { Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Routes>

      {/* Public Routes */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/products/:id"
          element={<ProductDetails />}
        />
        <Route path="/wishlist" element={<Wishlist />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="/card" element={<Card />} />
          
        </Route>
      </Route>

      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    <Route path="/checkout" element={<Checkout/>} />
    </Routes>
  );
}

export default App;