import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../components/ProductCard";

function Category() {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategoryProducts() {
      try {
        setLoading(true);

        const response = await axios.get(
          `https://dummyjson.com/products/category/${category}`
        );

        setProducts(response.data.products);
      } catch (error) {
        console.log(error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchCategoryProducts();
  }, [category]);

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary"></div>

        <p className="text-muted mt-3">
          Loading products...
        </p>
      </div>
    );
  }

  return (
    <div className="page-animation">
 
    <section className="container py-5">

      {/* Header */}
      <div className="mb-5">

        <small className="text-primary fw-bold text-uppercase">
          Category
        </small>

        <h1 className="fw-bold mt-2 text-capitalize">
          {category.replaceAll("-", " ")}
        </h1>

        <p className="text-muted">
          Explore products from this category.
        </p>

      </div>

      {/* Products */}
      {products.length === 0 ? (

        <div className="text-center py-5">

          <i className="bi bi-box-seam fs-1 text-muted"></i>

          <h4 className="fw-bold mt-3">
            No products found
          </h4>

          <p className="text-muted">
            There are no products in this category.
          </p>

        </div>

      ) : (

        <div className="row g-4">

          {products.map((product) => (

            <div
              key={product.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3"
            >
              <ProductCard product={product} />
            </div>

          ))}

        </div>

      )}

    </section>
     
</div>
  );
}

export default Category;