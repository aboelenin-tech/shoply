import { NavLink } from "react-router-dom";

function Navbar() {
  const categories = [
    { name: "Beauty", slug: "beauty" },
    { name: "Fragrances", slug: "fragrances" },
    { name: "Furniture", slug: "furniture" },
    { name: "Groceries", slug: "groceries" },
    { name: "Sports", slug: "sports" },
    { name: "Electronics", slug: "electronics" },
    { name: "Laptops", slug: "laptops" },
    { name: "Mobile Accessories", slug: "mobile-accessories" },
    { name: "Skin Care", slug: "skin-care" },
    { name: "Men's Shirts", slug: "mens-shirts" },
    { name: "Women's Dresses", slug: "womens-dresses" },
  ];

  return (
    <nav className="navbar bg-body-tertiary sticky-top">
      <div className="container-fluid">

        {/* =========================
            Left Side
        ========================= */}

        <div className="leftSide d-flex align-items-center">

          {/* Mobile Menu Button */}
          <button
            className="bg-transparent border-0 d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sideNav"
            aria-controls="sideNav"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Logo */}
          <NavLink
            className="navbar-brand m-2 logo me-4"
            to="/"
          >
            <i className="bi bi-bag-heart-fill me-1"></i>
            Shoply
          </NavLink>

          {/* Desktop Navigation */}
          <div className="d-none d-lg-flex align-items-center gap-4">

            {/* Home */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </NavLink>

            {/* Products */}
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Products
            </NavLink>

            {/* Categories */}
            <div className="dropdown">

              <button
                className="nav-link dropdown-toggle border-0 bg-transparent"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </button>

              <ul
                className="dropdown-menu overflow-auto"
                style={{ maxHeight: "300px" }}
              >

                {categories.map((category) => (
                  <li key={category.slug}>
                    <NavLink
                      className="dropdown-item"
                      to={`/categories/${category.slug}`}
                    >
                      {category.name}
                    </NavLink>
                  </li>
                ))}

              </ul>

            </div>

          </div>
        </div>


        {/* =========================
            Right Side
        ========================= */}

        <div className="RightSide d-flex align-items-center gap-4">

          {/* Wishlist */}
          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              `text-dark fs-4 ${
                isActive ? "text-primary" : ""
              }`
            }
            aria-label="Wishlist"
          >
            <i className="bi bi-suit-heart"></i>
          </NavLink>

          {/* Cart */}
          <NavLink
            to="/card"
            className={({ isActive }) =>
              `text-dark fs-4 ${
                isActive ? "text-primary" : ""
              }`
            }
            aria-label="Cart"
          >
            <i className="bi bi-cart"></i>
          </NavLink>

          {/* Login */}
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "btn btn-primary active"
                : "btn btn-primary"
            }
          >
            Login
          </NavLink>

        </div>


        {/* =========================
            Mobile Offcanvas
        ========================= */}

        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="sideNav"
          aria-labelledby="sideNavLabel"
        >

          {/* Offcanvas Header */}
          <div className="offcanvas-header">

            <h5
              className="offcanvas-title"
              id="sideNavLabel"
            >
              <i className="bi bi-basket2 me-2"></i>
              Shoply
            </h5>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>

          </div>


          {/* Offcanvas Body */}
          <div className="offcanvas-body">

            <ul className="navbar-nav">

              {/* Home */}
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active"
                      : "nav-link"
                  }
                  data-bs-dismiss="offcanvas"
                >
                  <i className="bi bi-house me-2"></i>
                  Home
                </NavLink>
              </li>


              {/* Products */}
              <li className="nav-item">
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active"
                      : "nav-link"
                  }
                  data-bs-dismiss="offcanvas"
                >
                  <i className="bi bi-grid me-2"></i>
                  Products
                </NavLink>
              </li>


              {/* Cart */}
              <li className="nav-item">
                <NavLink
                  to="/card"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active"
                      : "nav-link"
                  }
                  data-bs-dismiss="offcanvas"
                >
                  <i className="bi bi-cart me-2"></i>
                  Cart
                </NavLink>
              </li>


              {/* Wishlist */}
              <li className="nav-item">
                <NavLink
                  to="/wishlist"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active"
                      : "nav-link"
                  }
                  data-bs-dismiss="offcanvas"
                >
                  <i className="bi bi-heart me-2"></i>
                  Wishlist
                </NavLink>
              </li>


              {/* Categories */}
              <li className="nav-item dropdown">

                <button
                  className="nav-link dropdown-toggle border-0 bg-transparent p-0 mt-2"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-tags me-2"></i>
                  Categories
                </button>

                <ul
                  className="dropdown-menu overflow-auto"
                  style={{ maxHeight: "300px" }}
                >

                  {categories.map((category) => (
                    <li key={category.slug}>

                      <NavLink
                        className="dropdown-item"
                        to={`/categories/${category.slug}`}
                        data-bs-dismiss="offcanvas"
                      >
                        {category.name}
                      </NavLink>

                    </li>
                  ))}

                </ul>

              </li>


              {/* Login */}
              <li className="nav-item mt-3">

                <NavLink
                  to="/login"
                  className="btn btn-primary w-100"
                  data-bs-dismiss="offcanvas"
                >
                  <i className="bi bi-box-arrow-in-right me-2"></i>
                  Login
                </NavLink>

              </li>

            </ul>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;