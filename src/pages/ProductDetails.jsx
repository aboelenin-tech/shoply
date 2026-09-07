import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useProductStore from "../store/store";
import useCartStore from "../store/cartStore";
import useWishlistStore from "../store/wishlistStore";
import useAuthStore from "../store/authStore";
import toast from "react-hot-toast";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = useProductStore((state) => state.products);

  const addToCart = useCartStore((state) => state.addToCart);

  const wishlist = useWishlistStore((state) => state.wishlist);
  const addToWishlist = useWishlistStore(
    (state) => state.addToWishlist
  );
  const removeFromWishlist = useWishlistStore(
    (state) => state.removeFromWishlist
  );

  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated
  );

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h3>Product not found</h3>

        <Link
          to="/products"
          className="btn btn-primary mt-3"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  const isInWishlist = wishlist.some(
    (item) => item.id === product.id
  );

  const oldPrice = (
    product.price /
    (1 - product.discountPercentage / 100)
  ).toFixed(2);

  // Wishlist
  const handleWishlist = () => {
    if (!isAuthenticated) {
      toast.error("Please login to use wishlist");
      navigate("/login");
      return;
    }

    if (isInWishlist) {
      removeFromWishlist(product.id);
      toast.success("Removed from wishlist");
    } else {
      addToWishlist(product);
      toast.success(`${product.title} added to wishlist`);
    }
  };

  // Cart
  const handleAddToCart = () => {
    if (!isAuthenticated) {
      toast.error("Please login to add products to cart");
      navigate("/login");
      return;
    }

    addToCart(product);
    toast.success(`${product.title} added to cart!`);
  };

  return (
    <div className="container py-5">
      {/* Back */}
      <Link
        to="/products"
        className="text-decoration-none mb-4 d-inline-block"
      >
        <i className="bi bi-arrow-left me-2"></i>
        Back to Products
      </Link>

      <div className="row g-5">
        {/* Product Image */}
        <div className="col-12 col-md-6">
          <div className="bg-light rounded-4 p-4 text-center h-100 d-flex align-items-center justify-content-center">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="img-fluid"
              style={{
                maxHeight: "450px",
                objectFit: "contain",
              }}
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="col-12 col-md-6">
          <small className="text-primary fw-semibold text-uppercase">
            {product.category}
          </small>

          <h1 className="fw-bold mt-2">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <i
                key={star}
                className={`bi ${
                  star <= Math.round(product.rating)
                    ? "bi-star-fill text-warning"
                    : "bi-star text-secondary"
                }`}
              ></i>
            ))}

            <span className="text-muted ms-2">
              {product.rating}
            </span>
          </div>

          {/* Price */}
          <div className="d-flex align-items-center gap-3 mb-3">
            <span className="fs-2 fw-bold">
              ${product.price}
            </span>

            <del className="text-muted">
              ${oldPrice}
            </del>

            <span className="badge bg-danger">
              -{Math.round(product.discountPercentage)}%
            </span>
          </div>

          {/* Description */}
          <p className="text-muted lh-lg">
            {product.description}
          </p>

          {/* Stock */}
          <div className="mb-4">
            <span
              className={
                product.stock > 10
                  ? "text-success fw-semibold"
                  : "text-danger fw-semibold"
              }
            >
              <i className="bi bi-box-seam me-2"></i>

              {product.stock > 10
                ? `${product.stock} in stock`
                : `Only ${product.stock} left`}
            </span>
          </div>

          {/* Brand */}
          {product.brand && (
            <p>
              <strong>Brand:</strong>{" "}
              {product.brand}
            </p>
          )}

          {/* Actions */}
          <div className="d-flex gap-2 mt-4">
            <button
              type="button"
              className="btn btn-primary flex-grow-1"
              onClick={handleAddToCart}
            >
              <i className="bi bi-bag-plus me-2"></i>
              Add to Cart
            </button>

            <button
              type="button"
              className={`btn ${
                isInWishlist
                  ? "btn-danger"
                  : "btn-outline-danger"
              }`}
              onClick={handleWishlist}
            >
              <i
                className={`bi ${
                  isInWishlist
                    ? "bi-heart-fill"
                    : "bi-heart"
                }`}
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;