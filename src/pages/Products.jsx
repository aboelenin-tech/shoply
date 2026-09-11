import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import useProductStore from "../store/store";

function Products() {
  const {
    allProducts,
    products,
    categories,

    maxPrice,
    selectedCategory,
    rating,
    search,

    loading,
    error,

    fetchProducts,
    fetchCategories,

    setSearch,
    searchProducts,

    handleCategory,
    handlePrice,
    handleRating,

    sortingPriceAs,
    sortingPriceDes,
    sortingRatingAs,
    sortingRatingDes,
  } = useProductStore();

  // Pagination

  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 12;

  const startPoint =
    (currentPage - 1) * productsPerPage;

  const endPoint =
    startPoint + productsPerPage;

  const totalPages = Math.ceil(
    products.length / productsPerPage
  );

  const currentProducts = products.slice(
    startPoint,
    endPoint
  );

  // Fetch Data

  useEffect(() => {
    if (allProducts.length === 0) {
      fetchProducts();
    }

    if (categories.length === 0) {
      fetchCategories();
    }
  }, []);

  // Reset Pagination

  useEffect(() => {
    setCurrentPage(1);
  }, [
    products.length,
    selectedCategory,
    maxPrice,
    rating,
    search,
  ]);

  return (
    <div className="page-animation">
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
            onChange={(e) =>
              setSearch(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                searchProducts(search);
              }
            }}
          />

          <button
            className="btn btn-primary"
            onClick={() =>
              searchProducts(search)
            }
          >
            <i className="bi bi-search"></i>
          </button>

        </div>

        {/* Filters */}

        <div className="d-flex flex-wrap align-items-center gap-4 mb-4">

          {/* Price Slider */}

          <div
            className="d-flex flex-column mb-4"
            style={{
              minWidth: "200px",
            }}
          >

            <label
              htmlFor="maxPrice"
              className="fw-semibold"
            >
              Max Price
            </label>

            <input
              type="range"
              min="0"
              max="5000"
              step="10"
              value={maxPrice}
              id="maxPrice"
              onChange={(e) =>
                handlePrice(
                  Number(e.target.value)
                )
              }
            />

            <span>
              {maxPrice}$
            </span>

          </div>

          {/* Rating Filter */}

          <div className="d-flex flex-wrap align-items-center gap-2 p-3 bg-white rounded-3 mb-4">

            <span className="fw-semibold">
              Min Rating:
            </span>

            <div className="d-flex gap-1">

              {[1, 2, 3, 4, 4.5].map((star) => (

                <i
                  key={star}
                  className={`bi ${star <= rating
                      ? "bi-star-fill text-warning"
                      : "bi-star text-secondary"
                    }`}
                  onClick={() =>
                    handleRating(star)
                  }
                  style={{
                    fontSize: "24px",
                    cursor: "pointer",
                  }}
                ></i>

              ))}

            </div>

          </div>

          {/* Sorting */}

          <div className="dropdown mb-4">

            <button
              className="bg-primary border-0 btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sorting
            </button>

            <ul className="dropdown-menu">

              <li>
                <button
                  onClick={sortingPriceAs}
                  className="dropdown-item"
                >
                  Price: Low to High
                </button>
              </li>

              <li>
                <button
                  onClick={sortingPriceDes}
                  className="dropdown-item"
                >
                  Price: High to Low
                </button>
              </li>

              <li>
                <button
                  onClick={sortingRatingAs}
                  className="dropdown-item"
                >
                  Rating: Low to High
                </button>
              </li>

              <li>
                <button
                  onClick={sortingRatingDes}
                  className="dropdown-item"
                >
                  Rating: High to Low
                </button>
              </li>

            </ul>

          </div>

        </div>

        {/* Categories */}

        <div className="d-flex flex-wrap gap-2 mb-5">

          {/* All Products */}

          <button
            className={
              selectedCategory === "all"
                ? "btn btn-primary"
                : "btn btn-outline-primary"
            }
            onClick={() =>
              handleCategory("all")
            }
          >
            All Products
          </button>

          {/* Categories */}

          {categories.map((category) => (

            <button
              key={category.slug}
              className={
                selectedCategory === category.slug
                  ? "btn btn-primary"
                  : "btn btn-outline-primary"
              }
              onClick={() =>
                handleCategory(category.slug)
              }
            >
              {category.name}
            </button>

          ))}

        </div>

        {/* Loading */}

        {loading ? (

          <div className="row g-4">

            {[1, 2, 3, 4, 5, 6, 7, 8].map(
              (item) => (

                <div
                  key={item}
                  className="col-12 col-sm-6 col-md-4 col-lg-3"
                >
                  <ProductCardSkeleton />
                </div>

              )
            )}

          </div>

        ) : (

          /* Products */

          <div className="row g-4">

            {currentProducts.length > 0 ? (

              currentProducts.map((product) => (

                <div
                  className="col-12 col-sm-6 col-md-4 col-lg-3"
                  key={product.id}
                >
                  <ProductCard
                    product={product}
                  />
                </div>

              ))

            ) : (

              <div className="col-12 text-center py-5">

                <h4>
                  No products found
                </h4>

                <p className="text-muted">
                  Try changing your filters or search.
                </p>

              </div>

            )}

          </div>

        )}

        {/* Error */}

        {error && (

          <div className="alert alert-danger mt-4">
            {error}
          </div>

        )}

        {/* Pagination */}

        {totalPages > 1 && (
          <nav aria-label="Products pagination" className="mt-5">
            <ul className="pagination justify-content-center align-items-center gap-2">

              <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                <button
                  className="page-link rounded-3 border-0 shadow-sm px-3"
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <i className="bi bi-chevron-left me-1"></i>
                  Previous
                </button>
              </li>

              {Array.from(
                {
                  length: Math.min(5, totalPages),
                },
                (_, index) => {
                  let pageNumber;

                  if (totalPages <= 5) {
                    pageNumber = index + 1;
                  } else if (currentPage <= 3) {
                    pageNumber = index + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNumber = totalPages - 4 + index;
                  } else {
                    pageNumber = currentPage - 2 + index;
                  }

                  return (
                    <li
                      key={pageNumber}
                      className={`page-item ${currentPage === pageNumber ? "active" : ""
                        }`}
                    >
                      <button
                        className="page-link rounded-3 border-0 shadow-sm"
                        onClick={() => setCurrentPage(pageNumber)}
                        style={{
                          width: "42px",
                          height: "42px",
                        }}
                      >
                        {pageNumber}
                      </button>
                    </li>
                  );
                }
              )}

              <li
                className={`page-item ${currentPage === totalPages ? "disabled" : ""
                  }`}
              >
                <button
                  className="page-link rounded-3 border-0 shadow-sm px-3"
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                  <i className="bi bi-chevron-right ms-1"></i>
                </button>
              </li>

            </ul>
          </nav>
        )}

      </div>
    </div>
  );
}

export default Products;