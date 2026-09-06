import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import useCartStore from "../store/cartStore";
import useWishlistStore from "../store/wishlistStore";
import toast from "react-hot-toast";

function ProductDetails() {
  const { id } = useParams();

  // ================= CART =================

  const addToCart = useCartStore(
    (state) => state.addToCart
  );

  // ================= WISHLIST =================

  const wishlist = useWishlistStore(
    (state) => state.wishlist
  );

  const addToWishlist = useWishlistStore(
    (state) => state.addToWishlist
  );

  const removeFromWishlist = useWishlistStore(
    (state) => state.removeFromWishlist
  );

  // ================= STATE =================

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([]);

  // ================= GET PRODUCT =================

  useEffect(() => {
    getProduct();
  }, [id]);

  // ================= GET RELATED PRODUCTS =================

  useEffect(() => {
    if (product) {
      getRelatedProducts();
    }
  }, [product]);

  // ================= PRODUCT API =================

  async function getProduct() {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/${id}`
      );

      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  // ================= RELATED PRODUCTS API =================

  async function getRelatedProducts() {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/${product.category}`
      );

      const related = response.data.products
        .filter((item) => item.id !== product.id)
        .slice(0, 4);

      setRelatedProducts(related);
    } catch (error) {
      console.log(error);
    }
  }

  // ================= LOADING =================

  if (!product) {
    return (
      <div className="container py-5 text-center">

        <div className="spinner-border text-primary mb-3"></div>

        <h5>
          Loading product...
        </h5>

      </div>
    );
  }

  // ================= OLD PRICE =================

  const oldPrice = (
    product.price /
    (1 - product.discountPercentage / 100)
  ).toFixed(2);

  // ================= WISHLIST CHECK =================

  const isInWishlist = wishlist.some(
    (item) => item.id === product.id
  );

  // ================= WISHLIST HANDLER =================

  const handleWishlist = () => {

    if (isInWishlist) {

      removeFromWishlist(product.id);

      toast.success(
        "Removed from wishlist"
      );

    } else {

      addToWishlist(product);

      toast.success(
        `${product.title} added to wishlist`
      );

    }
  };

  // ================= ADD TO CART =================

  const handleAddToCart = () => {

    addToCart({
      ...product,
      quantity: quantity,
    });

    toast.success(
      `${product.title} added to cart!`
    );
  };

  return (
    <div className="container py-5">

      {/* ================================================= */}
      {/* PRODUCT DETAILS */}
      {/* ================================================= */}

      <div className="row g-5 align-items-center">

        {/* ================= PRODUCT IMAGE ================= */}

        <div className="col-12 col-lg-6">

          <div
            className="position-relative bg-light rounded-4 p-5 text-center shadow-sm"
          >

            {/* Discount */}

            <span className="badge bg-danger position-absolute top-0 start-0 m-4 px-3 py-2 rounded-pill">
              -{Math.round(product.discountPercentage)}%
            </span>

            {/* Wishlist Heart */}

            <button
              type="button"
              onClick={handleWishlist}
              className="btn bg-white position-absolute top-0 end-0 m-4 rounded-circle shadow-sm"
              style={{
                width: "45px",
                height: "45px",
                zIndex: 10,
              }}
            >
              <i
                className={`bi ${
                  isInWishlist
                    ? "bi-heart-fill text-danger"
                    : "bi-heart"
                } fs-5`}
              ></i>
            </button>

            {/* Product Image */}

            <img
              src={product.thumbnail}
              alt={product.title}
              className="img-fluid"
              style={{
                height: "450px",
                width: "100%",
                objectFit: "contain",
              }}
            />

          </div>

        </div>

        {/* ================= PRODUCT INFORMATION ================= */}

        <div className="col-12 col-lg-6">

          {/* Category */}

          <small className="text-primary fw-bold text-uppercase">
            {product.category}
          </small>

          {/* Title */}

          <h1 className="fw-bold display-5 mt-2 mb-3">
            {product.title}
          </h1>

          {/* ================= RATING ================= */}

          <div className="d-flex align-items-center mb-4">

            <div>

              {[1, 2, 3, 4, 5].map((star) => (

                <i
                  key={star}
                  className={`bi ${
                    star <=
                    Math.round(product.rating)
                      ? "bi-star-fill text-warning"
                      : "bi-star text-secondary"
                  } me-1`}
                ></i>

              ))}

            </div>

            <span className="text-muted ms-2">
              {product.rating} / 5
            </span>

            <span className="text-muted ms-2">
              • {product.reviews?.length || 0} reviews
            </span>

          </div>

          {/* ================= DESCRIPTION ================= */}

          <p className="text-muted fs-5 lh-lg mb-4">
            {product.description}
          </p>

          <hr />

          {/* ================= PRICE ================= */}

          <div className="d-flex align-items-center gap-3 my-4">

            <h2 className="fw-bold mb-0">
              ${product.price}
            </h2>

            <del className="text-muted fs-5">
              ${oldPrice}
            </del>

            <span className="badge bg-danger-subtle text-danger px-3 py-2">
              {Math.round(product.discountPercentage)}% OFF
            </span>

          </div>

          {/* ================= STOCK ================= */}

          <div className="mb-4">

            {product.stock > 10 ? (

              <span className="text-success fw-semibold">

                <i className="bi bi-check-circle-fill me-2"></i>

                In Stock

              </span>

            ) : (

              <span className="text-danger fw-semibold">

                <i className="bi bi-exclamation-circle-fill me-2"></i>

                Only {product.stock} left in stock

              </span>

            )}

          </div>

          {/* ================= QUANTITY ================= */}

          <div className="mb-4">

            <label className="fw-semibold mb-2 d-block">
              Quantity
            </label>

            <div
              className="d-flex align-items-center border rounded-3"
              style={{
                width: "140px",
              }}
            >

              {/* Minus */}

              <button
                type="button"
                className="btn btn-light border-0"
                onClick={() =>
                  setQuantity((prev) =>
                    Math.max(1, prev - 1)
                  )
                }
              >
                <i className="bi bi-dash"></i>
              </button>

              {/* Quantity */}

              <span className="flex-grow-1 text-center fw-bold">
                {quantity}
              </span>

              {/* Plus */}

              <button
                type="button"
                className="btn btn-light border-0"
                onClick={() =>
                  setQuantity((prev) =>
                    Math.min(
                      product.stock,
                      prev + 1
                    )
                  )
                }
              >
                <i className="bi bi-plus"></i>
              </button>

            </div>

          </div>

          {/* ================= BUTTONS ================= */}

          <div className="d-flex gap-3">

            {/* Add To Cart */}

            <button
              type="button"
              className="btn btn-primary btn-lg flex-grow-1 rounded-3"
              onClick={handleAddToCart}
            >

              <i className="bi bi-bag-plus me-2"></i>

              Add to Cart

            </button>

            {/* Buy Now */}

            <button
              type="button"
              className="btn btn-dark btn-lg flex-grow-1 rounded-3"
            >

              Buy Now

            </button>

          </div>

          {/* ================= EXTRA INFORMATION ================= */}

          <div className="row g-3 mt-4">

            {/* Shipping */}

            <div className="col-6">

              <div className="border rounded-3 p-3 h-100">

                <i className="bi bi-truck fs-4 text-primary"></i>

                <div className="fw-semibold mt-2">
                  Free Shipping
                </div>

                <small className="text-muted">
                  Fast delivery
                </small>

              </div>

            </div>

            {/* Returns */}

            <div className="col-6">

              <div className="border rounded-3 p-3 h-100">

                <i className="bi bi-arrow-repeat fs-4 text-primary"></i>

                <div className="fw-semibold mt-2">
                  Easy Returns
                </div>

                <small className="text-muted">
                  Hassle-free returns
                </small>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ================================================= */}
      {/* PRODUCT INFORMATION */}
      {/* ================================================= */}

      <div className="mt-5 pt-5">

        <h3 className="fw-bold mb-4">
          Product Information
        </h3>

        <div className="row g-3">

          {/* Brand */}

          <div className="col-12 col-md-4">

            <div className="bg-light rounded-3 p-4 h-100">

              <small className="text-muted">
                Brand
              </small>

              <h6 className="fw-bold mt-1 mb-0">
                {product.brand || "N/A"}
              </h6>

            </div>

          </div>

          {/* Category */}

          <div className="col-12 col-md-4">

            <div className="bg-light rounded-3 p-4 h-100">

              <small className="text-muted">
                Category
              </small>

              <h6 className="fw-bold mt-1 mb-0 text-capitalize">
                {product.category}
              </h6>

            </div>

          </div>

          {/* SKU */}

          <div className="col-12 col-md-4">

            <div className="bg-light rounded-3 p-4 h-100">

              <small className="text-muted">
                SKU
              </small>

              <h6 className="fw-bold mt-1 mb-0">
                {product.sku || "N/A"}
              </h6>

            </div>

          </div>

          {/* Weight */}

          <div className="col-12 col-md-4">

            <div className="bg-light rounded-3 p-4 h-100">

              <small className="text-muted">
                Weight
              </small>

              <h6 className="fw-bold mt-1 mb-0">
                {product.weight || "N/A"}
              </h6>

            </div>

          </div>

          {/* Warranty */}

          <div className="col-12 col-md-4">

            <div className="bg-light rounded-3 p-4 h-100">

              <small className="text-muted">
                Warranty
              </small>

              <h6 className="fw-bold mt-1 mb-0">
                {product.warrantyInformation || "N/A"}
              </h6>

            </div>

          </div>

          {/* Shipping */}

          <div className="col-12 col-md-4">

            <div className="bg-light rounded-3 p-4 h-100">

              <small className="text-muted">
                Shipping
              </small>

              <h6 className="fw-bold mt-1 mb-0">
                {product.shippingInformation || "N/A"}
              </h6>

            </div>

          </div>

        </div>

      </div>

      {/* ================================================= */}
      {/* RELATED PRODUCTS */}
      {/* ================================================= */}

      <div className="mt-5 pt-5">

        <div className="text-center mb-5">

          <small className="text-primary fw-bold text-uppercase">
            You May Also Like
          </small>

          <h2 className="fw-bold mt-2">
            Related Products
          </h2>

          <p className="text-muted">
            Discover more products from the same category
          </p>

        </div>

        <div className="row g-4">

          {relatedProducts.map((relatedProduct) => (

            <div
              key={relatedProduct.id}
              className="col-12 col-sm-6 col-lg-3"
            >

              <ProductCard
                product={relatedProduct}
              />

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;