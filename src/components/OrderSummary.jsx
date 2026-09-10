import useCartStore from "../store/cartStore";
import { useNavigate } from "react-router-dom";

function OrderSummary() {
    const cart = useCartStore((state) => state.cart);
    const calcSubtotal = useCartStore((state) => state.calcSubtotal);
    const calcShipping = useCartStore((state) => state.calcShipping);
    const calcTotal = useCartStore((state) => state.calcTotal);
    const createOrder = useCartStore((state) => state.createOrder);

    const navigate = useNavigate();

    const handlePlaceOrder = () => {
        const order = createOrder();

        console.log("NEW ORDER:", order);

        if (order) {
            navigate("/orders");
        }
    };

    const subtotal = calcSubtotal();
    const shipping = calcShipping();
    const total = calcTotal();

    return (
        <div className="border-0 shadow-sm rounded-4">
            <div className="card-body p-4">

                {/* Header */}
                <div className="d-flex align-items-center mb-4">
                    <div
                        className="d-flex align-items-center justify-content-center rounded-3 me-3"
                        style={{
                            width: "45px",
                            height: "45px",
                            backgroundColor: "#e7f1ff",
                        }}
                    >
                        <i className="bi bi-receipt text-primary fs-5"></i>
                    </div>

                    <div>
                        <h4 className="fw-bold mb-0">
                            Order Summary
                        </h4>

                        <small className="text-muted">
                            {cart.length} item{cart.length !== 1 ? "s" : ""}
                        </small>
                    </div>
                </div>

                {/* Products */}
                <div>
                    {cart.map((item) => {
                        const quantity = item.quantity || 1;

                        return (
                            <div
                                key={item.id}
                                className="d-flex align-items-center gap-3 mb-3"
                            >
                                {/* Product Image */}
                                <div
                                    className="border rounded-3 d-flex align-items-center justify-content-center"
                                    style={{
                                        width: "70px",
                                        height: "70px",
                                        flexShrink: 0,
                                    }}
                                >
                                    <img
                                        src={item.image || item.thumbnail}
                                        alt={item.title}
                                        style={{
                                            width: "60px",
                                            height: "60px",
                                            objectFit: "contain",
                                        }}
                                    />
                                </div>

                                {/* Product Info */}
                                <div className="flex-grow-1">
                                    <h6 className="mb-1 fw-semibold">
                                        {item.title.length > 28
                                            ? item.title.slice(0, 28) + "..."
                                            : item.title}
                                    </h6>

                                    <small className="text-muted">
                                        Qty: {quantity}
                                    </small>
                                </div>

                                {/* Product Total */}
                                <span className="fw-semibold">
                                    ${(item.price * quantity).toFixed(2)}
                                </span>
                            </div>
                        );
                    })}
                </div>

                <hr className="my-4" />

                {/* Subtotal */}
                <div className="d-flex justify-content-between mb-3">
                    <span className="text-muted">
                        Subtotal
                    </span>

                    <span className="fw-semibold">
                        ${subtotal.toFixed(2)}
                    </span>
                </div>

                {/* Shipping */}
                <div className="d-flex justify-content-between mb-3">
                    <span className="text-muted">
                        Shipping
                    </span>

                    <span className="fw-semibold">
                        {shipping === 0
                            ? "Free"
                            : `$${shipping.toFixed(2)}`}
                    </span>
                </div>

                <hr />

                {/* Total */}
                <div className="d-flex justify-content-between align-items-center my-4">
                    <span className="fw-bold fs-5">
                        Total
                    </span>

                    <span className="fw-bold text-primary fs-4">
                        ${total.toFixed(2)}
                    </span>
                </div>

                {/* Place Order */}
                <button
                    onClick={handlePlaceOrder}
                    disabled={cart.length === 0}
                    className="btn btn-primary w-100 py-3 fw-semibold rounded-3"
                >
                    <i className="bi bi-lock-fill me-2"></i>
                    Place Order
                </button>

                {/* Secure Checkout */}
                <div className="text-center mt-3">
                    <small className="text-muted">
                        <i className="bi bi-shield-check me-1"></i>
                        Secure checkout
                    </small>
                </div>

            </div>
        </div>
    );
}

export default OrderSummary;