// import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar  bg-body-tertiary">

      <div className="container-fluid d-flex justify-content-between">
        <div className="leftSide">

          {/* Toggle Button */}
          <button
            className="bg-transparent border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sideNav"
            aria-controls="sideNav"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>

          </button>
          {/* Logo */}
          <NavLink className="navbar-brand  m-2 " >
            Shoply
          </NavLink>
        </div>

        <div className="RightSide d-flex flex-row justify-content-between gap-4">


          {/* Wishlist */}
          <NavLink to="/wishlist" className="text-dark fs-4">
            <i class="bi bi-bag-heart"></i>
          </NavLink>

          {/* Cart */}
          <NavLink to="/card" className="text-dark fs-4">
            <i class="bi bi-basket3"></i>
          </NavLink>

          {/* Login */}
          <NavLink to="/login" className="btn btn-primary">
            Login
          </NavLink>

        </div>



        {/* Side Navigation */}
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="sideNav"
          aria-labelledby="sideNavLabel"
        >


          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="sideNavLabel">
              <i class="bi bi-basket2"></i>
              Shoply
            </h5>

            <button
              type="button"
              className="btn-close "
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
                    isActive ? "nav-link active" : "nav-link "
                  }
                >
                  Card
                </NavLink>
              </li>
            
              <li className="nav-item disabled">
                <NavLink
                  to="/Catigories"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  CATEGORIES
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