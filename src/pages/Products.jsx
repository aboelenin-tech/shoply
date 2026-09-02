import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

function Products() {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [maxPrice, setMaxPrice] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0)
  //for pagination 
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 12
  const startPoint = (currentPage - 1) * productsPerPage;
  const endPoint = startPoint + productsPerPage;
  const totalPages = Math.ceil((products.length) / productsPerPage);
  const currentProducts = products.slice(startPoint, endPoint)
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  async function getCategories() {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products/categories"
      );

      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getProducts() {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products?limit=0"
      );

      setAllProducts(response.data.products);
      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  }


  function filterProducts(price, category, rating) {
    let filteredProducts = allProducts;

    // Category filter
    if (category !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === category
      );
    }

    // Price filter
    if (price > 0) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= price
      );
    }

    //rating filter
    if (rating > 0) {
      filteredProducts = filteredProducts.filter(
        (product) => product.rating >= rating
      );
    }

    setProducts(filteredProducts);
  }
  function handelrating(value) {
    setRating(value)
    filterProducts(maxPrice, selectedCategory, value);

  }
  function handleCategory(category) {
    setSelectedCategory(category);
    filterProducts(maxPrice, category, rating);
  }

  function handlePrice(e) {
    const value = Number(e.target.value);

    setMaxPrice(value);
    filterProducts(value, selectedCategory, rating);
  }
  ///////////////////////////////////////////////////
  async function searchProducts(query) {
    if (!query.trim()) {
      getProducts();
      return;
    }

    try {
      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${query}`
      );

      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  }

  {/*sorting*/ }
  function sortingPriceAs() {
    setProducts([...products].sort((a, b) => a.price - b.price))
  }
  function sortingPricedes() {
    setProducts([...products].sort((a, b) => b.price - a.price))
  }

  function sortingRatingAs() {
    setProducts([...products].sort((a, b) => a.rating - b.rating))
  }
  function sortingRatingdes() {
    setProducts([...products].sort((a, b) => b.rating - a.rating))
  }




  return (
    <div className="container py-5">

      <h1 className="fw-bold mb-4">
        Products
      </h1>

      {/* Search */}
      <div className="input-group mb-4">

        <input
          type="text"
          className="form-control"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchProducts(search);
            }
          }}
        />

        <button
          className="btn btn-primary"
          onClick={() => searchProducts(search)}
        >
          <i className="bi bi-search"></i>
        </button>

      </div>


      <div className="d-flex flex-row align-items-center gap-4">
        {/* Price Slider */}
        <div className="d-flex flex-column w-25 mb-4">

          <label htmlFor="maxPrice">
            Max Price
          </label>

          <input
            type="range"
            min="0"
            max="5000"
            step="10"
            value={maxPrice}
            id="maxPrice"
            className=""
            onChange={handlePrice}
          />

          <span>
            {maxPrice}$
          </span>

        </div>
        {/*rating filter */}
        <div className="d-flex align-items-center gap-2 p-3 bg-white rounded-3 ">
          <span className="fw-semibold">Min Rating:</span>

          <div className="d-flex gap-1">
            {[1, 2, 3, 4, 4.5].map((star) => (
              <i
                key={star}
                className={`bi ${star <= rating ? "bi-star-fill text-warning" : "bi-star text-secondary"
                  }`}
                onClick={() => {
                  setRating(star)
                  handelrating(star)
                }}
                style={{
                  fontSize: "24px",
                  cursor: "pointer",
                }}
              ></i>
            ))}
          </div>
        </div>
        {/*sorting */}
        <div>
          <div className="dropdown">
            <button className="bg-primary border-0 btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              sorting
            </button>
            <ul className="dropdown-menu">
              <li><button onClick={sortingPriceAs} className="dropdown-item" href="#">Price: Low to High</button></li>
              <li><button onClick={sortingPricedes} className="dropdown-item" href="#">Price: High to Low</button></li>
              <li><button onClick={sortingRatingAs} className="dropdown-item" href="#">Rating: Low to High</button></li>
              <li><button onClick={sortingRatingdes} className="dropdown-item" href="#">Rating: High to Low</button></li>
            </ul>
          </div>

        </div>
      </div>
      {/* Categories */}
      <div className="d-flex flex-wrap gap-2 mb-5">

        <button
          className={
            selectedCategory === "all"
              ? "btn btn-primary"
              : "btn btn-outline-primary"
          }
          onClick={() => handleCategory("all")}
        >
          All Products
        </button>

        {categories.map((category) => (

          <button
            key={category.slug}
            className={
              selectedCategory === category.slug
                ? "btn btn-primary"
                : "btn btn-outline-primary"
            }
            onClick={() => handleCategory(category.slug)}
          >
            {category.name}
          </button>

        ))}

      </div>

      {/* Products */}
      <div className="row g-4">

        {currentProducts .map((product) => (

          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3"
            key={product.id}
          >
            <ProductCard product={product} />
          </div>

        ))}

      </div>


  <nav aria-label="pagination">
  <ul className="pagination  justify-content-center">

    {Array.from({ length: totalPages }, (ele, index) => (
      <li
        key={index}
        className={`page-item ${
          currentPage === index + 1 ? "active" : ""
        }`}
      >
        <button
          className="page-link"
          onClick={() => setCurrentPage(index + 1)}
        >
          {index + 1}
        </button>
      </li>
    ))}

  </ul>
</nav>


    </div>
  );
}

export default Products;