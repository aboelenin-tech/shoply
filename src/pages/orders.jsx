
import { NavLink } from "react-router-dom";
import useCartStore from "../store/cartStore";
import OrderCard from "../components/OrderCard";

function Orders() {
    const orders = useCartStore((state) => state.orders);
console.log("ORDERS:", orders);
    return (
        <div className="page-animation">
       
        <div className="p-4">

            {/* Header */}
            <div className="border-bottom p-3 mb-5">
                <h1 className="fw-bold">
                    My Orders
                </h1>

                <p className="px-1 text-secondary">
                    {orders.length} orders
                </p>
            </div>

            <div className="container">

                <div className="border shadow-sm p-4 mb-5 bg-body-tertiary rounded-4">

                    {/* ================= EMPTY ORDERS ================= */}
                    {orders.length === 0 ? (

                        <div className="d-flex flex-column align-items-center text-center py-5">

                            <div
                                className="d-flex justify-content-center align-items-center rounded-circle bg-primary bg-opacity-10 mb-4"
                                style={{
                                    width: "140px",
                                    height: "140px",
                                }}
                            >
                                <i className="bi bi-bag-x fs-1 text-primary"></i>
                            </div>

                            <h3 className="fw-bold mb-2">
                                No orders yet
                            </h3>

                            <p className="text-secondary mb-4">
                                You haven't placed any orders yet.
                                <br />
                                Browse our products and place your first order.
                            </p>

                            <NavLink
                                to="/products"
                                className="btn btn-primary rounded-pill px-4 py-2"
                            >
                                <i className="bi bi-bag me-2"></i>
                                Browse Products
                            </NavLink>

                        </div>

                    ) : (

                        /* ================= ORDERS ================= */
                        <div>

                            {orders.map((order) => (
                                <OrderCard
                                    key={order.id}
                                    order={order}
                                />
                            ))}

                        </div>

                    )}

                </div>

            </div>

        </div>
         
      </div>
    );
}

export default Orders;
