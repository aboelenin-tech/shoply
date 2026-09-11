import { NavLink } from "react-router-dom";

function TrackOrderBanner() {
  return (
    <div className="container my-5 ">
      <NavLink
        to="/orders"
        className="text-decoration-none text-white"
      >
        <div className=" bg-primary border-0 rounded-4 shadow p-4">
          <div className="d-flex justify-content-between align-items-center">

            <div>
              <h4 className="fw-bold mb-2">
                Track Your Order
              </h4>

              <p className="mb-0">
                Check your order status and delivery.
              </p>
            </div>

            <i className="bi bi-box-seam display-5 opacity-50"></i>

          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default TrackOrderBanner;