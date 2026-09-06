import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import useProductStore from "../store/store";
import heromain from "../assets/heromain.jpg";

function Home() {
  const navigate = useNavigate();

  const {
    products,
    fetchProducts,
    categories,
    fetchCategories,
  } = useProductStore();

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }

    if (categories.length === 0) {
      fetchCategories();
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="container-fluid py-5">
        <div className="container">
          <div className="row align-items-center g-5 min-vh-90">

            <div className="col-12 col-lg-7 text-center text-lg-start">
              <h1 className="display-2 fw-bold">
                Everything you love,{" "}
                <span className="text-primary">
                  delivered fast.
                </span>
              </h1>

              <p
                className="fs-5 text-muted mx-auto mx-lg-0"
                style={{ maxWidth: "650px" }}
              >
                Discover thousands of curated products across
                beauty, tech, home and fashion — with honest
                pricing and free delivery on orders over $50.
              </p>

              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start py-3">
                <button
                  type="button"
                  className="btn btn-primary px-4 py-2"
                  onClick={() => navigate("/products")}
                >
                  <i className="bi bi-bag me-2"></i>
                  Shop Now
                </button>

                <button
                  type="button"
                  className="btn btn-outline-primary px-4 py-2"
                  onClick={() => navigate("/products")}
                >
                  <i className="bi bi-star me-2"></i>
                  Browse Best Sellers
                </button>
              </div>

              <div className="row text-center text-lg-start mt-4">
                <div className="col-4">
                  <h2 className="display-6 fw-bold">10k+</h2>
                  <p className="text-muted">Products</p>
                </div>

                <div className="col-4">
                  <h2 className="display-6 fw-bold">4.8/5</h2>
                  <p className="text-muted">Avg. rating</p>
                </div>

                <div className="col-4">
                  <h2 className="display-6 fw-bold">24h</h2>
                  <p className="text-muted">Dispatch</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-5 text-center">
              <div
                className="mx-auto overflow-hidden rounded-4 shadow"
                style={{
                  maxWidth: "550px",
                  height: "450px",
                }}
              >
                <img
                  src={heromain}
                  alt="Luxury bags"
                  className="w-100 h-100"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <hr />

      {/* Features */}
      <section className="container-fluid py-5">
        <div className="container">
          <div className="row g-4">

            <div className="col-12 col-sm-6 col-lg-3">
              <div className="feature-card bg-white border rounded-4 p-4 h-100 d-flex align-items-center gap-3 shadow-sm">
                <div className="feature-icon text-primary">
                  <i className="bi bi-arrow-counterclockwise fs-2"></i>
                </div>

                <div>
                  <h6 className="fw-bold mb-1">
                    Easy Returns
                  </h6>

                  <p className="mb-0 text-muted small">
                    Easy and fast returns
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <div className="feature-card bg-white border rounded-4 p-4 h-100 d-flex align-items-center gap-3 shadow-sm">
                <div className="feature-icon text-primary">
                  <i className="bi bi-truck fs-2"></i>
                </div>

                <div>
                  <h6 className="fw-bold mb-1">
                    Free Shipping
                  </h6>

                  <p className="mb-0 text-muted small">
                    Fast and free delivery
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <div className="feature-card bg-white border rounded-4 p-4 h-100 d-flex align-items-center gap-3 shadow-sm">
                <div className="feature-icon text-primary">
                  <i className="bi bi-shield-lock fs-2"></i>
                </div>

                <div>
                  <h6 className="fw-bold mb-1">
                    Secure Payment
                  </h6>

                  <p className="mb-0 text-muted small">
                    100% secure payment
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <div className="feature-card bg-white border rounded-4 p-4 h-100 d-flex align-items-center gap-3 shadow-sm">
                <div className="feature-icon text-primary">
                  <i className="bi bi-patch-check fs-2"></i>
                </div>

                <div>
                  <h6 className="fw-bold mb-1">
                    Quality Products
                  </h6>

                  <p className="mb-0 text-muted small">
                    High quality products
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <hr />

      {/* Shop By Category */}
      <section className="container-fluid py-5">
        <div className="container">

          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold mb-0">
              Shop by category
            </h2>

            <button
              type="button"
              className="btn btn-link text-decoration-none"
              onClick={() => navigate("/products")}
            >
              View All
              <i className="bi bi-arrow-right ms-2"></i>
            </button>
          </div>

          <div className="row g-3">
            {categories.slice(0, 8).map((category) => (
              <div
                className="col-12 col-sm-4 col-md-3"
                key={category.slug}
              >
                <button
                  type="button"
                  className="btn btn-outline-primary w-100 py-4 rounded-4"
                  onClick={() =>
                    navigate(
                      `/products?category=${category.slug}`
                    )
                  }
                >
                  <strong>
                    {category.name}
                  </strong>

                  <br />

                  <small>
                    Explore
                    <i className="bi bi-arrow-right ms-2"></i>
                  </small>
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      <hr />

      {/* Featured Products */}
      <section className="container py-5">

        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold mb-0">
            Featured products
          </h2>

          <button
            type="button"
            className="btn btn-link text-decoration-none"
            onClick={() => navigate("/products")}
          >
            View All
            <i className="bi bi-arrow-right ms-2"></i>
          </button>
        </div>

        <div className="row g-4">
          {products.slice(0, 8).map((product) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3"
              key={product.id}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

      </section>

      <hr />

      {/* Discount Banner */}
      <section className="container my-5">
        <div className="limited rounded-4 p-5 text-center">

          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">

              <h1 className="fw-bold">
                Extra 20% off first order
              </h1>

              <p className=" fs-5">
                Use code SHOPLY20 at checkout.
                Valid on every category, this week only.
              </p>

              <div className="d-flex justify-content-center py-3">
                <button
                  type="button"
                  className="btn btn-primary px-4 py-3"
                  onClick={() => navigate("/products")}
                >
                  <i className="bi bi-bag me-2"></i>
                  Shop Now
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      <hr />
    </>
  );
}

export default Home;