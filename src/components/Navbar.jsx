import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary">
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

          {/* Logo */}
          <NavLink className="navbar-brand m-2 logo" to="/">
            <i className="bi bi-bag-heart-fill"></i>
            Shoply
          </NavLink>

        </div>

        {/* Sidebar Links appear in Navbar on LG+ */}
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

          <NavLink
            to="/card"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Cart
          </NavLink>

          <NavLink
            to="/Catigories"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Categories
          </NavLink>

        </div>

        {/* Right Side */}
        <div className="RightSide d-flex align-items-center gap-4">

          {/* Wishlist */}
          <NavLink to="/wishlist" className="text-dark fs-4">
            <i className="bi bi-bag-heart"></i>
          </NavLink>

          {/* Cart */}
          <NavLink to="/card" className="text-dark fs-4">
            <i className="bi bi-basket3"></i>
          </NavLink>

          {/* Login */}
          <NavLink to="/login" className="btn btn-primary">
            Login
          </NavLink>

        </div>

        {/* Offcanvas Sidebar - only used below LG */}
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="sideNav"
          aria-labelledby="sideNavLabel"
        >

          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="sideNavLabel">
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
                  to="/Catigories"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Categories
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