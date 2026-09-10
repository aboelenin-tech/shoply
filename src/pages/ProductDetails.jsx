import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useProductStore from "../store/store";
import useCartStore from "../store/cartStore";
import useWishlistStore from "../store/wishlistStore";
import useAuthStore from "../store/authStore";
import ProductCard from "../components/ProductCard";
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

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

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

  const images = product.images?.length
    ? product.images
    : [product.thumbnail];

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, 4);

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

      toast.success(
        `${product.title} added to wishlist`
      );
    }
  };

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      toast.error(
        "Please login to add products to cart"
      );

      navigate("/login");
      return;
    }

    addToCart(product, quantity);

    toast.success(
      `${product.title} x${quantity} added to cart!`
    );
  };

  return (
    <div className="page-animation">
      <div className="container py-5">

        <Link
          to="/products"
          className="text-decoration-none mb-4 d-inline-block"
        >
          <i className="bi bi-arrow-left me-2"></i>
          Back to Products
        </Link>

        <div className="row g-5">

          {/* Product Images */}

          <div className="col-12 col-lg-6">
            <div className="bg-light rounded-4 p-4 text-center">

              <div className="position-relative">

                <span className="badge bg-danger position-absolute top-0 start-0 m-2 px-3 py-2 rounded-pill">
                  -{Math.round(product.discountPercentage)}%
                </span>

                <button
                  type="button"
                  className={`btn ${
                    isInWishlist
                      ? "btn-danger"
                      : "btn-light"
                  } position-absolute top-0 end-0 m-2 rounded-circle shadow-sm`}
                  style={{
                    width: "45px",
                    height: "45px",
                  }}
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

                <img
                  src={images[selectedImage]}
                  alt={product.title}
                  className="img-fluid"
                  style={{
                    height: "450px",
                    width: "100%",
                    objectFit: "contain",
                  }}
                />

              </div>

              <div className="d-flex justify-content-center gap-2 mt-3 flex-wrap">

                {images.map((image, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`border rounded-3 p-1 ${
                      selectedImage === index
                        ? "border-primary"
                        : "border-secondary"
                    }`}
                    onClick={() =>
                      setSelectedImage(index)
                    }
                    style={{
                      width: "75px",
                      height: "75px",
                    }}
                  >
                    <img
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      className="img-fluid h-100 w-100"
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </button>
                ))}

              </div>

            </div>
          </div>

          {/* Product Information */}

          <div className="col-12 col-lg-6">

            <small className="text-primary fw-semibold text-uppercase">
              {product.category}
            </small>

            <h1 className="fw-bold mt-2">
              {product.title}
            </h1>

            {/* Rating */}

            <div className="mb-4">

              {[1, 2, 3, 4, 5].map((star) => (
                <i
                  key={star}
                  className={`bi ${
                    star <= Math.round(product.rating)
                      ? "bi-star-fill text-warning"
                      : "bi-star text-secondary"
                  } me-1`}
                ></i>
              ))}

              <span className="text-muted ms-2">
                {product.rating} / 5
              </span>

            </div>

            {/* Price */}

            <div className="d-flex align-items-center gap-3 mb-4">

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

            <hr />

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

            {/* Quantity */}

            <div className="mb-4">

              <label className="fw-semibold mb-2 d-block">
                Quantity
              </label>

              <div
                className="d-flex align-items-center border rounded-3"
                style={{ width: "145px" }}
              >

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

                <span className="flex-grow-1 text-center fw-bold">
                  {quantity}
                </span>

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

            {/* Add To Cart */}

            <div className="d-flex gap-2">

              <button
                type="button"
                className="btn btn-primary flex-grow-1"
                onClick={handleAddToCart}
              >
                <i className="bi bi-bag-plus me-2"></i>
                Add to Cart
              </button>

            </div>

            {/* Shipping and Returns */}

            <div className="row g-3 mt-4">

              <div className="col-6">

                <div className="border rounded-3 p-3 h-100">

                  <i className="bi bi-truck fs-4 text-primary"></i>

                  <div className="fw-semibold mt-2">
                    Shipping
                  </div>

                  <small className="text-muted">
                    {product.shippingInformation ||
                      "Fast delivery"}
                  </small>

                </div>

              </div>

              <div className="col-6">

                <div className="border rounded-3 p-3 h-100">

                  <i className="bi bi-arrow-repeat fs-4 text-primary"></i>

                  <div className="fw-semibold mt-2">
                    Returns
                  </div>

                  <small className="text-muted">
                    {product.returnPolicy ||
                      "Easy returns"}
                  </small>

                </div>

              </div>

            </div>

          </div>
        </div>

        {/* Product Information */}

        <div className="mt-5 pt-5">

          <h3 className="fw-bold mb-4">
            Product Information
          </h3>

          <div className="row g-3">

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

            <div className="col-12 col-md-4">
              <div className="bg-light rounded-3 p-4 h-100">

                <small className="text-muted">
                  Warranty
                </small>

                <h6 className="fw-bold mt-1 mb-0">
                  {product.warrantyInformation ||
                    "N/A"}
                </h6>

              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="bg-light rounded-3 p-4 h-100">

                <small className="text-muted">
                  Minimum Order
                </small>

                <h6 className="fw-bold mt-1 mb-0">
                  {product.minimumOrderQuantity || 1}
                </h6>

              </div>
            </div>

          </div>

        </div>

        {/* Reviews */}

        <div className="mt-5 pt-5">

          <h3 className="fw-bold mb-4">
            Customer Reviews
          </h3>

          {product.reviews?.length > 0 ? (

            product.reviews.map((review, index) => (

              <div
                key={index}
                className="border rounded-3 p-4 mb-3"
              >

                <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">

                  <div>

                    <strong>
                      {review.reviewerName}
                    </strong>

                    <small className="text-muted ms-2">
                      {review.reviewerEmail}
                    </small>

                  </div>

                  <div>

                    {[1, 2, 3, 4, 5].map((star) => (
                      <i
                        key={star}
                        className={`bi ${
                          star <= review.rating
                            ? "bi-star-fill text-warning"
                            : "bi-star text-secondary"
                        }`}
                      ></i>
                    ))}

                  </div>

                </div>

                <p className="text-muted mt-3 mb-0">
                  {review.comment}
                </p>

              </div>

            ))

          ) : (

            <p className="text-muted">
              No reviews available.
            </p>

          )}

        </div>

        {/* Related Products */}

        {relatedProducts.length > 0 && (

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

              {relatedProducts.map((item) => (

                <div
                  key={item.id}
                  className="col-12 col-sm-6 col-lg-3"
                >
                  <ProductCard product={item} />
                </div>

              ))}

            </div>

          </div>

        )}

      </div>
    </div>
  );
}

export default ProductDetails;