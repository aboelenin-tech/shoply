import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="container-fluid footer py-5">
      <div className="row g-4 text-light">

        {/* Brand */}
        <div className="col-12 col-lg-3">
          <h3 className="fw-bold">Shoply</h3>

          <p className="text-light opacity-75">
            A modern marketplace for everyday essentials — fast delivery,
            honest prices and a 30-day return policy on every order.
          </p>

          <div className="mt-4">
            <i className="bi bi-facebook mx-2 fs-5"></i>
            <i className="bi bi-instagram mx-2 fs-5"></i>
            <i className="bi bi-twitter-x mx-2 fs-5"></i>
          </div>
        </div>

        {/* Shop */}
        <div className="col-12 col-sm-6 col-lg-3">
          <h5 className="fw-bold mb-4">Shop</h5>

          <p>
            <Link
              to="/products"
              className="text-light text-decoration-none opacity-75"
            >
              All Products
            </Link>
          </p>

          <p>
            <Link
              to="/products"
              className="text-light text-decoration-none opacity-75"
            >
              New Arrivals
            </Link>
          </p>

          <p>
            <Link
              to="/products"
              className="text-light text-decoration-none opacity-75"
            >
              Best Sellers
            </Link>
          </p>
        </div>

        {/* Categories */}
        <div className="col-12 col-sm-6 col-lg-3">
          <h5 className="fw-bold mb-4">Categories</h5>

          <p>
            <Link
              to="/categories/electronics"
              className="text-light text-decoration-none opacity-75"
            >
              Electronics
            </Link>
          </p>

          <p>
            <Link
              to="/categories/beauty"
              className="text-light text-decoration-none opacity-75"
            >
              Beauty
            </Link>
          </p>

          <p>
            <Link
              to="/categories/furniture"
              className="text-light text-decoration-none opacity-75"
            >
              Furniture
            </Link>
          </p>
        </div>

        {/* Customer Service */}
        <div className="col-12 col-sm-6 col-lg-3">
          <h5 className="fw-bold mb-4">Customer Service</h5>

          <p>
            <Link
              to="/wishlist"
              className="text-light text-decoration-none opacity-75"
            >
              Wishlist
            </Link>
          </p>

          <p>
            <Link
              to="/card"
              className="text-light text-decoration-none opacity-75"
            >
              Cart
            </Link>
          </p>

          <p>
            <Link
              to="/login"
              className="text-light text-decoration-none opacity-75"
            >
              Login
            </Link>
          </p>
        </div>

      </div>

      <hr className="border-light opacity-25 mt-5" />

      <div className="text-center text-light opacity-75">
        <small>
          © 2026 Shoply. All rights reserved.
        </small>
      </div>
    </footer>
  );
}

export default Footer;