import React from "react";
import { Link } from "react-router-dom";
import useCartStore from "../store/cartStore";
import toast from "react-hot-toast";

function ProductCard({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);
  const oldPrice = (
    product.price /
    (1 - product.discountPercentage / 100)
  ).toFixed(2);

  return (
    <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden position-relative">

      <span className="badge bg-danger position-absolute top-0 start-0 m-3 px-3 py-2 rounded-pill">
        -{Math.round(product.discountPercentage)}%
      </span>

      <button
        className="btn btn-light position-absolute top-0 end-0 m-3 rounded-circle shadow-sm"
        style={{ width: "40px", height: "40px" }}
      >
        <i className="bi bi-heart"></i>
      </button>

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

      <div className="card-body d-flex flex-column p-4">

        <small className="text-primary fw-semibold text-uppercase">
          {product.category}
        </small>

        <h5 className="fw-bold mt-2 mb-2">
          {product.title}
        </h5>

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

        <div className="d-flex align-items-center gap-2 mb-2">
          <span className="fs-5 fw-bold text-dark">
            ${product.price}
          </span>

          <del className="text-muted small">
            ${oldPrice}
          </del>
        </div>

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

        <div className="mt-auto">

          <Link
            to={`/products/${product.id}`}
            className="btn btn-outline-primary w-100 mt-3 mb-2"
          >
            <i className="bi bi-eye me-2"></i>
            View Details
          </Link>

          <button
    className="btn btn-primary w-100"
    onClick={() => {
      addToCart(product);
      toast.success(`${product.title} added to cart!`);
  }}
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