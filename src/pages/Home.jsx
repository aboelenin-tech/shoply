
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import heromain from "../assets/heromain.jpg"

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);  

  useEffect(() => {
    getCategories();

    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        console.log(response.data.products);
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  async function getCategories() {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products/categories"
      );
  
      console.log(response.data);
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <section className="container-fluid py-5">
        <div className="container">
          <div className="row align-items-center g-5 min-vh-90">

            <div className="col-12 col-lg-7 text-center text-lg-start">

              <h1 className="display-2 fw-bold">
                Everything you love,{' '}
                <span className="text-primary">
                  delivered fast.
                </span>
              </h1>

              <p className="fs-5 text-muted mx-auto mx-lg-0" style={{ maxWidth: "650px" }}>
                Discover thousands of curated products across beauty, tech,
                home and fashion — with honest pricing and free delivery
                on orders over $50.
              </p>

              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start py-3">
                <button className="btn btn-primary px-4 py-2">
                  Shop Now
                </button>

                <button className="btn btn-outline-primary px-4 py-2">
                  Browse best sellers
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
      height: "450px"
    }}
                          >
                            <img
      src={heromain}
      alt="Luxury bags"
      className="w-100 h-100"
      style={{
        objectFit: "cover"
      }}
                               />
  </div>
</div>
          </div>
        </div>
      </section>

      <hr />
      <section className="container-fluid py-5 ">
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

      <section className="container-fluid py-5">
        <div className="container">

          <h2 className="fw-bold mb-4">
            Shop by category
          </h2>

          <div className="row g-3">

            <div className="col-12 col-sm-4 col-md-3 col-lg-3">
              <a href="#" className="btn btn-outline-primary w-100 py-4">
                <strong>Beauty</strong>
                <br />
                Explore
              </a>
            </div>

            <div className="col-12 col-sm-4 col-md-3 col-lg-3">
              <a href="#" className="btn btn-outline-primary w-100 py-4">
                <strong>Fragrances</strong>
                <br />
                Explore
              </a>
            </div>

            <div className="col-12 col-sm-4 col-md-3 col-lg-3">
              <a href="#" className="btn btn-outline-primary w-100 py-4">
                <strong>Furniture</strong>
                <br />
                Explore
              </a>
            </div>

            <div className="col-12 col-sm-4 col-md-3 col-lg-3">
              <a href="#" className="btn btn-outline-primary w-100 py-4">
                <strong>Groceries</strong>
                <br />
                Explore
              </a>
            </div>

            <div className="col-12 col-sm-4 col-md-3 col-lg-3">
              <a href="#" className="btn btn-outline-primary w-100 py-4">
                <strong>Sports</strong>
                <br />
                Explore
              </a>
            </div>

            <div className="col-12 col-sm-4 col-md-3 col-lg-3">
              <a href="#" className="btn btn-outline-primary w-100 py-4">
                <strong>Electronics</strong>
                <br />
                Explore
              </a>
            </div>

            <div className="col-12 col-sm-4 col-md-3 col-lg-3">
              <a href="#" className="btn btn-outline-primary w-100 py-4">
                <strong>Home</strong>
                <br />
                Explore
              </a>
            </div>

            <div className="col-12 col-sm-4 col-md-3 col-lg-3">
              <a href="#" className="btn btn-outline-primary w-100 py-4">
                <strong>Fashion</strong>
                <br />
                Explore
              </a>
            </div>

          </div>

        </div>
        
      </section>


      <hr />
      <div className="container py-5">
        <div className="row g-4">
          <h2 className='fw-bold mb-4'>Featured products</h2>
          {products.slice(0,8).map((product) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className="limited container mb-5 mt-5 rounded ">
        <div className="row g-4">
          <h1>Extra 20% off first order </h1>
          <p className="">Use code SHOPLY20 at checkout. Valid on every category, this week only</p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start py-3">
                <button className="btn btn-primary px-4 py-3">
                  Shop Now
                </button>
                </div>
        </div>
      </div>

      <hr />

    </>
  )
}

export default Home