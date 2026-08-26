import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getProducts();
    getCategories();
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

  async function getProductsByCategory(category) {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/${category}`
      );

      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  }

  async function getProducts() {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products?limit=0"
      );

      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container py-5">

      <h1 className="fw-bold mb-4">
        Products
      </h1>

      <div className="d-flex flex-wrap gap-2 mb-5">

        <button
          className="btn btn-primary"
          onClick={getProducts}
        >
          All Products
        </button>

        {categories.map((category) => (
          <button
            key={category.slug}
            className="btn btn-outline-primary"
            onClick={() =>
              getProductsByCategory(category.slug)
            }
          >
            {category.name}
          </button>
        ))}

      </div>

      <div className="row g-4">

        {products.map((product) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3"
            key={product.id}
          >
            <ProductCard product={product} />
          </div>
        ))}

      </div>

    </div>
  );
}

export default Products;