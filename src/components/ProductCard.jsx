import React from "react";

function ProductCard({ product }) {
  return (
    <div className="card h-100">
      <img
        className="card-img-top"
        src={product.thumbnail}
        alt={product.title}
      />

      <div className="card-body">
        <h3 className="card-title">
          {product.title}
        </h3>

        <p className="card-text">
          Price: ${product.price}
        </p>

        <button className="btn btn-info text-white">
          <i className="bi bi-bag"></i>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;