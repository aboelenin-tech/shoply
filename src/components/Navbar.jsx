import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary sticky-top">
      <div className="container-fluid">

        <div className="leftSide d-flex align-items-center">

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

          <NavLink className="navbar-brand m-2 logo" to="/">
            <i className="bi bi-bag-heart-fill"></i>
            Shoply
          </NavLink>

        </div>

        <div className="d-none d-lg-flex align-items-center gap-4">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Products
          </NavLink>

         

          

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

              <li>
                <NavLink
                  className="dropdown-item"
                  to="/categories/beauty"
                >
                  Beauty
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="dropdown-item"
                  to="/categories/fragrances"
                >
                  Fragrances
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="dropdown-item"
                  to="/categories/furniture"
                >
                  Furniture
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="dropdown-item"
                  to="/categories/groceries"
                >
                  Groceries
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="dropdown-item"
                  to="/categories/sports"
                >
                  Sports
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="dropdown-item"
                  to="/categories/electronics"
                >
                  Electronics
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="dropdown-item"
                  to="/categories/laptops"
                >
                  Laptops
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="dropdown-item"
                  to="/categories/mobile-accessories"
                >
                  Mobile Accessories
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="dropdown-item"
                  to="/categories/skin-care"
                >
                  Skin Care
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="dropdown-item"
                  to="/categories/mens-shirts"
                >
                  Men's Shirts
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="dropdown-item"
                  to="/categories/womens-dresses"
                >
                  Women's Dresses
                </NavLink>
              </li>

            </ul>

          </div>

        </div>

        <div className="RightSide d-flex align-items-center gap-4">

          <NavLink
            to="/wishlist"
            className="text-dark fs-4"
          >
            <i className="bi bi-bag-heart"></i>
          </NavLink>

          <NavLink
            to="/card"
            className="text-dark fs-4"
          >
            <i className="bi bi-basket3"></i>
          </NavLink>

          <NavLink
            to="/login"
            className="btn btn-primary"
          >
            Login
          </NavLink>

        </div>

        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="sideNav"
          aria-labelledby="sideNavLabel"
        >

          <div className="offcanvas-header">

            <h5
              className="offcanvas-title"
              id="sideNavLabel"
            >
              <i className="bi bi-basket2"></i>
              Shoply
            </h5>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>

          </div>

          <div className="offcanvas-body">

            <ul className="navbar-nav">

              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Products
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/card"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Cart
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/wishlist"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                 Wishlist
                </NavLink>
              </li>

              <li className="nav-item dropdown">

                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>

                <ul
                  className="dropdown-menu overflow-auto"
                  style={{ maxHeight: "300px" }}
                >

                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/categories/beauty"
                    >
                      Beauty
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/categories/fragrances"
                    >
                      Fragrances
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/categories/furniture"
                    >
                      Furniture
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/categories/groceries"
                    >
                      Groceries
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/categories/sports"
                    >
                      Sports
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/categories/electronics"
                    >
                      Electronics
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/categories/laptops"
                    >
                      Laptops
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/categories/mobile-accessories"
                    >
                      Mobile Accessories
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/categories/skin-care"
                    >
                      Skin Care
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/categories/mens-shirts"
                    >
                      Men's Shirts
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/categories/womens-dresses"
                    >
                      Women's Dresses
                    </NavLink>
                  </li>

                </ul>

              </li>

            </ul>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;