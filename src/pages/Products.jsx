import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  // const [selectedCategory, setSelectedCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState(0)
  const [search, setSearch] = useState("");
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
      // setSelectedCategory(category)

      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  }
  async function priceFilterProducts(maxPrice) {
    try {
      const response = await axios.get("https://dummyjson.com/products?limit=0");
      if (maxPrice === 0) { setProducts(response.data.products) }
      else { setProducts(response.data.products.filter((el) => el.price <= maxPrice)); }
    }
    catch (error) { console.log(error); }
  }

  // async function priceFilterProducts(maxPrice) {
  //   try {

  //     const response = await axios.get(
  //       "https://dummyjson.com/products?limit=0"
  //     );

  //     if (maxPrice === 0 && selectedCategory !== "all") {
  //       setProducts(response.data.products.filter((el) => el.category === selectedCategory))
  //     }
  //     else if (maxPrice === 0 && selectedCategory === "all") {
  //       setProducts(response.data.products);
  //     }
  //     else if (selectedCategory !== "all") {
  //       setProducts(response.data.products.filter((el) => { return el.category === selectedCategory && el.price <= maxPrice }))

  //     }
  //     else {
  //       setProducts(response.data.products.filter((el) => { return el.price <= maxPrice }))
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }




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


return (
  <div className="container py-5">

    <h1 className="fw-bold mb-4">
      Products
    </h1>
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
    <div className="d-flex flex-column w-25 ">
      <label htmlFor="maxPrice" className="fw-100">Max Price</label>
      <input
        type="range"
        min="0"
        max="1000"
        name="maxPrice"
        id="maxPrice"
        step="10"
        value={maxPrice}
        className="w-50"
        onChange={(e) => {
         setMaxPrice(e.target.value);
  priceFilterProducts(e.target.value);
        }}
      />
      <div >
        <span className="text-dark">{maxPrice}$</span>

      </div>
    </div>

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
          onClick={() => {
            getProductsByCategory(category.slug)


          }

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
