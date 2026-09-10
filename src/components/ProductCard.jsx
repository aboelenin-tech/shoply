import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useCartStore from "../store/cartStore";
import useWishlistStore from "../store/wishlistStore";
import useAuthStore from "../store/authStore";
import toast from "react-hot-toast";

function ProductCard({ product }) {
  const navigate = useNavigate();

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

    <div className="card product-card-animation card h-100 border-0 shadow-sm rounded-4 overflow-hidden position-relative ">
      {/* Discount */}
      <span className="badge bg-danger position-absolute top-0 start-0 m-3 px-3 py-2 rounded-pill">
        -{Math.round(product.discountPercentage)}%
      </span>

      {/* Wishlist */}
      <button
        type="button"
        onClick={handleWishlist}
        className="btn btn-light position-absolute top-0 end-0 m-3 rounded-circle shadow-sm"
        style={{
          width: "40px",
          height: "40px",
          zIndex: 10,
        }}
      >
        <i
          className={`bi ${
            isInWishlist
              ? "bi-heart-fill text-danger"
              : "bi-heart"
          }`}
        ></i>
      </button>

      {/* Product Image */}
      <Link
        to={`/products/${product.id}`}
        className="text-decoration-none"
      >
        <div className="bg-light p-4 text-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="img-fluid"
            style={{
              height: "220px",
              width: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      </Link>

      <div className="card-body d-flex flex-column p-4">
        {/* Category */}
        <small className="text-primary fw-semibold text-uppercase">
          {product.category}
        </small>

        {/* Title */}
        <h5 className="fw-bold mt-2 mb-2">
          <Link
            to={`/products/${product.id}`}
            className="text-decoration-none text-dark"
          >
            {product.title}
          </Link>
        </h5>

        {/* Rating */}
        <div className="mb-2">
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

          <small className="text-muted ms-2">
            ({product.rating})
          </small>
        </div>

        {/* Price */}
        <div className="d-flex align-items-center gap-2 mb-2">
          <span className="fs-5 fw-bold text-dark">
            ${product.price}
          </span>

          <del className="text-muted small">
            ${oldPrice}
          </del>
        </div>

        {/* Stock */}
        <small
          className={
            product.stock > 10
              ? "text-success"
              : "text-danger"
          }
        >
          <i className="bi bi-box-seam me-1"></i>

          {product.stock > 10
            ? `${product.stock} in stock`
            : `Only ${product.stock} left`}
        </small>

        {/* Buttons */}
        <div className="mt-auto">
          {/* View Details */}
          <Link
            to={`/products/${product.id}`}
            className="btn btn-outline-primary btn-sm w-100 mt-3 mb-2"
          >
            <i className="bi bi-eye me-2"></i>
            View Details
          </Link>

          {/* Add To Cart */}
          <button
            type="button"
            className="btn btn-primary w-100"
            onClick={handleAddToCart}
          >
            <i className="bi bi-bag-plus me-2"></i>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;